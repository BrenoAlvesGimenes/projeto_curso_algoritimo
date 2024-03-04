/*
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a primeira nota do aluno: ")
   leia(primeiraNota)
   escreval("Digite a segunda nota do aluno: ")
   leia(segundaNota)
   media := (primeiraNota + segundaNota) / 2
   
   se media >= 50 entao
   escreval("Aprovado! ", nome)
   senao
   escreval("Reprovado! ", nome)
   fimse
*/

var nome, primeiraNota, segundaNota;
nome = prompt("Digite o nome do aluno: ")
primeiraNota = prompt("Digite a primeira nota do aluno: ")
segundaNota = prompt("Digite a segunda nota do aluno: ")

media = (parseInt(primeiraNota) + parseInt(segundaNota)) / 2

if (media >= 50) {
    alert("Aprovado! " + nome)
}
    else
    alert("Reprovado! " + nome)