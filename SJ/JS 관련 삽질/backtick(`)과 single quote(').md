# backtick(`)과 single quote(')

Javascript를 공부하면서 당연히 single quote인 줄 알았는데, 

```jsx
console.log ('value: ${count}, type: ${typeof count}');
```

위와 같은 코드들이 동작하지 않아 한참을 보던 중 single quote가 아님을 알았다.

그래서 싱글쿼트와 비슷하게 생긴 저것이 무엇인지 알아보자.

## ❓**백틱(backtick)**

### **템플릿 리터럴(Template Literal)**

- ES6부터 새로 도입된 문자열 표기법
- 따옴표 대신, 백틱(`)을 사용한다.
- 위치는 1옆 물결자리에 있다.

### **그래서 왜 사용하는지?**

1. **줄바꿈**
    - 백틱을 사용하면 줄바꿈 시 + “\n”과 같은 복잡한 과정 없이 줄바꿈을 바로 인식할 수 있다.
2. **표현식 삽입**
    - 내가 헤맸던 부분, ${}에 변수나 연산 삽입 가능!

<aside>
💡 자세한 건 아래 mdn 템플릿 리터럴 문서 참고! [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

</aside>

### **그래서 어떻게 사용하는데? (맥북의 경우..)**

이것이 백틱이라는 것을 알고 찾아봤지만, 1옆 물결자리라고 한다.

하지만 맥OS를 사용하면,, 아무리 봐도 해당 위치에 backtick이 없다.

이는 ~, ₩ 와 같이 사용되기 때문..!

<aside>
💡 **한글키 입력 상태일 때는 ₩ , 영문 입력 상태일 때는 `**

</aside>