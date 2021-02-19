function testJackpot(result) {
    let check = 0;
    for (i = 0; i < result.length - 1; i++) {
        if (result[i] == result[i + 1]) {
            check += 1;
        }
    }
    if (check == result.length - 1) {
        return (true)
    } else {
        return (false)
    }
}
testJackpot(["@", "@", "@", "-"])