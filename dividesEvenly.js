function dividesEvenly(a, b) {
    if (a > b) {
        if ((a / b) % 2 === 0) {
            console.log (true)
        } else {
            console.log(false) 
        }
    }
}
dividesEvenly(78,6)