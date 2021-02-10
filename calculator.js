function calculator(num1, operator, num2) {
  if (operator === "+") {
    console.log(num1 + num2);
  } else if (operator === "-") {
    console.log(num1 - num2);
  } else if (operator === "*") {
    console.log(num1 * num2);
  } else if (operator === "/") {
    if (num2 == 0) {
      return "Can't divide by 0!";
    } else {
      console.log(num1 / num2);
    }
  }
}
