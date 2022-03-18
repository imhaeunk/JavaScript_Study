# 데이터타입, data types, let vs var, hoisting

Variable

- let
    - 어플리케이션을 실행하게 되면 어플리케이션마다 실행할 수 있는 메모리가 할당됨
    - 메모리는 텅 비어있는데, 어플리케이션마다 쓸 수 있는 메모리가 제한적
    - let name → 한 박스를 가리키는 포인터가 생김
    - name 변수에 다른 값을 넣어 저장할 수 있게 됨
    - Mutable Data Type
    
    ```jsx
    let name = 'seokjeong';
    console.log(name);
    name = 'hello';
    console.log(name);
    ```
    
    Block scope
    
    - 블럭을 지정하게 되면 블럭 밖에서는 블럭 안을 더이상 블럭 안을 볼 수 없게 됨
    
    ```jsx
    {
        let name = 'seokjeong';
        console.log(name);
        name = 'hello';
        console.log(name);
    }
    console.log(name); //접근 불가
    ```
    
    Global scope
    
    - 파일 안에 정의해서 어디서나 접근 가능하게 함
    - 필요한 부분에서만 정의하는 것이 좋음
    
    ```jsx
    let globalName = 'global name';
    {
        let name = 'seokjeong';
        console.log(name);
        name = 'hello';
        console.log(name);
    }
    console.log(globalName); 
    ```
    
    자바스크립트에서 변수를 선어할 수 있는 키워드는 딱 하나 ! let
    
    그 전에는 var를 사용(사용하지마!!)
    
    - 왜 사용하면 안되는지?
        - 변수를 사용하고 나서 값을 할당하는 것이 보통
        - 하지만 선언도 하기전에 값을 할당하는 것이 가능..
        - 심지어 값을 할당하기 전에 출력도 가능..
        - let을 이용한다면 이런 행동을 했을 때 에러발생시켜줌!
        - 블록스코프를 철저히 무시함..
        
        ```jsx
        //var (don't ever use this!)
        //var hoisting (move declaration from bottom to top)
        //has no block scope
        console.log(age);
        age = 4;
        console.log(age);
        var age;
        
        name = 4;
        let name;
        ```
        
        var hoisting 
        
        - 호이스팅은 어디 선언했냐에 상관없이 선언을 제일 위로 끌어올려주는 것
    
    호환성
    
    es6 → chrome, firefox 등 메이저 브라우저에서 다 지원되지만.. IE...는 X (그냥 무시하기)
    
    만약 진짜 IE까지 지원해야한다면 ES6이상으로 개발을 한 다음, BABEL 이용해서 ES4,5로 배포
    
- Constants
    - 한 번 할당하면 값이 절대 변하지 않음
    - constants는 값을 가리키는 포인터가 잠겨있음
    - Immutable Data Type
    
    ```jsx
    //Constants
    //favor Immutable data type for a few reasons:
    // - security
    // - thread safety
    // - reduce human mistakes
    const daysInWeek = 7;
    const maxNumber = 5;
    ```
    

- Variable types
    - primitive, single item : number, string, boolean, null, undefined, symbol
    - object, box container
    - function, first-class function (function도 다른 데이터 타입과 같이 값을 할당 가능하고, 그렇기 때문에 함수의 파라미터 인자로도 전달이 되고, 함수에서 리턴타입으로도 설정 가능.)
    - C, Java 등 다른 언어에서는 숫자에 해당하는 변수의 종류가 많이 있지만 js에서는 number 하나! (얼마나 큰 사이즈를 할당할 지 생각할 필요 X, 심지어 변수 선언 시 데이터 타입을 number라고 선언할 필요도 X)
    - number - special numeric values : infinity, -infinity, NaN
    
    ```jsx
    //number - special numeric values : infinity, -infinity, NaN
    const infinity = 1 / 0; //무한대 숫자값
    const negativeInfinity = -1 / 0;
    const nAn = 'not a number' / 2;
    console.log(infinity);
    console.log(negativeInfinity);
    console.log(nAn);
    ```