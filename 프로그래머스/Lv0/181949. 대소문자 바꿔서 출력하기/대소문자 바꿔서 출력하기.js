const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let input=[];
rl.on('line',function(line){
    input=[line]
}).on('close',function(){
    let str=input[0].split("")
    if(str.length>=1&&str.length<=20){
        for(i=0;i<str.length;i++){
            if(str[i].charCodeAt(0)>=97){
                str[i]=str[i].toUpperCase();
            }else{
                str[i]=str[i].toLowerCase();
            }
        }
    }
    console.log(str.join(""));
})

// v2. for문 말고 forEach 메서드를 이용해 배열 순환