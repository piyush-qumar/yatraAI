from fastapi import APIRouter
from app.schemas.destination import DestinationContext, AISummaryResponse

router = APIRouter()

@router.post("/generate-summary", response_model=AISummaryResponse, tags=["AI"])
def generate_summary(payload: DestinationContext):
    #stub: to be replaced with llm later
        summary = (
        f"{payload.name} is a popular destination in {payload.region}. "
        f"It is known for its {payload.terrain.lower()} terrain and is best visited during "
        f"{', '.join(payload.bestMonths)}. Visitors can enjoy activities like "
        f"{', '.join(payload.dos)}. However, {', '.join(payload.donts)} to ensure a pleasant experience."
    # ).format(
    #     name=payload.name,
    #     best_months=", ".join(payload.bestMonths),
    #     region=payload.region,
    #     dos=", ".join(payload.dos),
    #     donts=", ".join(payload.donts)
        )
        return {"summary": summary}
