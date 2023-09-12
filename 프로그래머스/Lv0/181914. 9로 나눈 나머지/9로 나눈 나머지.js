function solution(number) {
    return [...number].reduce((acc,cur,i)=>{
        return acc+Number(cur);
    },0)%9;
}