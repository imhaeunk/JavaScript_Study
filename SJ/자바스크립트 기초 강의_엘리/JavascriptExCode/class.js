'use strict';
// Object-oriented programming
// class : template
// object : instance of a class 
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const seokjeong = new Person('seokjeong', 28);
console.log(seokjeong.name);
console.log(seokjeong.age); 
seokjeong.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Minsu', 'Son', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //undefined

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw(); //부모의 함수도 같이 호출하고 싶을 때는 super.으로 접근하면 됨.
        console.log('▵');
    }
    getArea() {
        return (width * this.height) / 2;
    }

    toString() {
        return `Triangle color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(rectangle.getArea()); 

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof Shape); //t
console.log(triangle instanceof Object); //t
console.log(triangle.toString()); //자바스크립트의 모든 오브젝트는 Object를 상속받고 있기 때문에 Object에 속한 toString()함수 재정의 가능
