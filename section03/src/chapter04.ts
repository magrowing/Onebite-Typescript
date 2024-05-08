/**
 * 대수타입 
 * : 여러개의 타입을 합성해서 새롭게 만들어낸 타입 
 * 합집합(유니온타입), 교집합(intersection타입)
 */

/**
 * 1. 합집합 (union)타입 -> | (또는)
 */

type UnionBasic = string | number | boolean | null | undefined; // 유니온 타입은 무한대로 지정할 수 있다.  

let unionOne : UnionBasic = 10; 
unionOne = '십';
unionOne = true; 

let unionArray : (string | number | boolean)[] = ['10', 10, true];
unionArray = ['9', false];

type Color = {
  name : string, 
  color: string, 
}

type Language = {
  name : string, 
  language : string,
}

type Union = Color | Language; 

let unionColor : Union = {
  name : '', 
  color: '', 
}

let unionLanguage : Union = {
  name : '', 
  language: '', 
}

let unionValue : Union = { 
  name : '', 
  color: '',
  language: '', 
}

// let notUnion : Union = { // ❌ Error, name 프로퍼로만 허용하는 타입이 없으므로 
//   name : '', 
// }

/**
 * 2. 교집합 타입 - Intersection 타입  -> & (그리고)
 * (객체타입에 많이 사용된다.)
 */
let value : string & number ;  // value 타입은 never 공집합으로 인식 (두타입의 교집합은 존재하지 않으므로, 그래서 기본타입에는 교집합은 사용되지 않는다.)

type Intersection = Color & Language; 

let interSectionValue : Intersection = {
  name : '', 
  color: '',
  language: '',  // Color와 Language 타입에 지정되어 있는 프로퍼티 모두 있어야 타입에러가 일어나지 않는다. 
}