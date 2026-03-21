/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

import { validateHeaderValue } from "node:http";

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number 타입
let b: B = () => 10; // number 리터럴 타입

// 업캐스팅의 경우
a = b;
// 다운캐스팅의 경우 에러
// b = a;

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 업캐스팅이지만 에러!
// c = d;
d = c;

// Animal타입과 Dog타입 중 Animal타입이 조건이 더 적으니깐 '슈퍼타입'
type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// 업캐스팅이지만 에러발생!
// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
    console.log(animal.name);
    // console.log(animal.color); // 에러 발생
};

let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때(타입이 같은 매개변수일 경우)
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 2개 <= 1개 OK (매개변수의 개수가 더 적을때에만 호환이 가능)
// func2 = func1; // 1개 <= 2개 X