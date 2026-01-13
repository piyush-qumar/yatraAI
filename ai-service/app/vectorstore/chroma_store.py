import chromadb
from app.embeddings.embedding_model import embedding_model

client = chromadb.Client()
collection = client.get_or_create_collection(name="destinations")

def add_destination(doc_id: str, text: str, metadata: dict):
    embedding = embedding_model.encode(text).tolist()
    collection.add(
        ids = [doc_id],
        embeddings = [embedding],
        metadatas = [metadata],
        documents = [text]
    )
    
def search_destinations(query: str, k: int = 3):
    query_embedding = embedding_model.encode(query).tolist()
    results = collection.query(
        query_embeddings = [query_embedding],
        n_results = k
    )
    return results