function solution(arr, queries) {
    queries.forEach(([s,e,k])=>{
        arr.map((value,i)=>{
            s<=i&&i<=e&&i%k===0 ? arr[i]++ : false;
        })
    })
    return arr;
}
