// Objects
// One of the JavaScript's data types.
// a collection of related data and/or functionallity.
// Nearly all objects in Javascript are instances of Object.
// object = { key : value };

// 1. Literals and properties
const name = 'seokjeong';
const age = 28;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}


const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age );
}

const seokjeong = { name : 'seokjeong', age : 28};
print(seokjeong);

seokjeong.hasJob = true; // 뒤늦게 하나의 property 추가도 가능
console.log(seokjeong);

delete seokjeong.hasJob; // 뒤늦게 삭제하는 것도 가능..!
console.log(seokjeong);

// 2. Computed properties 계산된 properties
// key should be always string
console.log(seokjeong.name);
console.log(seokjeong['name']);

seokjeong['hasJob'] = true;
console.log(seokjeong.hasJob);

function printValue (obj, key) {
    console.log(obj[key]); 
}

printValue(seokjeong, 'name');

// 3. Property value shorthand
const person1 = { name : 'haeun', age : 28 };
const person2 = { name : 'jaehee', age : 28 };
const person3 = { name : 'seokjeong', age : 28 }; 
const person4 = new Person('minsu', 29);
console.log(person4);


function makePerson(name, age) { 
    return {
        name, // 자바스크립트에서는 key와 value가 동일하다면 생략할 수 있다. (이것이 Property value shorthand) name : name -> name
        age, // age : age -> age
    };
}

// 4. Constructor Function
function Person(name, age) { 
    // this = {};
    this.name = name; //자바스크립트에서 알아서 오브젝트 형태로 리턴해줌
    this.age = age;
    //return this;
}

// 5. in operator : property existence check (key in obj)
console.log('name' in seokjeong);
console.log('random' in seokjeong);

// 6. for..in vs for..of
// for (key in obj)
for (key in seokjeong) {
    console.log(key);
    console.log(seokjeong[key]);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assing(dest, [obj1, obj2, obj3 ...])
const user = { name : 'seokjeong', age : 28 };
const user2 = user;
user2.name = 'coder';
console.log(user.name);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);


// 이 Object는 자바스크립트에 기본적으로 탑재되어 있는 Object
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);