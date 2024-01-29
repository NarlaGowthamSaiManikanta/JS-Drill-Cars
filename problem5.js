const extractCarYears = require('./problem4.js');

module.exports = function findingCarsMadeBefore2000(inventory) {
    if (Array.isArray(inventory)) {
        const carYears = extractCarYears(inventory);
        let carsMadeBefore2000 = [];

        for (carYearsIndex = 0; carYearsIndex < carYears.length; carYearsIndex++) {
            if (carYears[carYearsIndex] < 2000) {
                carsMadeBefore2000.push(inventory[carYearsIndex]);
            }
        }

        return carsMadeBefore2000;
    } else {
        console.log('First Argument should be an Array.');
    }
}