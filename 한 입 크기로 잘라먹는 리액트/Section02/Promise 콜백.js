// 대기상태 pending
// 해결 resolve
// 거부 reject

function isPositive(number, resolve, reject) {
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공 -> resolve
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 2000);
  }
  
  function isPositiveP(number) {
    const executor = (resolve, reject) => {
      // 실행자
      setTimeout(() => {
        if (typeof number === "number") {
          // 성공 -> resolve
          console.log(number);
          resolve(number >= 0 ? "양수" : "음수");
        } else {
          // 실패 -> reject
          reject("주어진 값이 숫자형 값이 아닙니다");
        }
      }, 2000);
    };
  
    const asyncTask = new Promise(executor);
    return asyncTask;
  }
  
  const res = isPositiveP(101); // 프로미스 객체의 비동기처리 결과
  
  // 프로미스 객체의 method 인 then과 catch 
  res
    .then((res) => { // then callback method 
      console.log("작업 성공 : ", res);
    })
    .catch((err) => {
      console.log("작업 실패 : ", err);
    });
  
  // 어떤 함수가 프로미스를 반환한다는 것은 
  // 이 함수는 비동기 작업을 하고, 
  // 그 작업  의 결과를 프로미스 객체로 반환 받아서 
  // 사용할 수 있는 함수이다. 

// isPositive(
//     [],
//     (res)=>{
//         console.log("성공적으로 수행됨 : ",res);
//     },(err)=>{
//         console.log("실패하였음 : ",err);
//     }
// );

//=====================================================================

function taskA(a,b) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            const res = a + b;
            resolve(res);
        }, 3000);
    });
}

function taskB(a){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const res = a * 2;
            resolve(res);
        }, 1000);
    });
}

function taskC(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const res = a * -1;
            resolve(res);
        }, 2000);
    });
}

// 콜백 형태 보완
taskA(5, 1)
  .then((a_res) => {
    console.log("A RESUlT : ", a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log("B RESULT :", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT :", c_res);
  });

  // 프로미스 객체를 사용하면 
  // 비동기 처리를 호출하는 함수와 
  // 결과를 처리하는 코드를 분리할 수  있다. 
  // 콜백 함수를 피하고 
  // 가독성 있고 깔끔한 비동기 처리를 할 수 있다. 