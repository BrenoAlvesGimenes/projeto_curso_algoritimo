var nome, primeiraNota, segundaNota, passou;
passou = false;

nome = prompt("Digite o nome do aluno: ")
primeiraNota = prompt("Digite a primeira nota do aluno: ")
segundaNota = prompt("Digite a segunda nota do aluno: ")

media = (parseInt(primeiraNota) + parseInt(segundaNota)) / 2

if (media >= 50)
    passou = true;

if (passou) {
    alert("Aprovado! " + nome)
}
    else
    alert("Reprovado! " + nome)