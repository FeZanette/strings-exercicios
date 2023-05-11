// # Exercício 1

// Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. Em seguida, imprima no console a seguinte mensagem:
   
//     Estas são as comidas favoritas de nomeDoUsuario:
//     - Comida1
//     - Comida2
//     - Comida3
      
// Você deve usar apenas um `console.log()` para isso

//   <details> 
//   <summary> 💡 Dica</summary>
  
//     ⭐ Você pode juntar texto com variáveis de duas formas:
//     - Concatenando as strings (com o sinal de +)
//     - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
//     Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
//   </details>

const nomeDoUsuario = prompt ("Qual o seu nome?")
const comida1 = prompt ("Cite suas 3 comidas preferidas. Digite a primeira:")
const comida2 = prompt ("Digite sua segunda comida preferida:")
const comida3 = prompt ("Digite sua terceira comida preferida:")
const frase = `Estas são as comidas favoritas de ${nomeDoUsuario}: \n${comida1} \n${comida2} \n${comida3}`

console.log (frase)