// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN,
    USER,
    GUEST,
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "홍길동",
    role: Role.ADMIN,
    language: Language.korean,
};

const user2 = {
    name: "아무개1",
    role: Role.USER,
    language: Language.english,
};

const user3 = {
    name: "아무개2",
    role: Role.GUEST,
};

console.log(user1, user2, user3);