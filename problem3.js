module.exports = function findingSortedCarModels(inventory) {
    let carModels = [];

    for (inventoryIndex = 0; inventoryIndex < inventory.length; inventoryIndex++) {
        carModels.push(inventory[inventoryIndex].car_model);
    }

    return carModels.sort();
}