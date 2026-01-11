from pydantic import BaseModel
from typing import Optional, List

class DestinationContext(BaseModel):
    name:str
    region:str
    terrain:str
    bestMonths:List[str]
    dos:List[str]
    donts:List[str]

class AISummaryResponse(BaseModel):
    summary:str