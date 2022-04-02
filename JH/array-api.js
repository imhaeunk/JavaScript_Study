// Q1. make a string out of an array
{
  //join : adds allthe elements of an array seeperated by the specified seperator string.
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join();//구분자 없으면 , 로 연결됨 
  const result2 = fruits.join('^');
  console.log(result);
  console.log(result2);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  const result2 = fruits.split(',', 2); //🍎, 🥝개만 전달됨
  console.log(result);
  console.log(result2); 
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); // **배열 자체를** 반대로 바꿈
  console.log(result);
  console.log(array);  
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //array 자체를 변형하는 방법
  const result = array.splice(0, 2);
  console.log(result);
  console.log(array);   
  //기존 배열에서 원하는 부분만 받아 새로운 배열을 만드는 방법 
  //end는 exclusive! 포함 ㄴㄴ 
  const result2 = array.slice(2, 5);//(2, 4)하면 마지막은 노노됨 
  console.log(result2);
  console.log(array);     
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  //find 배열의 모든 요소가 순차적으로 호출됨 그 중 호출된 콜백함수가 처음으로 true인거 리턴하고 함수 멈춤 
  const result = students.find(function(student, index){
    console.log(student, index); 
    return student.score === 90; // 콜백함수는 boolean 타입 리턴해야함
  });
  /*const result = students.find{(student) => student.score === 90};*/
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result); 
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
//배열안의 요소를 우리가 원하는 함수를 이용해 다른 방식의데이터 만들고 싶을때 사용  
{
  const result = students.map((student) => student.score *2);//(student)처럼 콜백 함수의 인자는 value 같은거 말구 이해하기 쉽게 작성
  console.log(result);   
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
//하나라도 조건 충족하면 true 출력
  const result = students.some((student) => student.score  < 50);
  console.log(result);  
//배열의 모든 요소들이 조건을 충족해야 true 출력 
  const result2 = students.some((student) => student.score  < 50);
  console.log(result2);  

  const result3 = !students.some((student) => student.score  < 50);
  console.log(result3); 
}

// Q9. compute students' average score
//reduce 는 배열 하나하나 돌면서 값 누적할때 씀
{//prev이전에 콜백함수에서 리턴된 값이 전달/ curr 배열의 아이템 전달받음
  const result = students.reduce((prev, curr) => {
    console.log('------------------'); 
    console.log(prev); 
    console.log(curr); 
    //return curr; // 콜백함수이므로 curr을 리턴해줘야 prev 값이 출력됨
    return prev + curr.score;
  }, 0); //0부터 시작! 안 적으면 처음 prev부터 시작! 
  console.log(result/students.length);
}

/*
 const result = students.reduce((prev, curr) =>  prev + curr.score;
 console.log(result/students.length);
*/

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
                .map((student) => student.score) //map은 배열 그 자체를 return하므로 operation 사용 가능 
                .filter((score) => score >= 50)
                .join();
  console.log(result);  
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
                .map((student) => student.score)
                .sort((a, b)=>a-b)//이전 값, 현재값 전달됨 
                .join();
                console.log(result);  
}
