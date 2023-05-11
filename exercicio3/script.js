//Crie a const para a frase aqui

// # Exercício 3

// A partir da frase a seguir, faça o que se pede.

// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"

// a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);


const fraseOriginal = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

console.log(fraseOriginal);


// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

// let cor1 = verde
// let cor2 = rosa
// let cor3 = azul
// let cor4 = laranja

// const frase1 = `Jorge tem uma casa ${cor1} e com portão ${cor3}, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

const frase1 = fraseOriginal.replace("verde", "rosa").replace("azul","laranja")
console.log(frase1)


// c) **Verifique** se a nova string inclui **verde**, e se inclui **laranja**.

console.log(frase1.includes("verde","laranja"))

// **EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”

const frase2 = frase1.toUpperCase(`mas não deixe o gato sair`)
console.log(frase2)