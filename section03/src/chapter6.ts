/**
 * 타입 단언(Type Assertion)
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "이세숑";
person.age = 1;

type Bear = {
    name: string;
    color: string;
};

let bear: Bear = {
    name: "노랑곰",
    color: "yellow",
    breed: "야옹",
} as Bear; // 가 없으면 오류남

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // 10은 number타입, never는 모든 타입의 서브타입 이므로 A가 B의 슈퍼타입=> 타입 단언

let num2 = 10 as unknown;

let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
    name: "김모찌",
    color: "pink",
} as const;

// cat.name = "";

/**
 * Non Null 단언
 */
type Post = {
    title: string;
    author?: string; // 선택적 프로퍼티로 정의
};

let post: Post = {
    title: "게시글1",
    author: "이정환",
};

const len: number = post.author!.length;
