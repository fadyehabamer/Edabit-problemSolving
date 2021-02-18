function oddishOrEvenish(num) {
    let output = [];
    let snumber = num.toString()
    for(let i=0;i<snumber.length;i++){
        output.push(+snumber[i])
    }
    var sum=output.reduce(function(a,b){
        return a+b
    },0)
    if(sum%2==0){
        return "Evenish"
    }else{
        return "Oddish"
    }
}
oddishOrEvenish(22)