function solution(l, r) {
    let result=[];
    for(i=l;i<r+1;i++){
        let str=i;
        if(str%5===0){
            if([...String(str)].every((n)=>n==='5'||n==='0'))result.push(n);
        }
    }
    return result.length===0?[-1]:result;
}