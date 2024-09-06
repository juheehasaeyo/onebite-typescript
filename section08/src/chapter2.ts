/**
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}

const person: Person = {
    name: "이세숑",
    age: 1,
};

getPropertyKey(person, "name"); // 이세숑

typeof person === "object";
