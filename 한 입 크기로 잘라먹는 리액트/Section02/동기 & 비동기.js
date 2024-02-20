// 자바스크립트는 싱글 스레드로 동작한다. 
// 싱글 쓰레드 사용하면서, 비동기적으로 실행 (동기작업 문제 해결하기 위해)

function taskA(a,b, callback) {
    setTimeout(()=> {
        const res = a + b;
        callback(res);
    }, 3000);
}

function taskB(a, callback){
    setTimeout(()=>{
        const res = a * 2;
        callback(res);
    }, 1000);
}

function taskC(a,callback){
    setTimeout(()=>{
        const res = a * -1;
        callback(res);
    }, 2000);
}

// taskA(3,4,(res)=>{
//     console.log("A TASK RESULT : ", res);
// });

// taskB(7,(res)=>{
//     console.log("B TASK RESULT : ", res);
// });

// taskC(14,(res)=>{
//     console.log("C TASK RESULT : ", res);
// });

// 콜백 지옥이 생길 수 있다. 
// => 이것을 해결하기 위해 promise를 사용한다.
// javascript 비동기 담당 객체. promise 
taskA(4,5, (a_res)=>{
    console.log("A RESULT : ", a_res);
    taskB(a_res,(b_res)=>{
        console.log("B RESULT : ", b_res);
        taskC(b_res,(c_res)=>{
            console.log("C RESULT : ", c_res);
        });
    });
});

console.log("코드 끝");
