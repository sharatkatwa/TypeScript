"use strict";
function AdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return account.normalUser;
}
function getDateOrString(bot) {
    if (bot instanceof Date)
        return bot;
    return 'this is not a date';
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'fish food';
    }
    pet;
    return 'bird food';
}
function getRectangleRadius(shape) {
    if (shape.kind === 'rectangle') {
        return shape.length * shape.width;
    }
    return 'this is not a rectangle';
}
function getAria(shape) {
    switch (shape.kind) {
        case 'circle': return Math.PI * shape.radius * 2;
        case 'square': return shape.side * shape.side;
        case 'rectangle': return shape.length * shape.width;
        default:
            const _defaultShape = shape;
            return _defaultShape;
    }
}
