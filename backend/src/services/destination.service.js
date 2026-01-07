const Destination  = require('../models/destination.model');

const createDestination = async(data) => {
    return await Destination.create(data);
    // const destination = new Destination(data);
    // return await destination.save();
}

const getAllDestinations = async() => {
    return await Destination.find();
};

const getDestinationById = async(id) => {
    return await Destination.findById(id);
};

module.exports = {
    createDestination,
    getAllDestinations,
    getDestinationById
};