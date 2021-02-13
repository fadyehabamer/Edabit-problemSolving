function sortIt(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        arr.sort(function (a, b) {
            return a - b;
        });
    }
    console.log(arr)

}
sortIt([1, [3],
    [0], 2, [4]
])