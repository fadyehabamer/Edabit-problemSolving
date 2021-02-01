function charCount(myChar, str) {
    let arr = []
    for (var i = 0; i < str.length; i++) {
        if (str[i] === myChar) {
            arr.push(str[i]);
        }
    }console.log(arr.length) 
}
charCount("F", "fady")