const joi = require('joi');

exports.createDestinationSchema = joi.object({
    name: joi.string().min(3).max(100).required(),
    // countryCode: joi.string().length(2).optional(),
    region: joi.string().min(3).max(100).required(),
    terrain: joi.string().valid("HIMALAYAN", "COASTAL", "DESERT", "PLAINS", "FOREST").required(),
    bestMonths: joi.array().items(joi.string()).optional(),
    activities: joi.array().items(joi.string()).optional(),
    averageCostPerDay: joi.number().min(0).optional(),
    dos: joi.array().items(joi.string()).optional(),
    donts: joi.array().items(joi.string()).optional(),
    safetyTips: joi.array().items(joi.string()).optional(),
    bookingGuide: joi.array().items(joi.string()).optional(),
// we did not include aiSummary and embedding as validation layer is not concerned with them and also they will be generated internally by backend and not by user.
});
