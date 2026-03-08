/**
 * Unknown 타입
 */
function unknownExam() {
    // 업 캐스팅
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;

    // 다운 캐스팅
    let unknownVar: unknown;

    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업 캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운 캐스팅
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/**
 * Void 타입
 */
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar: void = undefined;
}

/**
 * any 타입
 */
function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;

    undefinedVar = anyVar;

    // 예외 never 타입엔 다운캐스팅 안됨
    // neverVar = anyVar;
}