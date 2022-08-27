// Desafio 11
function verificaSeTem3OuMaisNumerosRepetidos(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    const naoPodePassarDe2 = numbers.filter(
      (element) => element === numbers[index],
    ).length;
    if (naoPodePassarDe2 > 2) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(phoneNum) {
  if (phoneNum.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  const filtraNumerosMaioresQue0 = phoneNum.filter(
    (element) => element >= 0 && element <= 9,
  );
  if (
    filtraNumerosMaioresQue0.length !== 11
    || verificaSeTem3OuMaisNumerosRepetidos(phoneNum)
  ) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  const primeiraParte = `(${phoneNum[0]}${phoneNum[1]})`;
  const segundaParte = `${phoneNum[2]}${phoneNum[3]}${phoneNum[4]}${phoneNum[5]}${phoneNum[6]}`;
  const terceiraParte = `${phoneNum[7]}${phoneNum[8]}${phoneNum[9]}${phoneNum[10]}`;
  return `${primeiraParte} ${segundaParte}-${terceiraParte}`;
}

// Desafio 12
function verificaValorAbsoluto(lineA, lineB, lineC) {
  if (
    Math.abs(
      lineA > lineA - lineB - lineC
        && lineB > lineA - lineB - lineC
        && lineC > lineA - lineB - lineC,
    )
  ) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA < lineB + lineC
    && lineB < lineA + lineC
    && lineC < lineA + lineB
    && verificaValorAbsoluto(lineA, lineB, lineC)
  ) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(frase) {
  //  https://www.geeksforgeeks.org/extract-a-number-from-a-string-using-javascript/ <-- Esse site me ajudou a cumprir esse requisito
  let arrayDeBebidas = frase.match(/\d+/g);
  let total = 0;
  for (let index = 0; index < arrayDeBebidas.length; index += 1) {
    total += Number(arrayDeBebidas[index]);
  }
  if (total === 1) {
    return `${total} copo de água`;
  }
  return `${total} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
