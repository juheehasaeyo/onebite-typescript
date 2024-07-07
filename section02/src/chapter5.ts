// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 10, // => 숫자형 enum
    USER,
    GUEST,
}

enum Language {
    korean = "ko",
    english = "en",
}
const user1 = {
    name: "이세숑",
    role: Role.ADMIN, // 0번은 관리자
    language: Language.korean,
};
const user2 = {
    name: "김모찌",
    role: Role.USER, // 1번은 일반 유저
    language: Language.english,
};
const user3 = {
    name: "노랑곰",
    role: Role.GUEST, // 2번은 게스트
};

console.log(user1, user2, user3);
