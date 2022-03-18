
//1. 'use strict';

//2. variable >> read&write (메모리의 값 읽고 쓰기 가능)
// let (added in ES6) >> 자바스크립트에서 변수 선언 가능한 유일 키워드 
//var는 이제 사용X (아래 이유들로,,,)
//var는 선언전에도 사용 가능하고 에러도 발생X 그래서 이제 사용 X >>var hoisting 이라고 부름(선언 위치 상관없이 항상 젤 위로 선언을 끌어올림)
//var는 블럭스콥 이용 X 

let globalName = 'globalName';
{
    let name = 'elllie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
//블럭 밖에서는 변수 접근X
console.log(globalName);
//글로벌 변수는 블럭스콥{} 관계없이 변수 접근 가능 >> 어플리케이션 시작~끝까지 항상 메모리에 탑재되어 있어 최소한으로 사용! 

//3. constant, read(메모리에서 읽기만 가능) >> use const whenever possible! only use 'let' if variable needs to change.
/*
- immutable data type 가능하면 변경되지 않을 데이터 타입을 상수로! 
const maxNumber =5;

primitive 타입 - number, string, boolean, null, undifined, symbol
>> 값 자체가 메모리에 바로 저장 
object 타입 box container
>> 레퍼런스가 메모리에 바로 저장 
오브젝트는 너무 커서 메모리에 한 번에 올라갈 수 없음 레퍼런스를 통해 실제로 메모리가 담겨있는 곳 가르킴 
function, first-class function

number,string 가 세부(int, long, ...)로 나눠지지 않음 그냥 넘버타입, 스트립 타입! 
boolean의 false는 0, null, undefined, NaN, ''라고 생각 

immutable data types : primitive types, frozen objects(ex. object.freeze())
mutable data types : all objects by default are mutable in JS
>>favor immutable data types always for a few reason:
security 
thread safety 
reduce human mistakes 
*/
//object
const person = {name: 'jhee', age: 20}; //const로 선언되어 한 번 할당된 이 오브젝트는 다른 오브젝트로 변경 불가  
person.age = 21; //그러나 오브젝트 안에 변수가 가르키는 메모리에 할당된 값은 이렇게 변경 가능 

//special numeric values
const infinity = 1/0; //결과값 Infinity
const negativeInfinity = 1/0; //결과값 -Infinity
const nan = 'stringg'/2;  //결과값 NaN

//string 
const char = 'cee';
const greeting = 'hello' + char; //string  연결 가능 hello cee 
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const hello = `hi ${greeting}!`;
console.log(`value: ${hello}, type: ${typeof hello}`);
console.log('value: ' + hello + ' type: ' + typeof hello);

//symbol 은 맵or 자료구조에서 고유한 식별자가 필요하거나 동시에 다발적으로 일어나는 코드에서 우선순위 주고 싶을때 고유한 식별자가 필요할때 사용하는 것 
//동일한 sting을 썼지만('id') symbol은 다른 타입 
const sym1 = Symbol('id'); 
const sym2 = Symbol('id'); 
console.log(sym1 === sym2); //false
//동일한 sting을 썼지만('id') symbol은 같은 타입 
const sym1 = Symbol.for('id'); 
const sym2 = Symbol.for('id'); 
console.log(sym1 === sym2); //true
console.log(`value: ${sym1.description}, type: ${typeof sym1}`);
//.description를 사용해 string으로 변환후 작성해야함 아님 error!

//5. dynamic typing 
//선언할때 타입 선언 안 하고 프로그램이 동작할 떄(런타임) 할당된 값에 따라서 타입이 변경 가능 

let text = 'hello'; 
console.log(`value: ${text}, type: ${typeof text}`) // value:hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`)// value:1, type: number
text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`)// value:75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`)// value:4, type: number

//이런식이면 
console.log(text.charAt(0));
//문자인줄알고 첫번째 인수 호출하면 에러 발생! >> 이런거 해결하기위해 타입스크립트 등장! (타입스크립트는 자바스크립트 위에 타입이 얹어진거)

