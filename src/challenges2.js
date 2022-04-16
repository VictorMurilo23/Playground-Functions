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
function hydrate(frase) {
  //  <-- https://www.geeksforgeeks.org/extract-a-number-from-a-string-using-javascript/
  let arrayDeBebidas = frase.match(/\d+/g);
  let total = 0
  for(let index = 0; index < arrayDeBebidas.length; index += 1) {
    total += Number(arrayDeBebidas[index])
  }
  if (total == 1) {
    return total + ' copo de água'
  } else {
    return total + ' copos de água'
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
