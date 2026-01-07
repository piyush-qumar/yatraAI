const destinationService = require('../services/destination.service');

exports.createDestination = async (req, res) => {
    try {
        const destination = await destinationService.createDestination(req.body);
        res.status(201).json(destination);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllDestinations = async (req, res) => {
    try {
        const destinations = await destinationService.getAllDestinations();
        res.status(200).json(destinations);  
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDestinationById = async (req, res) => {
    try {
        const destination = await destinationService.getDestinationById(req.params.id);
        if (!destination) {
            return res.status(404).json({ error: 'Destination not found' });
        }
        res.status(200).json(destination);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};