function secondLargest(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[arr.length - 2]);
  }
  console.log(arr.length);
}
secondLargest([2, 3, 1, 0, 4, 66, 9]);
