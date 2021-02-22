function zipIt(women, men) {
    let arr = [];
    if (women.length == men.length) {
        arr.push(men, women)
    }
    else{
        return "sizes don't match"
    }
    console.log(arr) 
}
zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])