// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(', ');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = 'apple, banana, orange';
    const result = fruits.split(', ', 2);
    console.log(result);
}

// Q3. make this array look like this : [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

// Q4. make new array without the frist two elements
{
    const array = [1, 2, 3, 4, 5]; 
    const sliceResult = array.slice(2, 5);
    console.log(sliceResult);
    console.log(array);

    // const spliceResult = array.splice(0,2);
    // console.log(array);
    // console.log(spliceResult);
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
    new Student('A', 28, true, 100),
    new Student('B', 27, false, 45),
    new Student('C', 17, false, 60),
    new Student('D', 23, true, 66),
    new Student('E', 25, true, 90), 
]

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be : [100, 45, 60, 66, 90]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
}