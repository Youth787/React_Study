let person = {
    key: "value", // 프로퍼티 (객체 프로퍼티)
    key1: 123,
    key2: true,
    key3: undefined,
    key4: [1, 2],
    key5: function () {}
  }; // 객체 리터럴 방식
  
//=====================================================================

  // 괄호 표기법 
  let person = {
      name : "이정환", // key,value 형태. 여기서 key값은 무조건 문자열이다. 
      age : 25 // 프로퍼티 
  }; // 객체 리터럴 방식 
  
  const name = "name";
  console.log(person[name]); // person["name"]으로 표기해도 된다. 변수명으로 하려면 변수 정의 해야함. 
  console.log(person.age);

//=====================================================================

  console.log(getPropertyValue("name"));
  
  function getPropertyValue(key){
      return person[key];
  }
  
  // let person을 const person으로 설정해도, 
  // person.name 변경했을때 오류가 나지 않는다. 
  // property를 수정하는 행위는 person이라는 상수를 수정하는 행위가 아니기 때문이다. 


//=====================================================================


  const person = {
	name : "이정환", // 멤버 
	age : 25, // 멤버 
	say : function(){
		console.log(`안녕나는 ${this.name}`);
		console.log(`안녕나는 ${this["name"]}`);
	}// 메서드 -> 방법 
};

person.say();
person["say"]();

person.name = null;
// delete person["name"];
console.log(person);

//=====================================================================

const person = {
	name : "이정환",
	age : 25,
	say : function(){
		console.log(`안녕나는 ${person["name"]}`);
	} // 메서드 -> 방법
};

console.log(`name : ${"name" in person}`); //true
console.log(`age : ${"age" in person}`);//true
console.log(`gender : ${"gender" in person}`);//false