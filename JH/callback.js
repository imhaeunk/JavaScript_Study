'use strict';

/*JavaScript is synchronous! 동기적이다 
>>Execute the code block by orger after hoisting
호이스팅된 이후부터 코드가 작성한 순서에 맞춰 순서대로 실행 
cf) hoisting: var, function declarartion  선언들이 젤 위로 올라감! 
*/
console.log(1);
//비동기의 대표예 setTimeout(브라우저에서 제공하는 웹 API로 지정한 시간 지나면 우리가 지정한 time handler 콜백함수 호출)
//브라우저 API 는 브라우저한테 먼저 요청보내고 응답 기다리지 않고 바로 콘솔 로그로 넘어감 >> 시간이 안 되어 3이 먼저 출력됨
setTimeout(() => console.log(2), 1000); // >>밀리세컨드라 이건 1000(1초)가 지난뒤 이 함수를 다시 불러줘! 콜백함수 
console.log(3);

//동기 콜백함수 Synchronous callback 
function printImmediately(print) {
    print();
} // JS에서 함수의 선언은 호이스팅되어 젤 위로 간다고 생각해
printImmediately(() => console.log('hello')); //1초가 안 지나서 2보다 먼저 출력됨 

//비동기 콜백함수 Asynchronous callback 
function printDelay(print, timeout) {
    setTimeout(print, timeout);
}// JS에서 함수의 선언은 호이스팅되어 젤 위로 간다고 생각해
printDelay(() => console.log('async callback'), 2000);

//js는 함수를 콜백형태로 다른 함수의 인자로 전달 가능, 변수에 할당도 가능한 언어 


//콜백 지옥 예제
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'jhee' && password === 'dream') ||
                (id === 'colder' && password === 'academy')
            ){
                onSuccess(id); //callback 
            } else {
                onError(new Error('not found')); //callback 
            }
        }, 2000);
    }
    
    getRoles(user,  onSuccess, onError){
        setTimeout(() => {
            if(user === 'jhee'){
                onSuccess({ name: 'jhee', role: 'admin'});
            } else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                   alert(`hello ${userWithRole.name}, you have a ${userWithRole.role}`); 
            },
            error => {
                console.log(error); 
            }
        );
    },
    error => {
        console.log(error);
    }
);
