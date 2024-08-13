/**
 * 선언 합치기
 */

interface Person {
    name: string;
}

interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: "hello";
}
const person: Person = {
    name: "",
    age: 27,
};

/**
 * 모듈 보강
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}
const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
};
