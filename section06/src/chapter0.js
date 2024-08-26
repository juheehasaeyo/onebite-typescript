/**
 * 클래스
 */

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("열심히 공부함");
    }
    introduce() {
        console.log(`안녕하숑! ${this.name}이숑!`);
    }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("이세숑", "A+", 1);
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드

    programming() {
        console.log(`${this.favoriteSkill}로 코딩함`);
    }
}

const studentDeveloper = new StudentDeveloper("김모찌", "B+", 1, "Typescript");
console.log(studentDeveloper);
studentDeveloper.programming();
