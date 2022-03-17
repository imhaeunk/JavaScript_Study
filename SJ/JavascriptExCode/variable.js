//1. Use strict
//added in ES 5
//use this for Vanila Javascript.
'use strict';

//2. Variable
//let (added in ES6)
let globalName = 'global name'; 
{
    let name = 'seokjeong';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName); 

//var (don't ever use this!)
//var hoisting (move declaration from bottom to top)
//has no block scope
{
    console.log(age);
    age = 4;
    console.log(age);
    var age;
}
console.log(age);

//3.Constants
//favor Immutable data type for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5; 

//4. Variable types
//primitive, single item : number, string, boolean, null, undefined, symbol 
//object, box container
//function, first-class function
const count = 17;
const size = 17.1;
console.log ('value: ${count}, type: ${typeof count}');
console.log ('value: ${size}, type: ${typeof size}');

//number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0; //무한대 숫자값
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890; //over (-2*53) ~ 2*53
console.log ('value: ${bigInt}, type: ${typeof bigInt}');
Number.MAX_SAFE_INTEGER;
