// 배열
let numArr : number[] = [1,2,3]; 

// 문자열 배열 
let strArr: string[]  = ['hello', 'im', '홍길동']; 

// 제네릭을 활용한 방식 
let boolArr : Array<boolean> = [true, false, true];

// 유니온 타입을 이용한 방식 
//배열에 들어가는 요소들의 타입이 다양한 경우 
let multiArr:(number | string)[] = [1, 'Hello'];

// 다차원 배열의 타입을 정의하는 방법 
let doubleArr : number[][] = [
  [1,2,3],
  [4,5]
]

const doubleStringArr : string[][] =[
  ['1','2,','3'],
]

// 튜플 
// 길이와 타입이 고정된 배열 
// 유의사항 : 배열의 pop/push 사용한다면 타입체크가 제대로 되진 않는다. 타입스크립트에만 존재하는 문법이라서
let tup1:[number, number] = [1,2]; 

let tub2:[number, string, boolean] = [1,"2",true];

// 언제사용할까?? (인덱스의 위치의 타입을 지정해둘 떄 방지할 수 있다.)
const user :[string, number][] = [
  ['이정환',1],
  ['홍길동',2],
  ['이바보',3],
  ['오지영',4],
  // [5,'오지영'],
]