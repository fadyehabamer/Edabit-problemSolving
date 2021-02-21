function isOrthogonal(arr1, arr2) {
    let sum=0;
    if (arr1.length == arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            sum += (arr1[i] * arr2[i])
        } 
    } 
    return (sum == 0)
    return 1
}isOrthogonal([3, -1, 1], [7, 5,1])