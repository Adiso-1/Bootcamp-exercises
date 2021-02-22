function validate(password) {
  console.log(password)
  return /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{6,}/g.test(password);
}
console.log(validate("fjd3IR9.;"));