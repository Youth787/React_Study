// 논리연산자를 활용한 단락회로평가 

const getName = (person)=> {
    const name = person && person.name; //name의 값은 null
    return name || "객체가 아닙니다."; // name은 falsy하기 때문에 뒤로 넘어가 "객체가 아닙니다"를 출력한다. 
};

let person = {name : "000"};
const name = getName(person);
console.log(name);

// && 일때는 앞이 falsy이면 앞의 값을 반환한다. (뒤의 값 보지 않는다.)
