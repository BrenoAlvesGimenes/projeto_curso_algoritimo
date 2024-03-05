var numero01, numero02, resultado, operacao, opcao

function AcaoBotao(params) {
    
numero01 = prompt("Digite o primeiro valor:")
operacao = prompt("Digite uma operacao: ")
numero02 = prompt("Digite o segundo valor:")

if (operacao == "+") {
    resultado = parseInt(numero01) + parseInt(numero02)
    document.getElementById("paragrafo").innerText = "Resultado: " + resultado
    }

if (operacao == "-") {
    resultado = parseInt(numero01) - parseInt(numero02)
    document.getElementById("paragrafo").innerText = "Resultado: " + resultado
    }

if (operacao == "*") {
    resultado = parseInt(numero01) * parseInt(numero02)
    document.getElementById("paragrafo").innerText = "Resultado: " + resultado
    }

if (operacao == "/") {
    resultado = parseInt(numero01) / parseInt(numero02)
    document.getElementById("paragrafo").innerText = "Resultado: " + resultado
    }

}