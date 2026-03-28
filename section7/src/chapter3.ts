/**
 * 제네릭 인터페이스
 */

/**
 * 타입 변수(공식 문서 용어)
 * = 타입 파라미터
 * = 제네릭 타입 변수
 * = 제네릭 타입 파라미터
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니쳐
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // 타입 좁히기 사용 안해도 됨
  //   if (user.profile.type !== "student") {
  //     console.log("잘 오셨습니다");
  //     return;
  //   }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

// 오류가 나기 때문에 사용할 수 없다.
// goToSchool(developerUser);

const developerUser: User<Developer> = {
  name: "홍길동",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "아무개",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};
