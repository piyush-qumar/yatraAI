from langchain_core.prompts import PromptTemplate

destination_summary_prompt = PromptTemplate(
    input_variables=["name", "region", "terrain", "bestMonths", "dos", "donts"],
    template="""
You are a travel intelligence assistant.

Generate a concise, factual summary for the destination below.
Do NOT invent facts.
Use only the provided data.

Destination: {name}
Region: {region}
Terrain: {terrain}
Best months: {bestMonths}
Dos: {dos}
Donts: {donts}

Return 6-7 sentences.
"""
)
