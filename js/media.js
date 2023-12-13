/*
  Calcule a média do estudante, em seguida, com base na nota exiba as seguintes
  frases usando uma estrutura de condição :
  frases:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Veja a nota entre 0.1 e 3, mostre na tela:
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Veja a nota entre 3.1 e 5.9, mostre na tela:
      "Você obteve mídia {nota}! Falta um pouco para a média."
    4. Se a nota entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Veja a nota entre 10, mostre na tela:
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/
const botaoMedia=document.querySelector("#btnSituacao")
function  calcularMedia ( )  {
  
  const nota1= Number(document.querySelector("#nota1").value)
  const nota2= Number(document.querySelector("#nota2").value)
  const nota3= Number(document.querySelector("#nota3").value)
  const nota4= Number(document.querySelector("#nota4").value)

  let media =(nota1+nota2+nota3+nota4)/4

  let mensagem =""

  if (media === 0 ){
    mensagem=`Você obteve média de ${media} Infelizmente você zerou a prova :(`
  } else if  (media >= 0.1 && media <= 3) {
    mensagem=`Caramba, deu ruim,você obteve média de ${media}! Estude mais e tente novamente!`
  } else if  (media >= 3.1 && media <= 5.9) {   
    mensagem=`Você obteve média de ${media}! Falta um pouco para a média!`
  } else if  (media >= 6 && media <= 7) {
    mensagem=`Você obteve média de ${media}! Voçê está na média! `
  } else if  (media >= 7.1 && media <= 9.9) {
    mensagem=`Você obteve  ${media}! Notão! Acima da  média!  `
  } else {
    mensagem=`Você obteve média de ${media}!" Hoje é seu aniversário? Pq você tá de parabéns!10 de média!"` 
   }

   document.getElementById('ResultadoP').innerHTML = mensagem
   
}
botaoMedia.addEventListener("click",calcularMedia)

