function solution(my_string, index_list) {
    str=my_string.split("");
    let result="";
    index_list.map((v,idx)=>result+=str[v]);
    return result;
}

// v2.
// function solution(my_string, index_list) {
//     return index_list.map(i => my_string[i]).join('')
// }