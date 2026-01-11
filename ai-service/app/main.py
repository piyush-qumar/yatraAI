from fastapi import FastAPI
from app.routers import ai, health

app = FastAPI(
    title="Yatra AI Service",
    description="API service for Yatra AI functionalities",
    version="1.0.0"
)

app.include_router(ai.router, prefix = "/api")
app.include_router(health.router, prefix = "/api")