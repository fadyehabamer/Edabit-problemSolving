function arrayOfMultiples(num, length) {
    let new_arr = [];
    for (let i = 1; i <= length;i++){
        new_arr.push(num * i)
    }
    console.log(new_arr)
}
arrayOfMultiples(7,5)
