function changeEnough(change, amountDue) {
  let result = 0;
  let prices = [0.25, 0.1, 0.05, 0.01];
  for (i = 0; i < change.length; i++) {
    result += change[i] * prices[i];
  }
  if (result < amountDue) {
    return false;
  } else {
    return true;
  }
}
changeEnough([10, 0, 0, 50], 3.85);
