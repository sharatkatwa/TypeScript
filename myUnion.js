"use strict";
exports.__esModule = true;
var score = 22;
score = "33";
var ramesh = { name: "ramesh", id: 230 };
ramesh = { adminName: 'ramesh', adminId: 22 };
// function getDbId(id: number | string){
//   // making some API calls
//   console.log(`DB id is: ${id}`)
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else
        id + 3;
}
var data = ["1", 2, "3"];
var pi = 3.14;
pi = 3.14;
