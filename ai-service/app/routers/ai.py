from fastapi import APIRouter
from app.schemas.destination import DestinationContext, AISummaryResponse
from app.chains.summary_chain import summary_chain
from app.vectorstore.chroma_store import add_destination
from app.vectorstore.chroma_store import search_destinations
from app.chains.summary_chain import llm 

router = APIRouter()

@router.post("/generate-summary", response_model=AISummaryResponse, tags=["AI"])
def generate_summary(payload: DestinationContext):
    summary = summary_chain.invoke({
        "name": payload.name,
        "region": payload.region,
        "terrain": payload.terrain,
        "bestMonths": ", ".join(payload.bestMonths),
        "dos": ", ".join(payload.dos),
        "donts": payload.donts
    })
    return {"summary": summary}

@router.post("/index-destination", tags=["AI"])
def index_destination(payload: dict):
    add_destination(
        doc_id = payload["id"],
        text = payload["text"],
        metadata = payload.get("metadata", {})
    )
    return {"status": "index success"}

@router.post("/ask" , tags=["AI"])
def ask_question(payload: dict):
    query = payload["question"]
    results = search_destinations(query)
    context = "\n".join(results["documents"][0])

    prompt = f"""
Answer the question using ONLY the context below.
If the answer is not present, say "I don't have enough information."

Context:
{context}

Question:
{query}
"""
    answer = llm.invoke(prompt)
    if "I don't have enough information" in answer and len(answer.strip()) < 10:
        answer = "I don't have enough information to answer that question."
    return {"answer": answer}