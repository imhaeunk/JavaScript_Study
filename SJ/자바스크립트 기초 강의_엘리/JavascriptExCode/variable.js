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
console.log (`value: ${count}, type: ${typeof count}`);
console.log (`value: ${size}, type: ${typeof size}`);

//number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0; //무한대 숫자값
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2*53) ~ 2*53
console.log (`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string
const char = 'c';
const minsu = 'minsu';
const greeting = 'hello ' + minsu;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloMinsu = `hi ${minsu}`; //template literals (string)
console.log(`value: ${helloMinsu}, type: ${typeof helloMinsu}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); 
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2 );
console.log(`value: ${symbol1.description}, type: ${typeof symbol2.description}`);

//object, real-life object, data structure
//const로 지정했기 때문에 오브젝트 자체는 잠겨있지만, 오브젝트 안의 변수들에 접근했을 때는 다른 값으로 할당이 가능함.
const seokjeong = { name: 'seokjeong', age: 20 };
seokjeong.age = 28;

//5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = 1 + '7';
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //error
//javascript는 런타임에서 타입이 결정되기 떄문에 이런 것 때문에 런타임 에러 발생하는 경우가 있음 
//이것 때문에 TypeScript가 나오게 됨
//TypeScript는 Javascript위에 Type이 더 올려진 언어
//Javascript는 브라우저가 이해할 수 있기 때문에 실시간 연동가능하지만 TS는 브라우저가 이해할 수 있는 자바스크립트로 transCopiler를 이용해야함.