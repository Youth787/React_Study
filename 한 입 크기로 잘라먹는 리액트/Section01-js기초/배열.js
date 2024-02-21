let arr = [1,"2", true, null, undefined, {}, [], function () {}];
// 다양한 자료형을 담을 수 있다. 

// 값추가 
arr.push(6);
arr.push({key:"value"}); // 가장 마지막에 추가된다. 
console.log(arr.length); 