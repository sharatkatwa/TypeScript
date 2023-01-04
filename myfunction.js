"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signupUser(name, phno, pass) {
    return "signup successful with ".concat(name);
}
var loginUser = function (name, pass, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "login successful with ".concat(name);
};
addTwo(4);
getUpper("ds");
signupUser('sj', 324, 'sjpass');
loginUser('h', 'hpass');
