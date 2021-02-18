function isPotentialFriend(set1, set2) {
  let checker = 0;
  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      if (set1[i] === set2[j] || set2[j] === set1[i]) {
        checker += 1;
      }
    }
  }
  if (set1.length == 1) {
    if (set2.length == 1) {
      if (set1[0] === set2[0] || set2[0] === set1[0]) {
        return true;
      }
    }
  }
  if (checker >= 2) {
    return true;
  } else {
    return false;
  }
}
isPotentialFriend([1], [1, 2]);
