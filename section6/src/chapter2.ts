/**
 * 접근 제어자
 * access modifier
 * => public, private, protected
 */

class Employee {
  // 필드(생성자에서 만들었을 때는 필드 생략)
  //   private name: string;
  //   protected age: number;
  //   public position: string;

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string,
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number,
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    this.age; // protectedの場合
    // this.name; // privateの場合
  }
}

const employee = new Employee("홍길동", 27, "developer");
// employee.name = "아무개"; // privateの場合
// employee.age = 30; // protectedの場合
employee.position = "디자이너";

console.log(employee);