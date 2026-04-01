/**
 * keyof 연산자
 */

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "홍길동",
  age: 26,
};

getPropertyKey(person, "name");
