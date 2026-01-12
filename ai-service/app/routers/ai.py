from fastapi import APIRouter
from app.schemas.destination import DestinationContext, AISummaryResponse
from app.chains.summary_chain import summary_chain

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