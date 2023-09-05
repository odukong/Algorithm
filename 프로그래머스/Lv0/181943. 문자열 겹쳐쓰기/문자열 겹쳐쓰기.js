function solution(my_string, overwrite_string, s) {
    var answer = '';
    str1=my_string.split("");
    str2=overwrite_string.split("");
    [...str1].forEach((value,index)=>{
        (index<s)?answer+=value:(index<=(s+str2.length-1))?answer+=str2[index-s]:answer+=value;
    })
    return answer;
}

//v2. 
//return my_string.slice(0,s)+overwrite_string+my_string.slice(s+overwrite_string.length);