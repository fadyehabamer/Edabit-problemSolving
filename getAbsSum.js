function getAbsSum(arr) {
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum += Math.abs(arr[i])
    }console.log(sum) 
}
getAbsSum([1, 2, 3, -4])