module.exports = function lastCarInInventory(inventory) {
    if (Array.isArray(inventory)) {
        if (inventory.length) {
            return `Last car is a ${inventory[inventory.length - 1].car_make} ${inventory[inventory.length - 1].car_model}`;
        } else {
            return 'The Inventory is Empty';
        }
    } else {
        console.log('First Argument should be an Array.');
    }
}