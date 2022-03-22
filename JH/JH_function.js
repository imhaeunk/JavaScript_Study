//function 
/*subprogram이라고도 부르고 여러번 재사용 가능*/

//1.function declaration
/*js에서 function은 object
function name(par1, parm2){ body... return;}
하나의 함수는 한 가지의 일만! 
함수이름은 커맨드 형태로 동사 형태로 지정 
naming: doSomething, command, verb 
자바스크립트는 타입이 없어 파라미터만 보고 어떤 타입 전달하는지 알 수 없음
타입스크립트는 function log(mes: string){} 이런식으로 파라미터 타입 명시
              function log(mes: string): number{} number는 리턴값을 숫자 타입으로의 의미  
JS에서 함수는 오브젝트이다 
*/


//2.Parameters
/*premitive parameters: passed by value
  object parameters: passed by reference */
function changeNm(obj) {
    obj.name = 'coder';
    //오브젝트의 레퍼런스가 이름을 가리키고 그 값을 코더로 변경 
}

const ellie = {name: 'ellie'};
//ellie 오브젝트가 만들어진 메모리에는 reference가 들어감  
changeNm(ellie);
console.log(ellie);

//3. Default Parameters(added in ES6)
function showMess(message, from){
    if(from === undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMess('Hi!'); // 파라미터 한 개만 보내면 두번째 파라티터 없어서 Hi! by undefined로 출력됨 이를 방지하기 위해 unknown if문 추가 

//위의 식 심플 버전 파라미터에 바로 설정 
function showMess(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMess('Hi!'); 

//4. Rest Parameters(added in ES6)
//앞에 ...붙이면 배열 형태로 전달!
function printAll(...args) {
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    //위의 for문 간단 버전 2가지 
    for(const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

//5. local scope 
//'밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.'
let globalMessage = 'global'; //전역변수
function printMessage() {
    let message = 'hello'; //지역변수
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);//자식은 부모의 변수 활용 가능   
        let childMessage = 'hello';
    }
    console.log(childMessage); //부모는 자식 변수 사용 불가! 에러! 
}
printMessage();
console.log(message);

//6. return a value
//모든 함수는 리턴값 가짐 리턴이 안 보이는건 return undefined가 생략된거 
function sum(a,b) {
    return a + b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1, 2)}`);

//7. early retrun! early exit!
//bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic,,,
    }
}

//good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //앞에서 빨리 리턴하고 뒤에서 필요한 로직 작성하는게 좋음 
    // long upgrade logic,,,
}


//1. function expression
/* function expression : 할당된 다음부터 함수 호출 가능! 
function declaration : 함수가 선언되기 이전에 호출해도 가능 (hoisted)
*/

//function expression 예시 
const print = function(){// anonymous function
//const print = function print(){ //named function 
    console.log('print');
}
print();
const printAgain = print; // 변수에 함수를 할당 
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//function declaration 예시
sum(2, 3);
function sum(a,b) {
    return a + b;
}

//2. Callback function using function expression
function randomQz(answer, printYes, printNo){
    if(answer === 'love you') {
        printYes();//printYes 콜백함수 호출
    } else {
        printNo();//printNo 콜백함수 호출
    }
}

const printYes = function () {//anonymous function
        console.log('yes!');
};

const printNo = function print() {//named function >> 디버깅항때 추적하기 좋아서 선호!
    console.log('no!');
    print();//또는 함수안에서 자기 자신 호출(recursion)할때 굳
};

const simplePrint = function () {
    console.log('simple!');
};
//arrow function! always anonymous function
const simplePrint = () => console.log('simple!');

const add = function (a,b) {
    return a +b; // 애로우 펑션 안 쓰고 블럭 쓰면 리턴 잊지말기! 
};
//arrow function! always anonymous function
const add = (a,b) => a +b;

//IIFE : Immediately Invoked Function Expression
//함수를 바로 실행하고 싶을때 사용 
(function hello(){
    console.log('IIFE');
})();