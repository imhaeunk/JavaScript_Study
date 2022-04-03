/*
브라우저에서 HTTP를 이용해 서버에게 데이터 요청해서 받아오는 방법?
- AJAX: 웹페이지에서 서버에게 동적으로 데이터를 주고 받을 수 있는 기술
1) XHR(XMLHttpRequest) 오브젝트 : 브라우저 api에서 제공하는 오브젝트중 하나로 간단하게 서버에서 데이터 요청하고 받아올 수 있음
2) fetch() API : 최근에 나옴, 쉽게 주고 받을 수 있음 but 익스플로러 지원X
>> XML 사용하면 불필요한 태그 많고 사이즈 커지고 가독성 좋지않아 많이 사용 X 
>> JSON(Javascipt Object Notation) 사용! : javascript의 object{key:value}처럼 key 와 value로 이루어짐
모바일에서 서버와 주고 받을때, 서버와 통신하지 않아도 오브젝트를 파일시스템에 저장할때도 많이 씀 
JSON
- simplest data interchange format 
- lightweigh text-based structure 
- easy to read 
- key-value pairs 형태로 주고 받음! 
- ***used to serialization and transmission of data between the network the network connection
- ***independent programming language and platform

골! 
1. object ---(serialize)---> json(string)
    오브젝트를 어떻게 직렬화해서 json 형태로 변환할지 
2. object <--(deserialize)--- json(string) 
    직렬화된 json 어떻게 deserialize 해서 오브젝트 형태로 변환할지   
*/

//1. object to JSON
//stringfy(obj)
let json = JSON.stringfy(true);
console.log(json);

json = JSON.stringfy(['app', 'berry']);
console.log(json);

//rabbit 이라는 오브젝트 
const rabbit = {
    name : 'jhee',
    color : 'white',
    size : null,
    birthDay : new Date(),
    symbol : Symbol("id"), 
    jump : () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringfy(rabbit); // jump같은 함수는 데이터가 아니라 json 에 포함X, js에만 있는 symbol같은 데이터도 포함 x
console.log(json);

json = JSON.stringfy(rabbit, ['name', 'color']);//['name', 'color'] 에 해당되는 프로퍼티는 json으로 변환됨
console.log(json);

//세밀하게 통제하고 싶을때 콜백함수 이용해서 이렇게 짤수도 있음
json = JSON.stringfy(rabbit, (key, value) =>{
    return key === 'name' ? 'jhee' : value;
});

//2. JSON to Object
//parse(json)
console.clear();
json = JSON.stringfy(rabbit);
const obj = JSON.parse(json);
console.log(obj);
//변환한 object는 직렬화된 이미 srting으로 만들어진 json로부터 다시 오브젝트 만들었기때문에 함수는 포함X 
obj.jump();//없으니 에러!
rabbit.jump();

//변환된 obj의 date는 이미 string 기존의 rabbit의 date는 오브젝트!
console.log(obj.birthDay.getDate()); //에러!
console.log(obj.birthDay);//정상! 스트링이기때문
console.log(rabbit.birthDay.getDate());

//이렇게 콜백함수 사용해 세밀하게 통제 가능 
const obj2 = JSON.parse(json, (key, value) => {
    return key === 'birthDay' ? new Date(value) : value;
});
console.log(obj2.birthDay.getDate()); //스트링이아닌 date 오브젝트가 되었기때문에 정상적으로 출력

/* 
JSON Diff : 서버에서 요청했을때 처음 받아온 데이터와 다음에 받아온 데이터 다른거 모를떄 비교 가능! 
JSON Beautifier : json 포맷 맞추기 
JSON Parser : json 타입을 ㅇobj 형태로 변경되는 거 눈으로 확인 가능 
JSON validator : 유효한 데이터인지 확인 가능 
*/