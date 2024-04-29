// 열거형 타입  →  Enum 타입 
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입 
// 타입스크립트에만 존재함 

// Enum은 순서가 없는 자료구조, 키에 값이 할당된다. 
// 값을 따로 지정하지 않으면 자동으로 숫자를 할당 한다. 
// 기본값은 0 
enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 0
  language: Language.korean,// "ko"
};

// 타입스트립트에서 상수를 다루는 방법 중 하나이며,
// Enum 컴파일 결과 사라지지 않고, 객체로 변환된다. 그래서 값으로 사용이 가능하다. 
// 🚨 그러나 이 과정은 실행시간과 메모리 사용에 부담을 줄 수 있어서 const enums를 사용하면 이러한 문제를 해결 할 수 있다.

const enum StatusCodes {
  Ok = 200, 
  BadRequest = 400, 
  Unauthorized,
  PaymentRequired,
}

let statusCodes = [StatusCodes.Ok, StatusCodes.BadRequest ]

// 코드내에서 의도를 명확하게 표현하거나, 명확히 구분되는 여러요소를 관리하기 위해서 사용