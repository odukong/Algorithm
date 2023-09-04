const readline=require('readline');

// 인터페이스 객체 사용
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let input=[];

//on메서드를 이용하여 이벤트와 콜백함수 전달
//line 이벤트는 input에서 줄바꿈 입력을 받을 때마다 발생
rl.on('line',function(line){
    input=[line];
}).on('close',function(){
    str=input[0];
    console.log(str);
})