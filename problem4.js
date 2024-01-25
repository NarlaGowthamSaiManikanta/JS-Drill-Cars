module.exports = function extractCarYears(inventory) {
    let carYears = [];

    for(inventoryIndex = 0; inventoryIndex < inventory.length; inventoryIndex++) {
        carYears.push(inventory[inventoryIndex].car_year)
    }

    return carYears;
}