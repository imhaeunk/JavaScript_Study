'use strict';
//promise 는 js에서 제공하는 비동기를 간편하게 처리하게 도와주는 오브젝트

//promise is a js object for async operation 
//state: pending(오퍼레이션이 수행중) -> fulfilled state(오퍼레이션 성공적으로 끝낸상태) or rejected state(실패한 상태) 
//producer vs consumer 

//서버통신 구현 불가로 우선 setTimeout활용해 개념 공부! 서버 통신이라 생각하고 익히기 

//1. producer
//when new Promise is created, the executor runs automatically.
//Promise가 만들어진 순간 우리가 전달한 (resolve, reject)를 받는 executor 콜백함수 바로 수행!
const promise = new Promise((resolve, reject) =>{
    //doing some heavy work (network, read files) 가 있다고 가정 (현재 서버 통신 불가로 가정해서 settime 이용)>> 시간이 많이 걸리는 일들은  비동기적으로 처리하는게 좋음 
    console.log('doing somethind...');
    // setTimeout이용해 우리가 원하는 콜백함수 셋팅 
    setTimeout(() => {
        resolve('jhee');//성공적으로 수행(네트워크에서 가져온, 파일에서 읽어온, 데이터를 가공한 등heavy work)하면 resolve 라는 콜백함수 통해서 전달 
        //reject(new Error('no network')); 실패했을때 수행 
    }, 2000);
});


//2. consumer : then, catch, finally 
promise
    .then((value) => { //then 은 promise가 잘 수행되어 마지막에 resolve라는 콜백함수를 통해 전달한 값이 파라미터로 전달됨 
        console.log(value);
    })
    //then에서 return된 promise의 catch를 등록하는 거 (promise chaining)
    .catch(error => { // catch 응 error가 발생할때 어떻게 처리할건지 callback함수 정의해준다 
        console.log(error);
    })
    .finally(() => { //finally는 최근 추가, 성공/실패 상관없이 무조건 마지막에 호출되어지는거
        console.log('fiiiinally'); //위에 promise가 resolve인지 reject 인지 상관없이 무조건 수행됨 
    });


//3. promise chaining
const fetchNumber = new Promise((resolve, reject) =>{
    setTimeout(() => resolve(1), 1000);
});

//then 은 값, 또 다른 promise 도 전달 가능 
fetchNumber
.then(num => num *2) //2
.then(num => num *3) //6
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000); //5
    });
})
.then(num => console.log(num));

//4. error handling

const getChicken = () => 
new Promise((resolve, reject) => {
    setTimeout(() => resolve('Chicken'), 1000);
});
const getEgg = () => 
new Promise((resolve, reject) => {
    //setTimeout(() => resolve(`${Chicken} => Egg`), 1000);
    setTimeout(() => reject(new Error(`error! ${Chicken} => Egg`)), 1000);
});
const cook = () => 
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${Egg} => cook`), 1000);
});

/*
getChicken()
.then(Chicken => getEgg(Chicken))
.then(Egg => cook(Egg))
.then(meal => console.log(meal));
콜백함수 전달할때 받아오는 밸류를 다음함수로 바로 호출하는 경우는 생략 가능 
*/
getChicken()
    .then(getEgg)
    .catch(error => { //getEgg받아오는데 문제가 생기면 catch이용해 빵으로 대체 가능! 
                      //getEgg에서 발생하는 에러 핸들링 원하면 바로 다음에 catch 작성해야함 
        return 'bread';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log); //getEgg 하는 부분에서 에러발생했지만 catch가 잡혀짐 핸들링은 바로 다음에 적어야함 
    
