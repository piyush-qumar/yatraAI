const axios = require('axios');
const AI_SERVICE_URL = 'http://localhost:8000/api/generate-summary';
const AI_INDEX_URL = 'http://localhost:8000/api/index-destination';


const generateDestinationSummary = async (destination) => {
    const payload = {
        name: destination.name,
        region: destination.region,
        terrain: destination.terrain,
        bestMonths: destination.bestMonths || [],
        dos: destination.dos || [],
        donts: destination.donts || [],
    };
    const response = await axios.post(AI_SERVICE_URL, payload);
    return response.data.summary;
};

const indexDestination = async (destination) => {
    const indexText = `
                        Destination: ${destination.name}
                        Region: ${destination.region}
                        Terrain: ${destination.terrain}
                        Best months to visit: ${destination.bestMonths.join(", ")}
                        Safety tips: ${destination.safetyTips.join(", ")}
                        Dos: ${destination.dos.join(", ")}
                        Donts: ${destination.donts.join(", ")}
                        `;
    await axios.post(AI_INDEX_URL, {
        id: destination._id.toString(),
        // text: destination.aiSummary,
        text: indexText,
        metadata: {
            name: destination.name,
            region: destination.region,
            terrain: destination.terrain,
        }
    });
};

module.exports = {
    generateDestinationSummary,
    indexDestination,
};