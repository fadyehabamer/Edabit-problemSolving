let findNemo = (sentence) => {
    var t = "I found Nemo at ",
        f = "I can't find Nemo :(",
        x = sentence.split(" ")
    if (sentence.includes("Nemo")) {
        if (x.indexOf("Nemo") == -1) {
            console.log(f)
        } else {
            console.log(t + parseInt(x.indexOf("Nemo") + 1) + "!");
        }
    } else {
        console.log(f)
    }
}
findNemo("Is it Nemos, Nemona, Nemoor or Garfield?")