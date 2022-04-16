// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length == 11) {
    let verificador = true
    for (let index in phoneNumber) {
      if (phoneNumber[index] > 9) {
        verificador = false
        return "não é possível gerar um número de telefone com esses valores"
      } else if (phoneNumber[index] < 0) {
        verificador = false
        return "não é possível gerar um número de telefone com esses valores"
      } else {
      }
    }
    for (let index2 = 0; index2 < phoneNumber.length; index2 += 1) { // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#exemplos <-- o que eu usei pra conseguir fazer essa parte do requisito.
      function isBigEnough(value) {
        return value == phoneNumber[index2];
      }
      let arr = phoneNumber.filter(isBigEnough)
      if (arr.length >= 3) {
        verificador = false
        return "não é possível gerar um número de telefone com esses valores"
      }
      
    }
    if (verificador == true) {
      return '(' + phoneNumber[0] +  phoneNumber[1] + ') '+ phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] +'-'+ phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10]
    }
  } else {
    return "Array com tamanho incorreto."
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

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
  //  https://www.geeksforgeeks.org/extract-a-number-from-a-string-using-javascript/ <-- Esse site me ajudou a cumprir esse requisito 
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
