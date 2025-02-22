const calculateScore = (eventResults) => {
    const scores = {
        '100m': (time) => Math.max(25.4347 * Math.pow((18 - time), 1.81), 0),
        'longJump': (distance) => Math.max(0.14354 * Math.pow((distance - 220), 1.4), 0),
        'shotPut': (distance) => Math.max(51.39 * Math.pow((distance - 1.5), 1.05), 0),
        'highJump': (height) => Math.max(0.8465 * Math.pow((height - 75), 1.42), 0),
        '400m': (time) => Math.max(1.53775 * Math.pow((82 - time), 1.81), 0),
        '110mHurdles': (time) => Math.max(5.74352 * Math.pow((28.5 - time), 1.92), 0),
        'discusThrow': (distance) => Math.max(12.91 * Math.pow((distance - 4), 1.1), 0),
        'poleVault': (height) => Math.max(0.2797 * Math.pow((height - 100), 1.35), 0),
        'javelinThrow': (distance) => Math.max(10.14 * Math.pow((distance - 7), 1.08), 0),
        '1500m': (time) => Math.max(0.03768 * Math.pow((480 - time), 1.85), 0),
    };

    let totalScore = 0;
    const eventScores = {};

    for (const event in eventResults) {
        if (scores[event]) {
            const eventScore = scores[event](eventResults[event]);
            eventScores[event] = eventScore;
            totalScore += eventScore;
        }
    }

    return { totalScore, eventScores };
};

const validateInput = (eventResults) => {
    const constraints = {
        '100m': { min: 10, max: 20 },
        'longJump': { min: 0, max: 1000 },
        'shotPut': { min: 0, max: 23 },
        'highJump': { min: 75, max: 250 },
        '400m': { min: 40, max: 90 },
        '110mHurdles': { min: 13, max: 30 },
        'discusThrow': { min: 0, max: 80 },
        'poleVault': { min: 100, max: 600 },
        'javelinThrow': { min: 0, max: 100 },
        '1500m': { min: 240, max: 600 },
    };

    for (const event in eventResults) {
        if (constraints[event]) {
            const { min, max } = constraints[event];
            if (eventResults[event] < min || eventResults[event] > max) {
                return false; // Invalid input
            }
        }
    }

    return true; // All inputs are valid
};

module.exports = {
    calculateScore,
    validateInput,
};