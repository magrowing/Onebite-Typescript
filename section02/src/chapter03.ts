// object - 객체타입이지만, 그안의 프로퍼티에 대해선 모른다.
// 객체는 객체리터럴타입 프로퍼티의 타입들도 지정해줘야한다. 
// 객체는 구조적 타입 시스템 -> 프로퍼티 베이스 타입 시스템 

// 선택적 프로퍼티(옵셔널프로퍼티) : '?' 
const user : {
  id?: number; 
  name : string;
} = {
  id : 1, 
  name : '홍길동',
}

// 읽기전용 프로퍼티 
const config : {
  readonly apiKey :string; 
} = {
  apiKey : 'MY API KEY'
}