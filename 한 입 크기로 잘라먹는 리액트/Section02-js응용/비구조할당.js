// 배열을 선언 자체에서 분리한다. 
// 배열의 선언분리. 비 구조 할당 

// four처럼 기본값 할당도 가능. 
let[one, two, three, four="four"] = ["one","two","three"];
console.log(one, two, three, four);

// =============================================

//객체의 비구조 할당 
let Object = {one : "one", two:"two", three:"three", name :"이정환"};

// name이라는 변수를 myName이라는 변수에 할당 가능
let {name:myName, one, two, three, abc="four"} = Object;
console.log(one, two,three,myName,abc); 