module.exports = function findCarById(inventory, id) {
    if (Array.isArray(inventory)) {
        if (id) {
            if (inventory[id - 1]) {
                return `Car ${id} is a ${inventory[id - 1].car_year} ${inventory[id - 1].car_make} ${inventory[id - 1].car_model}`;
            } else {
                return `Car ${id} is not present in inventory.`
            }
        } else {
            console.log('Second Argument to be passed.');
        }
    } else {
        console.log('First Argument should be an Array.');
    }
}