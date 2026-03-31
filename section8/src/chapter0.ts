/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 변수명의 경우 예시 key
// const key = "author";

// 인덱스드 엑세스 타입은 타입만 가능하다, 변수명은 에러 발생
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 변수명의 경우 예시 num
// const num = 0;

// 인덱스드 엑세스 타입은 타입만 가능!
const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "홍길동",
    age: 27,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// 존재하지 않는 인덱스의 타입을 추출하려고 하면 에러 발생
// type Tup3 = Tup[3];

type TupNum = Tup[number];
