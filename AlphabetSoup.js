function AlphabetSoup(str) {
    let newstr = [];
    for(let i = 0 ; i<str.length ; i++ ){
        newstr.push(str[i])
    }newstr.sort()
    return(newstr.join(""))
}AlphabetSoup("FADY")