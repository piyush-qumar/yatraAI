const destinationService = require('../services/destination.service');
const { createDestinationSchema } = require('../validators/destination.validator');

exports.createDestination = async (req, res) => {
    try {
        const { error } = createDestinationSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const destination = await destinationService.createDestination(req.body);
        res.status(201).json(destination);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllDestinations = async (req, res) => {
    try {
        const {terrain, page =1, limit =10} = req.query;
        const filters = {};
        if(terrain) {
            filters.terrain = terrain;
        }
        const destinations = await destinationService.getAllDestinations(filters, Number(page), Number(limit));
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