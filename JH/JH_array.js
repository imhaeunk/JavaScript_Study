/*자료구조는 비슷한 종류의 데이터를 한 곳에다가 담아서 보관하는거라고 생각! 
오브젝트는 토끼 or 당근 (서로 연관된 특징과 행동들을 묶는 거)
자료구조는 토끼그룹과 당근그룹들 등 이런 비슷한 타입의 오브젝트들을 묶는 거 
>> 자바스크립트는 타입이 동적으로 정의됨! 따라서 다른 타입들도 한 군데 담을 수 있음!토끼 당근 같이 담기 가능 >> 그러나 좋지 않은 프로그래밍
*/
//한 배열안에는 동일한 타입 넣는것이 중요!
'use strict';

//Array 
//1. declaration 아래 2가지 형태
const arr1 = new Array(); //*** Array() ctrl 총해서 선언된 곳 가서 기본 제공하는 애들 다 읽어보기 ****
const arr2 = [1, 2];

//2. Index position 
const fruits = ["apple", "bana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]);//undefined
console.log(fruits[fruits.length - 1]);//이런형식으로 많이 접근

//3. Looping over anarray 
//1) for 
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//2) for of 
for(let fruit of fruits) {
    console.log(fruit);
}

//3) forEach >>바로 콜백함수 받아옴
//함수 호출하거나 API쓸 경우 ctrl해서 선언/정의된 곳 가서 정보 확인하며 쓰기
fruits.forEach(function (fruit, index){
    //console.log(fruit, index, array); 선언된 곳 정의보면 이렇게 다 받아올 수 있지만 array 잘 안 씀 
    console.log(fruit, index);
});
fruits.forEach((fruit) => { // 이름없는anonymous function은 이렇게 표현 가능
    console.log(fruit);
});
//한 줄만 있을 경우 {}도 생략 
fruits.forEach((fruit) => console.log(fruit));

//4. addition delection copy 
/*
push : add an item to the end 
pop : remove an item from the end
unshift : add an item to the begining
shift : remove an item from the begining

unshift/shift는 push/pop보다 많이 느림
왜? 뒤에서 부터하면 제일 뒤의 빈 공간에 하는거라 기존에 배열 웁직이지 X
앞에서 넣으면 기존 데이터 옮기면서 넣고 뺌 
*/
fruits.push('pear', 'berry');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift('remon', 'kiwi');
console.log(fruits);

fruits.shift();
console.log(fruits);

/*
Array<string>.splice(start: number, deleteCount?: number): string[]
>> 뒤가 ? 이거는 입력여부 선택사항
splice : remove an item by index position
*/
fruits.push('melon', 'peach');
console.log(fruits);
fruits.splice(1, 1);// 인덱스 1부터 하나만 지움
console.log(fruits);
fruits.splice(1, 1, '사과', '딸기');/// 인덱스 1부터 하나만 지우고 뒤에 2개 넣음
console.log(fruits);
fruits.splice(1); // 몇개 지울지 지정 안 하면 입력한 인덱스부터 모두 다 지움
console.log(fruits);

//concat : combine two arrays
const fruits2 = ['tt', 'hh'];
const newFruit = fruits.concat(fruits2);
console.log(newFruit);


//5.  searching.... find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('berry'));
console.log(fruits.indexOf('qq'));//없는 값 출력하면 -1

console.log(fruits.includes('berry')); // 포함여부 true/false 로 출력 

console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));//값에 해당되는 첫번째 인덱스 번호 출력
console.log(fruits.lastIndexOf('apple'));//값에 해당되는 마지막 인덱스 번호 출력
