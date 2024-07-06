// object: 구조를 기준으로 타입 정의=> 구조적 타입 시스템=> property based type system
let user: {
    id?: number; // ? : 있어도 되고 없어도 된다 => 선택적 프로퍼티
    name: string;
} = {
    id: 1,
    name: "이세숑",
};

let config: {
    readonly apiKey: string; // 수정 불가, 읽기 전용
} = {
    apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
