function numbersSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {

        if (Number.isInteger(arr[i])) {
            result += arr[i]
        }

    }
    console.log(result)
}
numbersSum([1, 3, 4, "g"])