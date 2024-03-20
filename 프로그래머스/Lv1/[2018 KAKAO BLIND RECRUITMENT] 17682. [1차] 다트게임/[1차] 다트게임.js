function solution(dartResult) {
  var num=dartResult.match(/\d+/g)
  var bonus=dartResult.match(/\D+/g)
  
  var result=[0,0,0]
  for(let i=0;i<result.length;i++){
      switch(bonus[i][0]){
          case "S":
              result[i]+=parseInt(num[i])**1;break;
          case "D":
              result[i]+=parseInt(num[i])**2;break;
          case "T":
              result[i]+=parseInt(num[i])**3;break;
      }
      if(bonus[i].includes("*")){
          if(i!==0){result[i-1]*=2}
          result[i]*=2
      }
      if(bonus[i].includes("#")){
          result[i]*=(-1)
      }
  }
  return result.reduce((acc,cur)=>acc+cur)
}
