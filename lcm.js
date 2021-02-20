function lcm(n1, n2) {
    if ((typeof n1 !== 'number') || (typeof n2 !== 'number'))
        return false;
    return (!n1 || !n2) ? 0 : Math.abs((n1 * n2) / gcd_two_numbers(n1, n2));
}

function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}