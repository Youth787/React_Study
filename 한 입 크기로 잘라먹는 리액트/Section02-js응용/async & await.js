// async

function hello(){
    return 'hello';
}

async function helloAsync(){
    return "hello Async";
} // 프로미스를 리턴하는 비동기 처리 함수 : then 사용 가능하다는 의미

console.log(hello());
console.log(helloAsync()); // 프로미스 출력됨 

helloAsync().then((res)=>{
    console.log(res);
})

// await 

function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    });
}

async function helloAsync(){
    await delay(3000); // 동기적으로 동작. 3초후 아래 코드 실행 
    // await은 async와 함께 
    return "hello async";
}

async function main(){
    const res = await helloAsync()
    console.log(res);
}

main();