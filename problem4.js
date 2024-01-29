module.exports = function extractCarYears(inventory) {
    if (Array.isArray(inventory)) {
        let carYears = [];

        for (inventoryIndex = 0; inventoryIndex < inventory.length; inventoryIndex++) {
            carYears.push(inventory[inventoryIndex].car_year)
        }

        return carYears;
    } else {
        console.log('First Argument should be an Array.');
    }
}