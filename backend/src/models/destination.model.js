const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    countryCode: {
        type: String,
        default: 'IN',
        // required: true, // since it is india first , firstly making it optional
    },
    region: {
        type: String,
        required: true,
    },
    terrain: {
        type: String,
        enum: ["HIMALAYAN", "COASTAL", "DESERT", "PLAINS", "FOREST"],
    },
    bestMonths: {
        type: [String],
    },
    activities: {
        type: [String],
    },
    averageCostPerDay: {
        type: Number,
    },
    dos: {
        type: [String],
    },
    donts: {
        type: [String],
    },
    safetyTips: {
        type: [String],
    },
    bookingGuide: {
        type: [String],
    },
    aiSummary: {
        type: String,
    },
    embedding: {
        type: [Number],
        default: [],
    },
}, { timestamps: true });
module.exports = mongoose.model('Destination', destinationSchema);
