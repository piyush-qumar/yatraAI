const axios = require('axios');
const AI_SERVICE_URL = 'http://localhost:8000/api/generate-summary';

const generateDestinationSummary = async(destination) => {
    const payload = {
        name: destination.name,
        region: destination.region,
        terrain: destination.terrain,
        bestMonths: destination.bestMonths || [],
        dos: destination.dos || [],
        donts: destination.donts || [],
    };
    const response  = await axios.post(AI_SERVICE_URL, payload);
    return response.data.summary;
};

module.exports = {
    generateDestinationSummary,
};