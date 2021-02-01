function sumOfCubes(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += Math.pow(nums[i], 3);
  }
  return result;
}
sumOfCubes([1, 5, 9]);
