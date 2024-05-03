// void 
// void -> 공허, 아무것도 없다. 
// 아무것도 없음을 의미하는 타입 
// 오직 
function func1() : string{
  return "hello"
}

function func2() : void{
  console.log('hello');
  // void 타입이 필요한 이유, 함수의 반환값은 undefined 이지만, void가 아닌, null과 undefined 으로 반환값을 지정해둔다면 
  // return null , return undefined 꼭 기재해주어야 타입 검사가 통과하게 된다. 이는 불필요한 코드이므로 void를 사용한다. 
}

//never -> 존재하지 않는, 불가능한 타입? 
function func3() :never {
  while(true){} 
}

function func4 () : never{
  throw new Error() // 반환값이 정확하지 않고, 모순되기 때문에 never로 반환값을 지정 
}

let a : never ; // 변수에 never 타입으로 지정해두면 값을 할당 할 수 없다. 