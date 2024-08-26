/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
    // 필드

    // 생성자
    constructor(private name: string, protected age: number, public position: string) {}

    // 메서드
    work() {
        console.log(`${this.name} 일하는중`);
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    // 메서드
    func() {
        //this.name;
        this.age;
    }
}

const employee = new Employee("이정환", 27, "개발자");
// employee.name = "홍길동";
// employee.age = 29;
employee.position = "기획자";

console.log(employee);
