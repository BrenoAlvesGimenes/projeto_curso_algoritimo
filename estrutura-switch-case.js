function AcaoBotao(){
    var valor01, valor02, resultado, operacao
    valor01 = prompt("Digite o primeiro valor:")
    operacao = prompt("Digite uma operacao: ")
    valor02 = prompt("Digite o segundo valor:")
    switch (operacao) {
        case "+":
            resultado = parseInt(valor01) + parseInt(valor02)
            document.getElementById("paragrafo").innerText = "Resultado: " + resultado
            break;
        case "-":
            resultado = parseInt(valor01) - parseInt(valor02)
            document.getElementById("paragrafo").innerText = "Resultado: " + resultado
            break;
        case "*":
            resultado = parseInt(valor01) * parseInt(valor02)
            document.getElementById("paragrafo").innerText = "Resultado: " + resultado
            break;
        case "/":
            resultado = parseInt(valor01) / parseInt(valor02)
            document.getElementById("paragrafo").innerText = "Resultado: " + resultado
            break;
        default:
            document.getElementById("paragrafo").innerText = "Operação inválida"
    }    
}
