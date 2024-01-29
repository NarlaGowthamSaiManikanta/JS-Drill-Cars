module.exports = function findingSortedCarModels(inventory) {
    if (Array.isArray(inventory)) {
        let carModels = [];

        for (inventoryIndex = 0; inventoryIndex < inventory.length; inventoryIndex++) {
            carModels.push(inventory[inventoryIndex].car_model);
        }

        return carModels.sort();
    } else {
        console.log('First Argument should be an Array.');
    }
}