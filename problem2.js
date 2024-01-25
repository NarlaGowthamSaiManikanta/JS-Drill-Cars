module.exports = function lastCarInInventory(inventory) {
    return `Last car is a ${inventory[inventory.length - 1].car_make} ${inventory[inventory.length - 1].car_model}`;
}