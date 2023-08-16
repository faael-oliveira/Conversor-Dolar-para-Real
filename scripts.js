// Mapeando o botão de converter e salvando em uma constante
const convertButton = document.querySelector(".convert-button")
// Mapeando o seletor 1 e salvando em uma constante
const currencySelect1 = document.querySelector(".moedas-1")
// Mapeando o seletor 2 e salvando em uma constante
const currencySelect2 = document.querySelector(".moedas-2")
// Essa função recebe valores do input e converte dolar em real
function converterValues() {
    // Mapeando o valor do input e salvando e uma constante
    const inputValue = document.querySelector(".input-currency").value
    // Mapeando o valor da moeda de cima e salvando em uma constante
    const resultValue1 = document.querySelector(".result-value-1")
    // Mapeando o valor da moeda debaixo e salvando em uma constante
    const resultValue2 = document.querySelector(".result-value-2")
    // Definindo manualmente o valor do dolar
    const dolarToday = 4.98
    // Definindo manualmente o valor do real
    const realToday = 1.00
    // Se o valor do seletor 1 for igual a dolar, converter valor do dolar e formatar os numeros da moeda 1 para USD
    if (currencySelect1.value == "dolar") {
        resultValue1.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
    }
    // Se o valor do seletor 2 for igual a real, converter valor do real e formatar os numeros da moeda 2 pra BRL
    if (currencySelect2.value == "real") {
        resultValue2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue = inputValue * dolarToday)
    }
}
convertButton.addEventListener("click", converterValues)