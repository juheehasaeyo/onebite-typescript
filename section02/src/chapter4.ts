// 타입 별칭

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user1: User = {
    id: 1,
    name: "이세숑",
    nickname: "sechon",
    birth: "2023.08.03",
    bio: "안녕하숑",
    location: "수원시",
};

let user2: User = {
    id: 1,
    name: "김모찌",
    nickname: "mocci",
    birth: "2023.07.02",
    bio: "반갑찌",
    location: "수원시",
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedStates: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
};

let countryNumberAndStringCodes: CountryNumberCodes = {
    Korea: 410,
};
