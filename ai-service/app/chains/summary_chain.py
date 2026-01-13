from langchain_ollama import ChatOllama
from langchain_core.output_parsers import StrOutputParser
from app.prompts.destination_summary import destination_summary_prompt

llm = ChatOllama(
    model="llama3",
    temperature=0.2
)

output_parser = StrOutputParser()

summary_chain = destination_summary_prompt | llm | output_parser
