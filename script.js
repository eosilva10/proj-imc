const btn = document.getElementById('calculo') // PASSANDO O BOTÃO DE CALCULO PARA UMA VARIAVEL

btn.addEventListener('click', function() { // ADICIONANDO OS MÉTODOS NA AÇÃO DO CLIQUE

    let altura = document.querySelector("#altura").value
    let peso = document.querySelector("#peso").value

    if (altura == '' || peso == '') { // CONDIÇÃO PARA QUE TODOS OS CAMPOS SEJAM PREENCHIDOS
        alert('Por favor preencha todos os campos!')
        return
    }

    altura = altura / 100

    let IMC = (peso / (altura * altura)) // FÓRMULA IMC

    IMC = IMC.toFixed(2) // ARRUMANDO O NUMERO DE CASAS DECIMAIS AOS RESULTADOS

    document.querySelector('#resultado').innerHTML = IMC // EXIBINDO O RESULTADO 

    let situaçao = '' // DEFININDO A SITUAÇÃO FINAL(IMC) A UMA VARIAVEL

    if( IMC < 18.5 ) {
        situaçao = "Abaixo do peso"
    } else if ( IMC >= 18.5 && IMC < 24.9 ) {
        situaçao = "Peso normal"
    } else if ( IMC >= 25 && IMC < 29.9 ) {
        situaçao = "Sobrepeso"
    } else if ( IMC >= 30 && IMC < 34.9 ) {
        situaçao = "Obesidade(Grau 1)"
    } else if ( IMC >= 35 && IMC < 39.9 ) {
        situaçao = "Obesidade(Grau 2)"
    } else if ( IMC >= 40 ) {
        situaçao = "Obesidade(Grau 3)"
    }

    document.querySelector('.comentario').innerHTML = `Situação: <span id="comentario"> ${situaçao} </span>` // EXIBINDO A SITUAÇÃO FINAL(IMC)

})