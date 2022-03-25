'use strict'

/* class : template에 속함 (ES6에 추가됨)
object : template를 이용해 실제로 데이터를 만드는 것 

class가 없을때 자바스크립트는 class 저의하지 않고 function 이용해 바로 오브젝트 만들 수 있었음
>> syntactical sugar: 기존에 있던 방식(over prototype-based inheritance)에 편리하게 사용하도록 문법 사용
 */

//1. class declaration 
class Person{
    //constructor
    constructor(name, age) {
        //fields 
        this.name = name;
        this.age = age;
    }

    //method
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
//새로운 객체 object 생성 
const ellie = new Person('ellie', 20);
console.log(ellie.name);
ellie.speak(); // 앨리 객체의 함수 이용 가능 

//2. getter and setter 
/*자판기 이야기 
자판기 > class
음료 갯수 > int 로 설정  
동전 넣고 커피 만들고 > method 2개 
int 인데 사용자가 '-' 입력 >> X (int 기준 0이 제일 작음)
이때 우린 setter 이용해서 0으로 맞춰줌 (getter/setter 사용 이유)
근데 다른 사람이 음료 갯수 수정하는거 안 좋음! 그래서이게 private으로 선언! 
이게 encapsulation 캡슐화 설명!
*/
// 필드는 firstName, lastName, _age(age 아님!) 
//하지만 내부의 getter/setter 때문에 객체 생성후 .age로 값 가져오기 가능 
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; //  get age(){} 선언하는 순간 this.age는 메모리의 데이터가 아닌 getter 호출(get(){}실행)
                        //  = age 값을 할당할떄는 바로 메모리에 할당하는 것이 아니라 setter 호출(set(value){}실행) 
                    }

    get age(){
        return this._age; // 위에 선언한 값과 다르게 작성해야 반복 호출 방지 가능 
    }

    set age(value){ // set은 값을 설정하기 때문에 value 받아와야함
        //setter 사용 이유! 이렇게 예외 처리 가능 
        if (value < 0) {
            throw Error('age can not be negative');
        } 
        
        this._age = value;  // 위에 선언한 값과 다르게 작성해야 반복 호출 방지 가능
    //this._age = value < 0 ? 0 : value; 로도 사용 가능  
    }
}

const user1 = new User('Steve', 'Job', -1);//사용자가 실수로 -1로 설정
console.log(user1.age);//사람의 나이가 '-'인거는 불가 
//이런식으로 동료가 잘 못 설정해서 개발해도 내가 방어적으로 개발 진행하는게 getter/setter 


//3. fields(public, private)
// 최근에 추가되어 잘 쓰이지 않음
class Experiment{
    //생성자 쓰지 않고 필드 정의 가능
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //밖에서 쓰니 undefined로 출력!

//4. static properties and methods
// 최근에 추가되어 잘 쓰이지 않음 
// 클래스 안의 필드와 메소드는 새로운 오브젝트 만들때마다 고대로 복제되어 우리가 값만 바꿔서 사용  
// 근데 object에 상관없이 클래스에 공통적/자체적으로 사용하는 건 static으로 선언 >> 메모리의 사용 줄임
class Article {
    static publisher = 'Dream!';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(1);
console.log(article1.publisher);//undefined로 호출>> article1안의 publisher는 값이 지정되지 X (static은 object마다 할당되는 것이 아닌 클래스 자체에 붙어있음)
//static 사용하지 않았다면 잘 호출되었을거! 
console.log(Article.publisher);
Article.printPublisher();

//5. Inheritance
//상속과 다형성 >> 재사용! 
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color}!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

//상속
//동일한 기능 사용을 위해 extends 클래스 사용해 shape 연장!  
class Rectangle extends Shape {} //shape에서 정의한 필드와 메소드가 렉탱글에 포함됨

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
//다형성 
//필요한 함수만 재정의해서 사용 가능 >> 오버라이딩 
class Triangle extends Shape {

    draw(){
        super.draw();//부모의 draw 메소드도 호출 가능! 
        console.log('세모');// super없고 이거만 있으면 재정의한 함수만 호출
    }
    getArea() {
        return (this.width * this.heigh) /2;
    }

    toString(){ // 공통 함수도 오버라이딩 가능
        return '고만';
    }
}
const triangle = new Triangle(20, 20, 'blue');
triangle.draw();

//6. class checking
//왼쪽의 오브젝트가 오른쪽의 클래스의 인스턴스인지 아닌지 확인 true/false 호출
console.log(rectangle instanceof Rectangle);//true
console.log(triangle instanceof Rectangle);//false
console.log(triangle instanceof Triangle);//true
console.log(triangle instanceof Shape);//true
console.log(triangle instanceof Object);//true JS에서 만든 모든 오브젝트는 Object를 상속 >> 공통 메소드 사용 가능 


//javascript mdn 훑어보기 