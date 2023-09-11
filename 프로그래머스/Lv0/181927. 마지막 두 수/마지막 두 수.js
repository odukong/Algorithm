function solution(num_list) {
    let num=num_list.slice(-1)[0];
    let num2=num_list.slice(-2)[0];
    return num>num2?num_list=num_list.concat(num-num2):num_list=num_list.concat(num*2);
}

// v2. 메서드 사용이 적은 풀이
// function solution(num_list) {
//     const [a, b] = [...num_list].reverse();
//     return [...num_list, a > b ? (a-b):a*2];
// }