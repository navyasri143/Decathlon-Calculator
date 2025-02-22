const mongoose = require('mongoose');

const decathlonEventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    events: { 
        type: Map, 
        of: Number, 
        required: true 
    },
    totalScore: { type: Number, required: true },
    eventDate: { type: Date, default: Date.now },
});


const DecathlonEvent = mongoose.model('DecathlonEvent', decathlonEventSchema);

module.exports = DecathlonEvent;