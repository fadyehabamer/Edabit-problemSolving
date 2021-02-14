function capToFront(s) {
    let cap_arr=[];
    let low_arr=[]
    for(let i=0;i<s.length;i++){
        if(s[i] === s[i].toUpperCase()){
            cap_arr.push(s[i]);
        }else{
            low_arr.push(s[i])
        }

    }
    console.log(cap_arr.concat(low_arr).join(""))
}
capToFront("hApPy")