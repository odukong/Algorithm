function solution(numLog) {
    let answer="";
    numLog.forEach((value,idx)=>{
        switch(Math.abs(numLog[idx]-numLog[idx-1])){
            case 1:
                numLog[idx]>numLog[idx-1]?answer+="w":answer+="s";break;
            case 10:
                numLog[idx]>numLog[idx-1]?answer+="d":answer+="a";break;
            default:break;
        }
    })
    return answer;
}

