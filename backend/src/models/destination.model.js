const mongooose = require('mongoose');

const destinationSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
    },
    countryCode: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    terrain: {
        type: String,
        enum: ["mountain", "desert", "forest", "plains"],
    },
    bestMonthsToVisit: {
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
    bookingGuides: {
        type: [String],
    },
    aisummary: {
        type: String,
    },
    embedding: {
        type: [Number],
    },
}, { timestamps: true });
