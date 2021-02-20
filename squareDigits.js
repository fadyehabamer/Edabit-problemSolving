function squareDigits(n) {
    snumber=n.toString();
    let out=[]
    for(let i=0;i<snumber.length;i++){
        out.push(Math.pow(snumber[i],2))
    }
    return(out.join(""))

}squareDigits(9119)