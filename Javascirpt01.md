# 자바스크립트의 역사와 현재 그리고 미래

**Mark Andreessen**
**1993,** Mosaic Web Browser

**1994,** Netscape Navigator (시장의 80% 점유율)

어떻게 하면 동적인 웹사이트를 만들 수 있을까?

→ Scripting 언어를 추가!

→ 1) Java (무겁고 어려워서 패스) 2) Scheme 스크립트 언어 변형해 새로운 언어를 만들기

→ 2안 채택 , Brendan Eich와 함께 정말 짧은 시간 안에 개발

→ **1994, 9**  내부적으로 Mocha라 불렸던 새로운 언어 탄생, 추후 LiveScript로 이름 변경

→ Netscape Navigator 안에 LiveScript Interpreter를 포함해서 출시( 즉, 개발자가 LiveScript를 이용해 개발하여 배포하면 Netscape Navigator에서 이해하고 반영 할 수 있음)

→ 당시 인기였던 Java를 따라 이름을 JavaScript로 변경

→ **1995, Netscape Navigator에 공식적으로 JavaScript, JavaScript Interpreter 출시**

**1995, Microsoft는 Netscape사에서 출시한 브라우저를 Reverse engineering**(만들어진 프로그램에 바이너리 코드를 분석해서 소스코드를 복원해내는 과정)

→ JavaScript와 거의 유사한 JScript!

→ 드디어 Internet Explorer 시장에 출시!

→ 개발자들 고통의 시 발 점....!......

**1996, 11** Netscape사는 ECMA International 사를 찾아가 Javascript 표준화 제안

**1997, 7 ECMAScript1** (변수, 함수 등에 대한 문법적인 사항들을 정리한 문서)

...

**2000,** Internet Explorer의 시장 점유율이 매우 상승하던 때(95%) 더이상 ECMAScript의 표준안을 참고하지 않음. → ECMAScript4 in 2000.. 표준화 진행이 서서히 더뎌지게 됨

**2004,** mozilla 사에서 Firefox출시

→ ECMA International 사를 찾아가 ActionScript3라는 언어와 이 언어를 이해할 수 있는 Tamarin 엔진으로 다시 표준안 제안

→ Tamarin은 기존 Javascript, JScript와 너무 달라 표준화를 두고 3사의 치열한 경쟁이 시작

**2004, Jesse James Garrett가 AJAX 도입**

이후 다양한 브라우저가 더 많이 나오고, 개발자들은 모든 브라우저들에서 작동하도록 하느라 많은 고생..

개발자들 사이에 강력한 커뮤니티 생성 → **jQuery,** dojo, moo tools와 같은 라이브러리가 많이 나오게 됨

→ 이것들은 모두 더이상 브라우저를 신경쓰지 않고 개발할 수 있도록 하는 것이 핵심

→ 그 중에서도 jQuery가 많이 사랑받음

**2008, Google에서 Chrome 브라우저 출시!**(자바스크립트 실행이 엄청 빠른 JIT 엔진이 포함되어있음)

**2008, 7 각 사에서 협력관계를 맺기로 하고 ECMAScript5 출시!**

**2016, ECMAScript6 출시** (현재 흔히 사용하는 class,  arrrow function, const, let이 여기에 정의되어 있음)

... 이후 매년마다 새로운 정의들이 나오고 있음.

→ 이제는 더이상 jQuery, dojo, moo tools 라이브러리들의 도움 없이도 충분히 모든 웹브라우저에서 동작하는 웹사이트, 웹어플리케이션 만들 수 있음

⭐️**JavaScript Engines**

chrome - V8, FireFox - SpiderMonkey, Safari - JSCore, MS Edge - Chakra, Opera - Carakan, Adobe Flash - Tamarin

2020년도 2월경에 드디어 MS Edge 사에서도 V8 엔진 대체해서 사용

⭐️**BABEL** - JavaScript transcompiler

(최신 ES로 개발하고, 배포할 때만 각 버전에 맞게 변환된 코드를 생성이 가능하게 하주는 컴파일러)

⭐️**SPA** - Single Page Application

하나의 페이지 안에서  필요한 부분들만 받아와 업데이트 가능하도록 함

→ 이를 좀 더 쉽게 구현하기 위해 React, Vue, Angular 등이 나옴

⭐️**Node.js** - V8을 이용한 back-end에서 서비스를 구현할 수 있도록 만듬

브라우저에서 동작할 수 있는 유일한 언어가 Javascript였으나, WA(웹어셈블리)가 등장하여 C, C++, C#, Java, Go 등으로도 개발 가능