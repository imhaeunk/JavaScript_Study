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
    
    - bigInt
        - 최근에 추가되었기 때문에 chrome, firefox에서만 지원이 됨.
        - 사실 이렇게 큰 숫자가 쓰일 일은 그닥 없음
    
    ```jsx
    //bigInt (fairly new, don't use it yet)
    const bigInt = 1234567890123456789012345678901234567890n; // over (-2*53) ~ 2*53
    console.log (`value: ${bigInt}, type: ${typeof bigInt}`);
    Number.MAX_SAFE_INTEGER;
    ```
    
    - string
    
    ```jsx
    //string
    const char = 'c';
    const minsu = 'minsu';
    const greeting = 'hello ' + minsu;
    console.log(`value: ${greeting}, type: ${typeof greeting}`);
    const helloMinsu = `hi ${minsu}`; //template literals (string)
    console.log(`value: ${helloMinsu}, type: ${typeof helloMinsu}`);
    ```
    
    - boolean
    
    ```jsx
    //boolean
    //false: 0, null, undefined, NaN, ''
    //true : any other value
    const canRead = true;
    const test = 3 < 1; //false
    console.log(`value: ${canRead}, type: ${typeof canRead}`);
    console.log(`value: ${test}, type: ${typeof test}`);
    ```
    
    - null
    
    ```jsx
    //null
    let nothing = null;
    console.log(`value: ${nothing}, type: ${typeof nothing}`);
    ```
    
    - undefined
    
    ```jsx
    //undefined
    let x;
    console.log(`value: ${x}, type: ${typeof x}`);
    ```
    
    - symbol
        - 동일한 String을 작성했어도 다른 Symbol로 만들어지기 때문에 고유한 식별자를 만들 때 사용 가능
        - String이 똑같다면 동일한 Symbol을 만들고 싶을 땐 : Symbol.for
        - symbol은 그냥 출력하면 Cannot convert a Symbol value to a string
            - .description을 이용해 스트링으로 변환 후 출력하기
    
    ```jsx
    //symbol, create unique identifiers for objects
    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id'); 
    console.log(symbol1 === symbol2);
    const gSymbol1 = Symbol.for('id');
    const gSymbol2 = Symbol.for('id');
    console.log(gSymbol1 === gSymbol2 );
    console.log(`value: ${symbol1.description}, type: ${typeof symbol2.description}`);
    ```
    
    - object, real-life object, data structure
    
    ```jsx
    //object, real-life object, data structure
    //const로 지정했기 때문에 오브젝트 자체는 잠겨있지만, 오브젝트 안의 변수들에 접근했을 때는 다른 값으로 할당이 가능함.
    const seokjeong = { name: 'seokjeong', age: 20 };
    seokjeong.age = 28;
    ```
    

- Dynamic typing
    - javascript는 런타임에서 타입이 결정되기 때문에 잘못했을 때 런타임 에러 발생하는 경우가 있음
    - 이것 때문에 TypeScript가 나오게 됨 (TypeScript는 Javascript위에 Type이 더 올려진 언어)
    - Javascript는 브라우저가 이해할 수 있기 때문에 실시간 연동가능하지만 TS는 브라우저가 이해할 수 있는 자바스크립트로 transCopiler를 이용해야함.

```jsx
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = 1 + '7';
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //error
```