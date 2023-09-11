function solution(arr, queries) {
    let result=[];
    queries.forEach(([s,e,k])=>{
        let mins=[];
        arr.slice(s,e+1).map((value)=>{
            if(value>k){
                mins.push(value);                
            }
        })
        mins.length > 0 ? result.push(Math.min(...mins)):result.push(-1);
    })
    return result;
}

//v2. 간단 풀이
// function solution(arr, queries) {
//     return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
// }