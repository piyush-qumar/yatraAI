import axios from 'axios';

const API_URL = 'http://localhost:9090/api';

export const fetchDestinations = async (params = {}) => {
    // const params = { page, limit, ...filters };
    const response = await axios.get(`${API_URL}/destinations`, { params });
    return response.data;
}