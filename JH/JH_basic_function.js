/*함수는 선언과 호출이 핵심! 
선언은 결과값 리턴 유무 2가지로 나뉨 >>(리턴값이 없는 건 return undefined가 생략된거임! 아예 없는게 아님)
중요 포인트 자바스크립트는 타입이 없는 언어이므로 파라미터에 타입 중요X*/

//함수 선언 
function doSomething() {
    console.log('hello');
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

//함수 호출
doSomething();

//리턴값있으면 아래처럼 함수가 전달한 값(리턴한 값)을 변수에 저장 가능  
const result = add(1, 2);
console.log(result);

//1. 함수 전달하는 케이스X
//함수 선언 
function doSomething(add) {
    console.log('hello');
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

//함수 호출
doSomething(add()); //결과값 NaN
/*함수를 실행한걸 인자로 받기에 함수실행한 결과값 sum을 두 썸팅 인자(23번째줄의)로 넘긴다 이때 a,b값 없으니 값이 없음 */
//doSomething(add(1,2)); 면 결과값 3 

//2. 함수 전달하는 케이스
//함수 선언 
function doSomething(add) {
    console.log(add);
    const result = add(2, 3); //함수를 전달받아 변수에 함수결과값 할당 저장 가능
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

//함수 호출(함수 전달하는 방법은 괄호없이 함수이름만 전달)
doSomething(add); /*결과값은 add 함수 그대로 조회! */

//함수 호출 다른 예
const addFun = add;
console.log(add);
addFun(1,2);
