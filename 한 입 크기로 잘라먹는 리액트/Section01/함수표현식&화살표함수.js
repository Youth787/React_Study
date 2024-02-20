/* 
함수 선언식은 호이스팅이 이뤄진다. 
함수 표현식은 호이스팅이 이뤄지지 않는다.
*/

console.log(helloB());
console.log(helloA()); // 에러발생  

let helloA = function () {
	return "안녕하세요. 여러분";
}// 함수 표현식 

function helloB() {
	return "안녕하세요 여러분";
}// 함수 선언식 


// 함수 표현식은 다음과 같이 쓸 수 도 있다. 
//1)
let helloA = () => {
	return "안녕하세요 여러분";
}
//2)
let helloA = () => "안녕하세요 여러분"
// 1,2 또한 호이스팅의 대상이 아니다.   