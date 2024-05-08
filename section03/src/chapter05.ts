/**
 * 타입 추론 
 * 점진적인 타입시스템 
 */

// 티압스크립트가 타입을 추론하는 기준은 변수의 초기값으로 판단한다. 
// 타입을 추론한 값이 있다면 타입 추론이 가능하다. 
// 아무리 복잡합 타입이라도 추론할 값만 존재한다면 추론 가능하다. 
let num = 10; 
let str = "hello";
let obj = {
  id : 1,  
  name : '홍길동',
  info : {
    age : 20,
    year : 2000,
  }
}

let {id, name , info} = obj
let [one, two, three] = [1,2,3,];


// 초기값이 없는 경우는 암묵적으로 any 타입으로 지정되어 값을 할당 할때 마다 그 값으로 타입을 진화시킨다. 
// 아래와 같은 상황을 any의 진화라고 한다. 
// 하지만 해당 방법은 추천하지 않는다. 개발자가 정확히 할당해야 하는 값을 알기 어렵기 때문에 
let anyVal; 

anyVal = 10; 
anyVal.toFixed(); // anyVal 현재 number 타입으로 인식 
// anyVal.toUpperCase(); // error 

anyVal = '문자'; // anyVal 현재 string 타입으로 인식 
anyVal.toUpperCase();
// anyVal.toFixed(); // error


// const로 초기화한 경우 초기화 된 값으로 리터럴 방식으로 타입 추론 
const NUM = 10;  // 10 number 리터럴 타입으로 추론 
const STR = 'string'; // string 리터럴 타입으로 추론 


