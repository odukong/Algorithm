function solution(a, b, c) {
    let answer=Object.is(a,b);
    let answer2=Object.is(b,c);
    let answer3=Object.is(a,c);
    
    if(answer&&answer2&&answer3){
        return (a+b+c)*(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2))*(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3));
    }
    else if(!answer&&!answer2&&!answer3){
        return a+b+c;
    }
    else{
        return (a+b+c)*(Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2));
    }
}