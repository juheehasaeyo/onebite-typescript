/**
 * 타입 추론
 */
let a = 10; // 타입 넓히기
let b = "hello";
let c = {
    id: 1,
    name: "이세숑",
    profile: {
        nickname: "sechon",
    },
    urls: ["https://sechon.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func() {
    return "hello";
}

let d; // any 타입의 진화
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = "hello";

let arr = [1, "string"];
