function solution(num_list) {
    let odd=[];
    let even=[];
    num_list.forEach((value,i)=>{
        value%2===0?even+=value+"":odd+=value+"";
    })
    return odd+even;
}


