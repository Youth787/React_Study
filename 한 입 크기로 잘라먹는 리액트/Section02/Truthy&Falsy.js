/* 
// true로 인식 TRUTHY (참이 아닌데 참으로 판단되는 값)
let a = "string"; 
let a = 42; 
let a = "0";
let a = "false";
let a = Infinity;
let a = []; 
let a = {}; 

// false로 인식 falsy (거짓이 아닌데 거짓으로 판단되는 값)
let a = null;
let a = undefined;
let a = -0;
let a = 0;
let a = NaN;
let a = ""; 
*/
let a = {}; 

if(a){
    console.log("TRUE");
}else{
    console.log("FALSE");
}

//=====================================================================


// const getName = (person) =>{
//     return person.name;
// }

// let person = {name: "이정환"};
// const name = getName(person);
// console.log(name);


const getName = (person) =>{
    // 매번 이렇게 예외처리하기 힘들다. 
    if(person === undefined || person === null){
        return "객체가 아닙니다";
    }
    return person.name;
}

let person = null;
const name = getName(person);
console.log(name);


// falsy로 쉽게 처리하자!
// null과 undefiend는 false로 처리된다는 사실을 활용.
const getName = (person) =>{
    if(!person){ 
        return "객체가 아닙니다";
    }
    return person.name;
}

let person; // undefined
const name = getName(person);
console.log(name);