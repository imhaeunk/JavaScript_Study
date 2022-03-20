//1. String concatenation
console.log('my' + ' cat'); 
console.log('1' + 2); 
console.log(`string literals: 

''''
1 + 2 = ${1 + 2}`); 
console.log("elli\'s book"); 
console.log("elli's \n\book"); 

//2. numeric operators
console.log(5 % 2); 
console.log(2 ** 3); 

//3. increment and decrement operators 
let count = 2;
const preIncre = ++count; 
console.log(`preIncre: ${preIncre}, count: ${count}`); 
const postIncre = count++; 
console.log(`preIncre: ${preIncre}, count: ${count}`); 

const preDecre = --count; 
console.log(`preDecre: ${preDecre}, count: ${count}`); 
const postDecre = count--; 
console.log(`postDecre: ${postDecre}, count: ${count}`); 

//4. assignment operators
let x = 3;
let y = 4; 
x += y; // x = x+y;

//5. comparison operators
console.log(10 <= 6);

//6.logical operators
//||, &&, ! 

const val1 = true;
const val2 = 4 < 2;

console.log(`or: &{val1 || val2 || check()}`);
// || or 연산에서 앞에서 true가 나오면 뒤에 실행X 
// >> check() 같은 무거운 연산이 마지막에 오도록하고 호출하는게 효율적! 
// && and 도 앞에서 false 나오면 연산 안 한다 
//>> &&에서 많이 사용하는게 nullableObject 임 오브젝트가 널이면 false라 뒤에가 실행X
if (nullableObject != null){
    nullableObject.something
}

function check(){
    for(let i = 0; i<10; i++){
        //wasting time...
        console.log('낭비쩔');
    }
    return true;
}

//7.equality
// '=='  loose equality >> 타입 변경해서 검사! 
// '===' strict equality >> 타입 다르면 다른거임

const num = 5;
const strng = '5';
console.log(num == strng);//true
console.log(num === strng);//false
 
//object equality by reference
const ell1 = {name: 'ell'};
const ell2 = {name: 'ell'};
const ell3 = ell1;
console.log(ell1 == ell2); // false
console.log(ell1 === ell2);// false
console.log(ell1 === ell3);// true

/*
ell1 -> reference1 ->name -> ell
                   -> age   ->20
ell3 -> reference1
ell2 -> reference2 ->name -> ell
                   -> age   ->20
1과 2는 동일한 데이터가 들어있는 오브젝트지만 실제 메모리에는 다른 레퍼런스가 들어있고 그건 서로다른 오브젝트를 가리킴  
3은 1의 레퍼런스가 할당되어 있어 같은 레퍼런스 가짐 
*/
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false);//true
console.log('' === false); //false
console.log(null == undefined);//true
console.log(null === undefined); //false

//4강 13:57분부터 듣기 
//8. if 
const name = 'coder';
if(name === 'coder'){
    console.log('good');
} else if(name === 'coco'){
    console.log('ssss');
} else{
    console.log('ggg');
}

//9.ternary operator
// condition ? value1 : value2 
console.log(name ==='coder' ? 'yes' : 'no');

//10. switch 
// else if 많이 반복해서 사용해야할 경우 스위치 사용 권장 
// 타입스크립트에서는 enum 같은 애들이나 정해진 타입을 검사할 경우 씀
const browser = 'IE';
switch(browser){
    case 'IE' : 
        console.log('ggg');
        break;
    case 'chrome':
    case 'firefx': 
        console.log('sss');
        break;
    //chrome이랑 firefx 결과 같아서 이렇게 연달아 붙여서 사용 가능
    default:
        console.log('ggg');
        break;

}

//11. while 
//조건문이 맞을때만 블럭안을 실행
let i=3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//괄호안(박스안)을 먼저 실행하고 싶으면 do while 사용 
do {
    console.log(`while: ${i}`);
    i--;
} while(i>0)

//for(begin; condition; step)
//begin 처음 딱 한 번만 호출하고 블럭 실행전 condition 맞는지 안 맞는지 검사하고 블럭이 다 실행되면 step 실행
//전역변수도 가능, for 안에서 지역변수 선언도 가능 
for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

/*break 루프를 완전히 끝내느 것 
continue 는 지금거만 스킵하고 다음 스텝으로 넘어감

레이블문 
레이블은 프로그램에서 다른 곳으로 참조할 수 있도록 식별자 제공
루프를 식별하기 위해 레이블 사용하고 프로그램이 루프를 방해하거나 실행을 계속할지 여부를 나타내기 위해 break나 continue 문을 사용
>> 레이블 쓰면 나쁜 냄새가 난다고 함 잘 사용X
<레이블 문의 구문>
label :
   statement
<예시>특정한 레이블 문을 빠져나옴

labelCancelLoops: while (true) {
  console.log("Outer loops: ");
  while (true) {
    console.log("Inner loops: ");
    if (3 > 10) {
      break labelCancelLoops;
    } else if (15 > 10) {
      break;
    }
  }
}
*/
