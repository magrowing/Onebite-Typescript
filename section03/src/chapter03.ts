/**
 * 기본타입의 호환성 
 */

let num1 : number = 10; 
let num2 : 10 = 10; 

num1 = num2;
// num2 = num1; ❌ 해당의 경우 다운캐스팅 

/**
 * 객체의 호환성 
 * -> 프로퍼티의 값을 기준으로 호환된다. 
 */

type Animal = {
  name : string; 
  color: string; 
}

type Dog = {
  name : string; 
  color: string; 
  breed : string; 
}

let animal : Animal = {
  name : '기린', 
  color: 'yellow'
}

let dog : Dog  = {
  name : '강아지', 
  color: 'brown', 
  breed : '푸들', 
}

animal = dog; 
// dog = animal; ❌ Error 
// 이유는? animal의 프로퍼티는 이름,컬러 두가지의 프로퍼티가 존재, dog는 breed라는 프로퍼트가 있음. 
// 객체에서는 프로퍼티를 기준으로 슈퍼타입/서브타입이 나뉨, 프로퍼티가 더 적을수록 집합의 부모가 된다.(프로퍼티가 적을수록 슈퍼타입)
// dog 서브타입 

type Book = {
  name : string, 
  price : number, 
}

type ProgrammingBook = {
  name : string, 
  price: number, 
  skill : string, 
} 

let book :Book ; 
let programmingBook : ProgrammingBook = {
  name : '우아한 타입 스크립트 with 리액트', 
  price: 32000,
  skill : '타입스크립트'
}

// 변수를 객체 리터럴 방식으로 초기값을 선언시 초과 프로퍼티 검사로 인해 에러 발생 
let book2 : Book = {
  name : '우아한 타입 스크립트 with 리액트', 
  price: 32000,
  // skill : '타입스크립트' ❌  초과 프로퍼티 검사로 인해 에러, 
  // 초과 프로처티 검사란? 객체 리터럴로 초기화 할 때 발동하는 타입스크립트의 특수한 기능 
  // 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수 할당 할 수 없도록 막는다. 
}

let book3 : Book = programmingBook; // 변수로 지정하여 초기값을 선언하면 초과 프로퍼티 검사 발생하지 않음.

function func(book : Book) {}
func({
  name : '우아한 타입 스크립트 with 리액트', 
  price: 32000,
  // skill : '타입스크립트' ❌  초과 프로퍼티 검사로 인해 에러, 
})

func(programmingBook); // 객체 리터럴 방식이 아닌, 변수에 미리 값을 담아둔 다음 해당 변수값을 인수로 전달 