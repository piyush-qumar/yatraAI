const express = require('express');
const {
    createDestination,
    getAllDestinations,
    getDestinationById
} = require('../controllers/destination.controller');

const router = express.Router();

router.post('/', createDestination);
router.get('/', getAllDestinations);
router.get('/:id', getDestinationById);

module.exports = router;