// number 
let num1 : number = 123;
let num2 : number = -123;

// string 
let str1 : string = "hello";
let str2 : string = 'hello';
let str3 : string = `hello${num1}`;

// boolean 
let bol1 : boolean = true;
let bol2 : boolean = false;

// null 
let null1 : null = null;

// undefined 
let undef1 : undefined = undefined;


// 자바스크립트에서는 값이 없을 경우 null을 지정해두지만 타입스크립트에서는 허용되지 않는다. 
// null 타입이 존재하므로 
// let castNum : number = null // 👈🏻 사용하기 위해선 tsconfig.json 옵션 설정 변경 ("strictNullChecks": false, 으로 설정해서 사용할 수 도 있다.) 

// 리터럴 타입  : 값 자체로 정의하는 타입
// 리터럴은 값을 의미한다. 
let numA : 10 = 10;
let strA : 'hello' = "hello"; 
let boolA : true = true;