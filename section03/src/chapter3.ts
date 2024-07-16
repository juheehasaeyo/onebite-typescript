/**
 * 기본타입 간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업캐스팅

/**
 * 객체타입 간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string; // 조건이 더 적은 타입이 슈퍼타입!
};

type Dog = {
    name: string;
    color: string;
    breed: string; // 추가 프로퍼티가 있다고 해서 슈퍼타입이 아님!
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "세숑이",
    color: "brown",
    breed: "비숑",
};

animal = dog;

// dog = animal;

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string; // 서브타입
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 타입스크립트",
    price: 33000,
    skill: "react.js",
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 */
type Book = {
    name: string;
    price: number;
};

let book2: Book = {
    name: "한 입 크기로 잘라먹는 타입스크립트",
    price: 33000,
    // skill: "react.js", // 객체 타입에 정의된 프로퍼티만 넣을 수 있게!
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
    name: "한 입 크기로 잘라먹는 타입스크립트",
    price: 33000,
    // skill: "react.js",
});
func(programmingBook);
