function isPandigital(num) {
    let s_num = num.toString();
    let mySet = new Set();
    for (let n of s_num) {
        console.log(mySet.add(n));
    }
    if (mySet.size >= 10) {
        return true;
    } else {
        return false;
    }
}isPandigital(123456789)