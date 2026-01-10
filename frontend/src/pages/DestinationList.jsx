import { useEffect, useState } from "react";
import { fetchDestinations } from "../services/destinationService";

const PAGE_SIZE = 6;

const DestinationList = () => {
    const [destinations, setDestinations] = useState([]);
    const [terrain, setTerrain] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const loadDestinations = async () => {
        try {
            const params = { page, limit: PAGE_SIZE };
            if (terrain) {
                params.terrain = terrain;
            }
            const response = await fetchDestinations(params);
            if (!response) {
                setDestinations([]);
                setTotalPages(1);
                return;
            }

            if (Array.isArray(response)) {
                setDestinations(response);
                setTotalPages(1);
            } else {
                setDestinations(response.data || []);
                setTotalPages(response.totalPages || 1);
            }
        } catch (error) {
            console.error("Failed to load destinations", error);
            setDestinations([]);
            setTotalPages(1);
        }
    };

    useEffect(() => {
        loadDestinations();
    }, [terrain, page]);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Indian Destinations</h1>
            <div style={{ marginBottom: "10px" }}>
                <label>Terrain:</label>
                <select value={terrain} onChange={(e) => {
                    setPage(1);
                    setTerrain(e.target.value);
                }}><option value="">All</option>
                    <option value="HIMALAYAN">Himalayan</option>
                    <option value="COASTAL">Coastal</option>
                    <option value="FOREST">Forest</option>
                    <option value="DESERT">Desert</option>
                    <option value="PLAINS">Plains</option>
                </select>
            </div>

            <ul>
                {destinations.map((destination) => (
                    <li key={destination._id}>
                        <strong>{destination.name}</strong> — {destination.region} ({destination.terrain})
                    </li>
                ))}
            </ul>
            {/* Pagination */}
            <div style={{ marginTop: "20px" }}>
                <button onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}>
                    Previous
                </button>
                <span style={{ margin: "0 10px" }}>Page {page}</span>
                <button onClick={() => setPage((p) => p + 1)}
                    disabled={
                        Array.isArray(destinations)
                            ? destinations.length < PAGE_SIZE
                            : page >= totalPages
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DestinationList;