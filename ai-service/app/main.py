from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import ai, health

app = FastAPI(
    title="Yatra AI Service",
    description="API service for Yatra AI functionalities",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # or ["*"]
    allow_credentials=True,
    allow_methods=["*"],   # THIS enables OPTIONS
    allow_headers=["*"],
)

app.include_router(ai.router, prefix = "/api")
app.include_router(health.router, prefix = "/api")