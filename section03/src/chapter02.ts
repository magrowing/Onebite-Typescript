/**
 * Unknown 타입 
 */

function unknownExam(){
  let a : unknown = 1; 
  let b : unknown = 'hello'; 
  let c : unknown = true; 
  let d : unknown = null; 
  let e : unknown = undefined; 

  let unknownVar : unknown; 

  // let num : number = unknownVar;  // ❌ 서브타입인 number 타입의 변수에는 슈퍼타입의 unknown 타입을 넣을 수 없다. => 다운캐스팅 
}

/**
 * Never 타입  === 공집합 
 */

function neverExam(){
  function neverFuc(): never {
    while(true){}
  }

  let num : number = neverFuc();
  let str : string = neverFuc();
  let bool : boolean = neverFuc();
}


/**
 * Any 타입 
 */

function anyExam(){
  let anyVar : any; 
  let neverVar : never; 

  // neverVar = anyVar; ❌ any는 다운캐스팅도 업캐스팅도 가능하지만  never 타입의 다운캐스팅은 되지 않는다. 
}