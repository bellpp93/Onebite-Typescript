/**
 * 타입 추론
 */

// 타입 넓히기
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "홍길동",
    profile: {
        nickname: "winter",
    },
    urls: ["https://winter.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

// 암묵적 any (any 타입의 진화)
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];