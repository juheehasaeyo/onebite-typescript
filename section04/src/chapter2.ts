/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 * 위의 두 기준을 모두 충족해야 두 함수가 호환된다고 할 수 있음
 */

// 기준 1. 반환값이 호환되는가(다운캐스팅이 되면 안됨)
type A = () => number; // number 타입
type B = () => 10; // number 리터럴 타입

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업캐스팅
// b = a; 다운캐스팅

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 업캐스팅이면 호환이 안됨
d = c; // 다운캐스팅은 됨

type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
    console.log(animal.name);
    //    console.log(animal.color);
};
let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 매개변수의 개수가 더 적을 때만
