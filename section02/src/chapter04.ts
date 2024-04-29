// 타입 별칭 
// 공통적으로 사용해야 타입들을 변수처럼 정의하는 것 
type User = {
  id : number; 
  name : string; 
  nickName : string; 
  birth : number; 
  bio :string; 
  location : string; 
}

const user : User = {
  id : 1, 
  name: '홍길동', 
  nickName : 'hong', 
  birth : 19800919, 
  bio : '홍길동전', 
  location : '한양'
}

//인덱스 시그니처 
type CountryCodes = {
  [key : string] : string;
}

let countryCodes : CountryCodes = {
  Korea : 'ko',
  UnitedState : 'us', 
  UnitedKingdom : 'uk',
}

type CountryNumberCodes = {
  [key : string] : number;
  Korea : number  // Error 인덱스 시그니처로 타입을 지정하는 경우, 지정된 value의 타입이 동일해야 한다. 
}

let countryNumberCodes : CountryNumberCodes = {
  Korea : 410, 
}