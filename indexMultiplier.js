function indexMultiplier(arr) {
    let final =0;
    for(let i=0;i<arr.length;i++){
        final = ( arr[i] * i  )
    }
    console.log(final)
}indexMultiplier([1, 2, 3, 4, 5])