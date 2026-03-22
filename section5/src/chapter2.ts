/**
 * 선언 합침(선언 병합, Declaration Merging)
 */

// 인터페이스는 동일한 이름으로 중복 선언이 가능
interface Person {
    name: string;
}

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    name: "hello";
}

const person: Person = {
    name: "",
    age: 27,
};

/**
 * 모듈 보강(라이브러리 등 외부 모듈의 타입 정의 보강)
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
};