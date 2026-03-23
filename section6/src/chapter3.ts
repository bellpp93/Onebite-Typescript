/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // 생성자에 public 선언 했으니 필드 정의 지울수 있음
  // name: string;
  // moveSpeed: number;

  // interface는 무조건 public 필드만 정의할 수 있음
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string // private정의 하고 싶다면 따로 정의해줘야 함
  ) {
    // 생성자에 public 선언 시 자동으로 구현되니 여기도 지울 수 있음
    // this.name = name;
    // this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
