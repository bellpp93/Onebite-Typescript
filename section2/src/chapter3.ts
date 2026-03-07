// object(구조적 타입 시스템)
// 선택적 프로퍼티(?)
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "홍길동",
};

// readonly
let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
};

// 읽기 전용 속성이므로 변수 바꿀 수 없음
// config.apiKey = "hacked";