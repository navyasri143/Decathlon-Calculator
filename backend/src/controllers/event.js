const DecathlonEvent = require('../models/index');

const saveEventResults = async (req, res) => {
    const { name, events, totalScore } = req.body;
    console.log('Saving event results:', { name, events, totalScore });

    try {
        const event = new DecathlonEvent({
            name,
            events: new Map(Object.entries(events)),  // ✅ Ensure events is a Map
            totalScore,
        });
        

        await event.save();

        res.status(201).json({ message: 'Event results saved successfully' });
    } catch (error) {
        console.error('Error saving event results:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    saveEventResults,
};