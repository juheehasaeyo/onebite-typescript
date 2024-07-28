/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지
// 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지
function func(a: number, b: number): number {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "이세숑", age?: number) {
    // 선택적 매개변수는 필수적 매개변수 앞에 나오면 안됨
    console.log(`name : ${name}`);
    if (typeof age === "number") {
        console.log(`age : ${age}`);
    }
}

introduce("이세숑", 1);
introduce("이세숑"); // age를 선택적 매개변수로 만들면 오류 발생 X

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
