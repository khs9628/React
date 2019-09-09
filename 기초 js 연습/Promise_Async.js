
/*  new Promise((resolve, reject)=>{})
    Resolve -> 성공 / 해결 -> .then()
    Reject -> 거절 / 실패 -> .catch() */

function sayhello2(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(name+" 님 안 녕 하 세 요")
            resolve("그 만")
        } ,3000)
    })
}
sayhello2("Frank")
    .then((v)=>console.log(v+" 안 녕 히 가 세 요"))
    //Frank 안녕하세요 3초뒤 그 만 안 녕 히 가 세 요 

/*  
    .then 대신에 씀
    async func_name(p){
        const result = await get_result(){}
    } 
    
*/

async function sayhelloBye(name){
    loc = await sayhello2(name)
    console.log(loc +" 안 녕 히 가 세 요")
}

sayhelloBye("Hyunsoo")
//Hyunsoo 안녕하세요 3초뒤 그 만 안 녕 히 가 세 요