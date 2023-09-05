function solution(str1, str2) {
    let answer="";
    for(i=0;i<str1.length;i++){
        answer+=str1.substr(i,1)+str2.substr(i,1);
    }
    return answer;
}

//v2.
// return [...str1].map((x,idx)=>x+str2[idx]).join("");