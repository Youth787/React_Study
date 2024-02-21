//1. forEach
//2. map
//3. includes
//4. indexOf

const arr = [1,2,3,4,5];
let number = 3;
console.log(arr.indexOf(number)); //2

//5. findIndex
const arr = {
	{color : "red"},
	{color : "black"},
	{color : "blue"},
	{color : "green"}
};

let number = 3;
console.log(
	arr.findIndex((elm) => {
		return elm.color === "red";
	})
); 

//6. find
const element = arr.find((elm) => {
	return elm.color === "blue";
});

console.log(element);

//7. filter 
const arr = [
  { num : 1, color : "red"},
  { num : 2, color : "black"},
  { num : 3, color : "blue"},
  { num : 4, color : "green"},
  { num : 5, color : "blue"},
];

console.log(arr.filter((elm)=>elm.color==="blue"));

//8. slice
const arr = [
  { num : 1, color : "red"},
  { num : 2, color : "black"},
  { num : 3, color : "blue"},
  { num : 4, color : "green"},
  { num : 5, color : "blue"},
];

console.log(arr.slice(0,2));

//9. concat
const arr1 = [
  { num : 1, color : "red"},
  { num : 2, color : "black"},
  { num : 3, color : "blue"},
];

const arr2 = [
  { num : 4, color : "green"},
  { num : 5, color : "blue"},
];

console.log(arr1.concat(arr2));

// 10. 정렬 (sort())
let numbers = [0,1,3,2,10,30,20];

// 그냥 sort하면 0,1,10,2,20,3,30 이런식으로 사전식으로 배열된다. 
const compare = (a,b) =>{
  //1. 같다
  //2. 크다
  //3. 작다
  if(a>b){
    return 1;
  }
  if(a<b){
    return -1;
  }
    return 0;
}

numbers.sort(compare);
console.log(numbers);

