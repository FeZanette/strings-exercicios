// # Exercício 2

// Observe a string abaixo:

// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// A partir dela, execute os passos abaixo:



// a) **Remova** o excesso de espaços no final da string;

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "

console.log (minhaString.trim())



// b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;

console.log("Número de caracteres antes:", minhaString.length);

const minhaStringSemEspaco = "Eu não sou supersticioso, mas sou um pouco ________."
console.log("Número de caracteres depois:", minhaStringSemEspaco.length);


// c) **Substitua** os traços `________` por “sticioso”.

console.log(minhaString.replace("________","sticioso"));