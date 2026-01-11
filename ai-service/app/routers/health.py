from fastapi import APIRouter
from datetime import datetime

router = APIRouter()

@router.get("/health", tags=["Health"])
def health_check():
    """
    Health check endpoint to verify that the service is running.
    """
    return {"status": "healthy", "timestamp": datetime.utcnow(), "service": "AI Service"}