function solution(n) {
    let result=[n];
    while(n>1){
        n = n%2 ? n*3+1 : n/2;
        result.push(n);
    }
    return result;
}

//v2. 재귀함수를 이용한 풀이
// function solution(n, arr = []) {
//     arr.push(n)
//     if (n === 1) return arr
//     if (n % 2 === 0) return solution(n / 2, arr)
//     return solution(3 * n + 1, arr)
// }