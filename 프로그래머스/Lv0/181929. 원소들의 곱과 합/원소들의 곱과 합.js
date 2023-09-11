function solution(num_list) {
    return calculate(num_list,"*")<Math.pow(calculate(num_list,"+"),2)? 1:0; 
}

function calculate(num_list,operator){
    switch(operator){
        case "*":
            return num_list.reduce((acc,cur,idx,_)=>{return acc*cur},1); 
        case "+":
            return num_list.reduce((acc,cur,idx,_)=>{return acc+cur},0); 
        default:break;   
    }
}