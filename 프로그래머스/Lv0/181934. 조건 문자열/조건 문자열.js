function solution(ineq,eq,n,m){
    switch(`${ineq}${eq}`){
        case ">=":
            return n>=m?1:0;
        case "<=":
            return n<=m?1:0;
        case ">!":
            return n>m?1:0;
        case "<!":
            return n<m?1:0;   
        default:break;
    }
}

// v2. 모범답안(:객체 사용)
// const operations = {
//     '>=': (n, m) => n >= m,
//     '<=': (n, m) => n <= m,
//     '>!': (n, m) => n > m,
//     '<!': (n, m) => n < m,
// };

// function solution(ineq, eq, n, m) {
//     const op = operations[ineq + eq];
//     return Number(op(n, m));
// }