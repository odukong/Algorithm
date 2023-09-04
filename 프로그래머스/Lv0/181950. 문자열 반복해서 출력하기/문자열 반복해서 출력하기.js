const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let input=[];

rl.on('line',function(line){
    input=line.split(" ");
}).on('close',function(){
    str=input[0].toString();
    count=input[1].parseInt();

    console.log(Array(count+1).join(str));  // Array(count).join(str) : 비어있는 문자에 문자열 str을 count 횟수만큼 붙임 
})
// V2. console.log(str.repeat(count));