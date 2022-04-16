// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length == 11) {

  } else {
    return "Array com tamanho incorreto."
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    if (Math.abs(lineA > lineA - lineB - lineC && lineB > lineA - lineB - lineC && lineC > lineA - lineB - lineC)) {
      return true
    }
    return false
  } else {
    return false
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
