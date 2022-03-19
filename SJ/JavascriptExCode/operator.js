//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = 
'''
${1 + 2}`);


//2. Numeric operators
console.log(1 + 1); // add 
console.log(1 - 1); // substract
console.log(1 / 1); //divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preIncrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${preIncrement}, counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. Logical Operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or) , finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 || value2 || check()}`);
//연산이 많은 함수를 호출하거나 무거운 것들은 가장 먼저 비교하는 것이 아니라 제일 마지막에 호출하는 것이 좋음

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('😊');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
//웬만하면 코딩할 때 strict equality 사용하기!
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
//실제로 seokjeong1, seokjeong2는 각각 다른 레퍼런스에 들어있음
const seokjeong1 = {name: 'seokjeong'};
const seokjeong2 = {name: 'seokjeong'};
const seokjeong3 = seokjeong1;
console.log(seokjeong1 == seokjeong2);
console.log(seokjeong1 === seokjeong2);
console.log(seokjeong1 === seokjeong3);

//equality puzzler
console.log(0 == false); // t
console.log(0 === false); // f
console.log('' == false); // t
console.log('' === false); // f
console.log(null == undefined); //t
console.log(null === undefined); //f

// 8. Conditional Operators: if
// if, else if, else
const name = 'seokjeong';
if (name === 'seokjeong') {
    console.log('Welcome, Seokjeong');
} else if (name === 'coder') {
    console.log('Amazing coder!');
} else {
    console.log('unknown');
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'seokjeong' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loops, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then, check the condition
do {
    console.log(`do while: ${i}`);
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i - 2) {
    // inline variable declaration (블럭 안에 let 지역변수 선언)
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. interate from 0 to 10 and print only even numbers
// (use continue)
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0)
        continue;
    console.log(`Q1. ${i}`);
}
// Q2. interate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i <= 10; i++) {
    if (i > 8)
        break;
    console.log(`Q2. ${i}`);
} 