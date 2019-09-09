//Basic
function plusTwo(s){
    return s+2;
}
// Arrow Function
plusTwo = (s)=>{
    return s+2;
}

//함축
plusTwo = s => s+2;
console.log(plusTwo(10)) //12

//MAP & FILTER
arr = [1,2,3,4,5,6,7,8,9,14,323,223]
arr_map = arr.map(function(v){
    return v*2
})
//Arrow Function
arr_map = arr.map(v => v*2)//2,4,6,8,10,12,14,16,18,26,646,446
arr_filter = arr.filter(v=>v>10)//14,323,223