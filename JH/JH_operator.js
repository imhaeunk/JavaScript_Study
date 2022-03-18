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