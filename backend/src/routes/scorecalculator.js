const express = require('express');
const { calculateScore, validateInput } = require('../controllers/score');
const { saveEventResults } = require('../controllers/event');

const router = express.Router();

router.post('/calculate', (req, res) => {
    const { name, events } = req.body;
    console.log('Received /calculate request:', req.body);
  
    if (!validateInput(events)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
  
    const { totalScore, eventScores } = calculateScore(events);
    res.json({ name, events: eventScores, totalScore });
  });
  

router.post('/save-results', async (req, res) => {
    try {
        console.log('Received /save-results request:', req.body);
        await saveEventResults(req, res);  // Directly pass req, res
    } catch (error) {
        console.error('Error in /save-results:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;