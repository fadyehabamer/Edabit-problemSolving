function percentageChanged(oldPrice, newPrice) {

    let result=0;
    var integer_old = parseInt(oldPrice, 10);
    var integer_new = parseInt(newPrice, 10)
     result =((integer_new) - (integer_old) / integer_old) * 100 + "% decrease"
    return result
}
percentageChanged(800, 600)