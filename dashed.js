function dashed(str) {
    let newstring =[]
    let vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"]
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            newstring.push( "-" + str[i] + "-")
        }else{
            newstring.push(str[i])
        }

    }return (newstring.join("")) 
}
dashed("Fight for your right to party!")