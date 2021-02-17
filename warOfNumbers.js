function warOfNumbers(arr) {
    let even = [];
    let odd = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i])
        } else if (arr[i] % 2 == 1) {
            odd.push(arr[i])
        }
    }
    var sumeven = even.reduce(function (a, b) {
        return a + b;
    }, 0);
    var sumodd = odd.reduce(function (a, b) {
        return a + b;
    }, 0);
    if (sumodd < sumeven) {
        return (sumeven - sumodd)
    } else if (sumeven < sumodd) {
        return (sumodd - sumeven)
    }else{
        return (sumeven-sumodd)
    }
}
warOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])