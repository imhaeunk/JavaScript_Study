// Function
// - fundamental building block in program
// - subprogram can be used multiple times
// - performs a task or calculates a value 

// Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSomthing, command, verb
// e.g. createCardAndPoint -> createCard, createPoint 
// function is object in JS

function pringHello() {
    console.log('Hello');
}
pringHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object prameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const seokjeong = { name : 'seokjeong' };
changeName(seokjeong);
console.log(seokjeong);

// 3. Default Parameters (added in ES6)
function showMassage(message, from) {
    console.log(`${message} from ${from}`);
}
showMassage('Hi!');//message 파라미터만 들어가면 from은 undefined

function showMassage(message, from = 'unknown') { //default값 지정
    console.log(`${message} from ${from}`);
}
showMassage('Hi!');

// 4. Rest Parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global' //global variable
function printMessage() {
    let message = 'Hello';
    console.log(message); //local variable
    console.log(globalMessage);

    function printAnother() { //똑같은 원칙에 의해 자식은 부모에게서 정의된 것을 확인할 수 있지만 자식에게서 정의된 것을 부모에게서 보려고 하면 에러가 남.
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); //error
}
printMessage();
//console.log(message); //error

// 6. return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic ...
    }
}
// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic..
}

// First-class function
// functions are treated like any other variable
// can be assinged as a value to variable
// can be passed as a argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when execution reaches it.
const print = function() { //anonymous function 익명함수
    console.log('print')
}
print(); // print변수에 함수를 할당했으니 함수호출하듯이 호출하면 됨
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}