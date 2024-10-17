const sum = require("./sum");
const multiply = require("./multiplication");
const sub = require("./subtraction");
const Div = require("./division");

let SumA = 12;
let SumB = 3;

let Add = sum(SumA, SumB);
console.log(Add);
let MultiA = 2;
let MultiB = 3;
let Multi = multiply(MultiA, MultiB);
console.log(Multi);
let SubA = 1;
let SubB = 3;
let subResult = sub(SubA, SubB);
console.log(subResult);
let DivA = 3;
let DivB = 3;
let DivResult = Div(DivA, DivB);
console.log(DivResult);
