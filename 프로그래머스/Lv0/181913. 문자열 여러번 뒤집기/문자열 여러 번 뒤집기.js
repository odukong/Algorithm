function solution(my_string, queries) {
    return queries.reduce((acc,cur)=>{
        const [a,b]=cur;
        return acc=acc.slice(0,a)+acc.slice(a,b+1).split("").reverse().join("")+acc.slice(b+1);
    },my_string);
}


//v2. 참조 배열에 영향이 가는 splice 메서드 사용한 경우 
// function solution(my_string, queries) {
//     let str = my_string.split('');
//     queries.forEach(([start, end]) => {
//         const changeStr = str.slice(start, end + 1);
//         str.splice(start, changeStr.length, ...changeStr.reverse());
//     });
//     return str.join('');
// }