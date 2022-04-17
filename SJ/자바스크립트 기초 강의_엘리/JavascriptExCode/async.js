 //1. async
 async function fetchUser() {
     //10초 정도 걸리는 request가 있다고 가정
     return 'seokjeong';
 }

 const user = fetchUser();
 user.then(console.log)
 console.log(user); 

 // 2. await
 function delay(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
 }

 async function getApple() {
     await delay(3000);
     throw 'error';
     return 'apple';
 }

 async function getBanana() {
    await delay(3000);
     return 'banana'; 
 }

 function pickFruits() {
    const applePromise = getApple();// 병렬처리
    const bananaPromise = getBanana();

    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
     
 }

 pickFruits().then(console.log);

 //3. Useful Promise APIs
 function pickAllFruits() {
     return Promise.all([getApple(), getBanana()])
     .then(fruits => fruits.join(' + '));
 }

 pickAllFruits().then(console.log);

 function pickOnlyOne() {
     return Promise.race([getApple(), getBanana()]);
 }

 pickOnlyOne().then(console.log);