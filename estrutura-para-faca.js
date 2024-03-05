   function AcaoBotao() {
    var numero = prompt("Digite um número inteiro positivo para calcular o fatorial:")
    var fatorial = 1

    for (var contador = 1; contador <= numero; contador++) {
        fatorial *= contador
    }

    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " e: " + fatorial
}