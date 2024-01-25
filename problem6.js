module.exports = function extractingAudiAndBMWCars(inventory) {
    let audiAndBMWCars = [];

    for (inventoryIndex = 0; inventoryIndex < inventory.length; inventoryIndex++){
        if (inventory[inventoryIndex].car_make == 'Audi' || inventory[inventoryIndex].car_make == 'BMW') {
            audiAndBMWCars.push(inventory[inventoryIndex]);
        }
    }

    return audiAndBMWCars;
}