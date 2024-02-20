let a = [];
if(a.length === 0){
    console.log("빈 배열");
}else{
    console.log("안 빈 배열"); 
}

// 해당 조건문을 삼항 연산자로 줄이면 
a.length ===0? console.log("빈 배열"):console.log("안 빈 배열");

const arrrayStatus = a.length === 0 ? "빈배열":"안빈배열";
console.log(arrrayStatus);

let b;
const result = b ? true : false;
console.log(result);

// 학점 계산 프로그램 
// 90이상 a+
// 50점 이상 b+
// 둘다 아니면 f

let score = 40;

score >=90
    ? console.log("A+")
    : score >= 50
    ? console.log("B+")
    : console.log("F"); 
    // 삼항 연산자 중첩으로 사용하면 가독성이 떨어진다. 
    // if 문 사용하는 것이 낫다. 



 