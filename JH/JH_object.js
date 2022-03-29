//오브젝트 만드는 방법 
const obj1 = {}; //1)object literal
const obj2 = new Object();//2)object constructor 클래스 이용해서 만드는 법 >>new 키워드 이용하면 Object 에서 정의된 컨스트럭터 호출됨 

// object = {key : value};는 key와 value의 집합체 

//.1. Literals and properties
const name ='jhee';
const age = 4;
function print(name, age){
    console.log(name);
    console.log(age);
}
//이렇게 함수로 묶어서 관리할수도 있지만 인자 많으면 관리하기 힘들어짐 
//>>이걸 개선하고자 object 사용 
function print(person){
    console.log(person.name);
    console.log(person.age);
}
const jhee = {name : 'jhee', age : 4}
print(jhee);

jhee.hasJob = true;
console.log(jhee.hasJob);

// JS는 동적으로 타입이 runtime(프로그램이 동작하고 있을때)때 결정되는 언어
// >>뒤늦게 이렇게 추가/삭제 가능  (but, 유지보수 힘드므로 피해서 사용)

//2.computed properties 
//properties는 반드시 스트링 타입, key를 스트링 형태로! 
//. 형태는 우리가 받아오는 key가 확실할떄 사용 
// computed properties 형태는 어떠한 key를 가져올지 모를때(런타임 순간에 결정될때) 사용
//>> 우리가 코딩시에는 그냥 . 쓰는게 맞음 

console.log(jhee.name);
console.log(jhee['name']); //computed properties
// >> 오브젝트안의 변수의 이름을 스트링 형태로 접근 가능! 위와 같은 결과!

jhee['hasJob'] = true;
console.group(jhee.hasJob);

// computed properties는 동적으로 key의 value를 실시간으로 받아올때 사용 
function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(jhee, 'name');

//3.property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'dave', age: 3};

/* 동일한 key와 value 반복해서 만들기 싫으면 이렇게 함수 만들어 값만 전달해주며 사용하는 방법도 있음 
const person3 = makePerson('jhee', 30);
function makePerson(name, age){
    return {
        //JS에서 key의 value 이름 동일하면 생략해서
        name:name, //그냥 name, 
        age:age,   //그냥 age, 로 입력 가능 
    }
}
>> 이전에 JS에 클래스가 없을때 이런식으로 많이 사용했음
*/
//4.Constructor function
const person3 = new Person('jhee', 30); // 호출할때도 클래스에서 오브젝트 만드는 것 처럼 new! 
function Person(name, age){ //순수하게 오브젝트 생성하는 함수는 대문자로 시작 
    //this = {}; 여기서 새로운 오브젝트 만드는 것은 생략됨 >> JS에서 알아서 함! 
    this.name = name; 
    this.age = age;   
    //return this; //위에서 만든 오브젝트에 2개의 프로퍼티 넣고 this 리턴하는 형태임 이건 생략됨 >> JS에서 알아서 함! 
}

//5. in operator: property existence check (key in obj)
console.log('name' in jhee); //object에 key가 있는지 없는지 확인 
console.log(jhee.tall);//정의하지 않은 값에 접근하면 undefined 출력

//6. for..in   VS  for..of
// for (key in obj) obj안의 모든 key 출력 
console.clear(); //이전 로그 모두 지움 
// for (value of iterable) 배열의 모든 값들 순차적으로 출력 
const array = [1,2,3,4];
for(value of array){
    console.log(value);
}

//7.cloning
const user = {name: 'jhee', age:30 }; //user라는 변수는 메모리의 refernce를 가리키고 이 ref는 name 은jhee이고 age는 30인 오브젝트 가리킴  
const user2 = user; //user2의 변수는 user가 할당됨(user와 동일한 ref가짐)
user2.name = 'coder'; // user2의 ref(user와 동일한 ref)가 가리키는 name의 jhee 를 coder로 변경
console.log(user); // {name: 'coder', age:30 } 가 출력

//예전 방법
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3); //user3에 user가 할당된거 확인 가능 

//현재 방법 Object.assign(dest, [obj1, obj2, obj3...]) >> object의 기본 제공 함수
const user4 = {};
Object.assign(user4, user);
console.log(user4);
/* 
const user4 = Object.assign({}, user);
console.log(user4);
이런식으로 작성해도 됨
*/

//assign<T, U>(target: T, source: U, source2: V): T & U & V; 복사하고자하는 target 과 복사하려는 source 같이 전달해줘야하고 리턴값은 타겟과 복사하는 소스 통합된 아이가 리턴됨
//source는 하나만 넣어도 되고 여러개 넣어도 됨 assign(target:object, ...source: any[]):any; 심지어 배열도 전달 가능 
//assign 다른 특이사항 
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue가 출력! 왜? assign의 뒤의 인자가 앞의 인자 덮어씌우는 형태가 됨! fruit2 가 fruit1 덮어씌움
console.log(mixed.size); // big
