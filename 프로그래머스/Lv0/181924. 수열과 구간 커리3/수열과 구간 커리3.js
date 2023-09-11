function solution(arr, queries) {
    queries.forEach((v,idx)=>{
        let temp=0;
        temp=arr[v[0]];
        arr[v[0]]=arr[v[1]];
        arr[v[1]]=temp;
    });
    return arr;
}

// v2. 모범답안
// function solution(arr, queries) {
//     queries.forEach( ([a,b]) => {
//         [arr[a],arr[b]] = [arr[b],arr[a]];
//     })
//     return arr;
// }