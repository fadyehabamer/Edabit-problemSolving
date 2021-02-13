function checkEquals(arr1, arr2) {
  let check = 0;
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        check++;
      } else {
        check--;
      }
    }
    if (check == arr1.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
checkEquals([1, 2], [1, 3]);
