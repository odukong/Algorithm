function solution(code) {
    let mode=0;
    let ret=[];
    for(i=0;i<code.length;i++){
        switch(mode){
            case 0:
                code[i]!=='1'?(i%2===0?ret+=code[i]:false):mode=1;
                break;
            case 1:
                code[i]!=='1'?(i%2!==0?ret+=code[i]:false):mode=0;
                break;
            default:break;
        }
    }
    return ret.length!==0?ret+"":"EMPTY"
}

// 모범답안
// function solution(code) {
//     let answer = '';
//     let mode = 0;

//     for (let i = 0; i < code.length; i += 1) {
//       if (Number(code[i]) === 1) {
//         mode = mode === 1 ? 0 : 1;
//       }
//       if (Number(code[i]) !== 1 && i % 2 === mode) {
//         answer += code[i];
//       }
//     }
//     return answer.length > 0 ? answer : 'EMPTY';
// }