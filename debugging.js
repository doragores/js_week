const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.toString().length === validLength) {
    return true;
  } else {
    return false;
  }
}
console.log(isValidLength(11111111111));
console.log(isValidLength(123));