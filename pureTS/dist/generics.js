"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
const newBotle = identityFour({ name: 'ehl', type: 'botle', quantity: 22 });
const userIdentity = identityThree(324);
function getSearchProducts(products) {
    return products[1];
}
const getMoreSearchProducts = (products) => {
    return products[1];
};
function identityFive(val1, val2) {
    return { val1, val2 };
}
class sellItems {
    constructor() {
        this.cart = [];
    }
    addToCart(product, price) {
        this.cart.push(product);
    }
}
