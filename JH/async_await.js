//promise 를 동기적으로 실행되는 것처럼 만들어줌 
//syntactic sugar : 기존에 존재하는 api(promise) 위에 더 간편하게 제공하는 API
// async & await은 깔끔하게 promise 사용하는 방법 >> 무조건 promise 대신에 써야하는 거 아님! 적재적소에 맞게 사용 

//1. async 
function fetchUser2() {
    //do network request in 10 seconds 사용자의 데이터를 백엔드에서 받아오는 함수 
    //2) 10초 동안 네트워크 처리 
    return 'jhee'; //3) jhee 리턴되어 
}
const user2 = fetchUser2(); // 1) fetchUser() 함수 호출   4) user에 jhee 할당됨 
console.log(user2);// 5) hee 출력 

// 비동기적 처리하지 않으면 이게 끝나는 동안 이 다음 코드들은 실행되지 않음 
// >> 이렇게 오래 걸리는 건 비동기적으로 진행되도록 처리해야함! 
// >> 아래처럼 Promise 이용
// promise 있고 then이라는 콜백함수만 있으면 user의 데이터가 준비되는대로 내가 등록한 콜백함수 호출해줌! 
function fetchUser() {
    return new Promise((resolve, reject ) => {
       //do network request in 10 seconds 사용자의 데이터를 백엔드에서 받아오는 함수 
       resolve('jhee');
       //return 'jhee'; //>>reolve, reject 없이 그냥 리턴하면 콘솔에 pending 상태로 출력됨
    });
}

const user3 = fetchUser();
user3.log(console.log);
console.log(user3);


//위에를 간단히 적는 방법 
//async이용하면 바로 promise 만들 수 있음 
async function fetchUser() {
//do network request in 10 seconds 사용자의 데이터를 백엔드에서 받아오는 함수 
    return 'jhee'; 
}

const user = fetchUser();
user.log(console.log);
console.log(user);

//2. await 
//async function 밑에 써야함 

function delay(ms) {//delay는 promise 리턴하는 함수 
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000); // await가 있으니 delay가 끝날때까지 기다려줌 
    return 'app';
}

async function getBanana() {
    await delay(3000); //3초
    return 'nana';
}

//이렇게 promise 넘 중첩하면 콜백 지옥이랑 비슷함 
/*
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}
*/
//위에 주석을 async와 await 이용해서 작성! 

async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`
}
// 위 코드 에러 예외처리는 try catch 이용


//위에는 사과, 바나나 받는데 모두 3초씩 걸린다 >> 비효율적
//사과, 바나나 받아오는 건 서로 연관 없어서 기다릴 필요 없음 
//이걸 개선하는 법? 
//Promise가 만들어진 순간 우리가 전달한 (resolve, reject)를 받는 executor 콜백함수 바로 수행!
//>> 아래와 같이 작성하면 병렬적으로 실행해 3초만에 모두 실행됨 
async function pickFruits(){
    const applePromise = getApple(); // 사과의 promise 만들었기에 만들자마자 바로 안에 코드 실행
    const bananaPromise = getBanana(); // 바나나의 promise 만들었기에 만들자마자 바로 안에 코드 실행
    const apple = await applePromise;
    const banana = await bananaPromise;   
    return `${apple} + ${banana}`
}

pickFruits().then(console.log);

//하지만 이렇게 병력적으로 처리하는 코드 넘 더러움! 그래서 아래의 API이용함

//3. useful Promise APIs
//all API : promise 배열을 전달하면 모든 promise가 병렬적으로 다 받을때까지 모아줌
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

//race API: 배열에 전달된 promise중 가장 먼저 값을 전달하는 거만 전달됨 
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);