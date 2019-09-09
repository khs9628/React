function sayhello(name,byCallback){
    setTimeout(()=>{
        console.log(name+" 님 안 녕 하 세 요");
        byCallback()
    }, 2000);//(2초뒤에 실행)
}

sayhello('mike',function(){
    console.log("안 녕 히 가 세 요")
}) //mike님 안녕하세요 2초뒤 안 녕 히 가 세 요 
