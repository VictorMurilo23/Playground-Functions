// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(words) {
  return words.split(' ');
}

// Desafio 4
function concatName(nomes) {
  let primeiroNome = nomes[0];
  let ultimoNome = nomes[nomes.length - 1];
  return `${ultimoNome}, ${primeiroNome}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = numbers.sort((a, b) => a - b)[numbers.length - 1];
  return numbers.filter((element) => element === maiorNumero).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);

  if (distanciaGato1 === distanciaGato2 && distanciaGato2 === distanciaGato1) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanciaGato2 < distanciaGato1) {
    return 'cat2';
  }
  if (distanciaGato1 < distanciaGato2) {
    return 'cat1';
  }
}

// Desafio 8
function verificaNumero(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  let coisas = [];
  for (let index = 0; index < numbers.length; index += 1) {
    coisas.push(verificaNumero(numbers[index]));
  }

  return coisas;
}

// Desafio 9
function encode(fraseNormal) {
  let palavraCodificada = '';

  const obj = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  for (let index = 0; index < fraseNormal.length; index += 1) {
    if (Object.keys(obj).includes(fraseNormal[index])) {
      palavraCodificada += obj[fraseNormal[index]];
    } else {
      palavraCodificada += fraseNormal[index];
    }
  }
  return palavraCodificada;
}

function decode(fraseCodificada) {
  let palavraNormal = '';

  const obj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let index = 0; index < fraseCodificada.length; index += 1) {
    if (Object.keys(obj).includes(fraseCodificada[index])) {
      palavraNormal += obj[fraseCodificada[index]];
    } else {
      palavraNormal += fraseCodificada[index];
    }
  }
  return palavraNormal;
}

// Desafio 10
function techList(tecnologias, name) {
  let organizado = [];
  const tecnologiasOrdenado = tecnologias.sort();
  if (tecnologias.length > 0) {
    for (let index = 0; index < tecnologiasOrdenado.length; index += 1) {
      const obj = {
        tech: tecnologiasOrdenado[index],
        name,
      };
      organizado.push(obj);
    }
    return organizado;
  }
  return 'Vazio!';
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
