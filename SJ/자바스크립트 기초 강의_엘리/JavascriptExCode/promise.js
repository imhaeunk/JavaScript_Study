// state : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// 새로운 프로미스가 만들어 질 때 전달한 executor 함수가 바로 자동적으로 실행됨
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, file)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('seokejong');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers : then, catch, finally
promise
.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num - 1);
        }, 1000);
    })
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('닭');
    }, 1000);
});
const getEgg = hen => 
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error(`error! ${hen} => 알`))
    }, 1000);
});
const cook = egg => 
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`${egg} => 계란프라이`);
    }, 1000);
});

getHen() 
.then(getEgg)
.catch(error => {return `빵`})
.then(cook)
.then(console.log)
.catch(console.log);