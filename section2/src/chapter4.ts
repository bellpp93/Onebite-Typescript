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
    name: "홍길동",
    nickname: "spring",
    birth: "2026.03.07",
    bio: "안녕하세요",
    location: "서울",
};

let user2: User = {
    id: 2,
    name: "아무개",
    nickname: "summer",
    birth: "2026.03.07",
    bio: "안녕하세요",
    location: "경기도",
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
}