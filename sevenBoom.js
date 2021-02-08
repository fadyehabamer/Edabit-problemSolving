let sevenBoom = (arr) => {
    let splitToDigit = (arr) => {
        return ([...arr+ " "].map(Number)) 
    }

    let new_arr = splitToDigit(arr);
    console.log(new_arr);
    if (new_arr.includes(7)) {
        console.log("Boom !")
    } else {
        console.log("there is no 7 in the array")
    }
}
sevenBoom([35, 4, 9, 37])