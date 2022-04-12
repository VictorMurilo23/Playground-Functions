// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(words) {
  const palavras = words.split(' ')
  return palavras
}

// Desafio 4
function concatName(nomes) {
  let primeiro = nomes[0]
  let ultimo = nomes[nomes.length - 1]
  return  ultimo + ', ' +  primeiro
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoriaPontos = wins * 3
  return vitoriaPontos + ties
}

// Desafio 6
function highestCount(numbers) {
  let repetidos = 0
  let maiorNumero = null
  for(let index in numbers) {
    let numeroAtual = numbers[index]
    if (numeroAtual >= maiorNumero) {
      maiorNumero = numeroAtual
    } else {
    }
  }
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (maiorNumero == numbers[index2]) {
      repetidos += 1
    }
  }
  return repetidos
}
// console.log(highestCount([-2, -2, -1]))
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(cat1 - mouse)
  let gato2 = Math.abs(cat2 - mouse)

  if (gato1 == gato2 && gato2 == gato1) {
    return 'os gatos trombam e o rato foge'
  } else if (gato2 < gato1){
    return 'cat2'
  } else if (gato1 < gato2) {
    return 'cat1'
  }
}
console.log(catAndMouse(1, 0, 2))
// Desafio 8
function fizzBuzz(numbers) {
  let coisas = []
  for(let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      coisas.push("fizzBuzz")
    } else if (numbers[index] % 3 === 0) {
      coisas.push("fizz")
    } else if (numbers[index] % 5 === 0) {
      coisas.push("buzz")
    } else {
      coisas.push("bug!")
    }
  }
  return coisas
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
