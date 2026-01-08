const Destination  = require('../models/destination.model');

const createDestination = async(data) => {
    return await Destination.create(data);
    // const destination = new Destination(data);
    // return await destination.save();
}

const getAllDestinations = async(filters, page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    return await Destination.find(filters).skip(skip).limit(limit);
};

const getDestinationById = async(id) => {
    return await Destination.findById(id);
};

module.exports = {
    createDestination,
    getAllDestinations,
    getDestinationById
};