function addEnding(arr, ending) {
    let final=[];
    for (let i = 0; i < arr.length; i++) {
        final.push(arr[i] + ending)
    }return final
}
addEnding(["new", "pander", "scoop"], "er")