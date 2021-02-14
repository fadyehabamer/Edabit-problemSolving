function removeLeadingTrailing(n) {
    // const numString = "065";
    //parseInt with radix=10
    let number = parseInt(n, 10);
    console.log(number);
    // Number constructor
    number = Number(n);
    console.log(number);
    // unary plus operator
    number = +n;
    console.log(number);
    // conversion using mathematical function (subtraction)
    number = n - 0;
    return (number.toString());
}
removeLeadingTrailing(065)