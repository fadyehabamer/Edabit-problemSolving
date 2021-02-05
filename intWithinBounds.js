let intWithinBounds = (n, lower, upper) => {
    if (Number.isInteger(n)) {
        if (lower <= n && n < upper) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}