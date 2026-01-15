const Destination  = require('../models/destination.model');
const {generateDestinationSummary, indexDestination} = require('./ai.service');

const createDestination = async(data) => {
    const destination = await Destination.create(data);
    try {
    const aiSummary = await generateDestinationSummary(destination);
    destination.aiSummary = aiSummary;
    await destination.save();
    // Index it for RAG
    await indexDestination(destination);
    } catch (error) {
        console.error("AI summary generation failed:", error);
    }
    return destination
}

const getAllDestinations = async(filters, page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
    Destination.find(filters).skip(skip).limit(limit),
    Destination.countDocuments(filters),
  ]);
    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
};

const getDestinationById = async(id) => {
    return await Destination.findById(id);
};

module.exports = {
    createDestination,
    getAllDestinations,
    getDestinationById
};