const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('res');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let mensagem = '';

        if(valorIMC < 18.5) {
            mensagem = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            mensagem = 'com o peso ideal.';
        } else if (valorIMC < 30) {
            mensagem = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            mensagem = 'com obesidade de grau 1.';
        } else if (valorIMC < 40) {
            mensagem = 'com obesidade de grau 2.';
        } else {
            mensagem = 'com obesidade de grau 3.';
        }

        resultado.textContent = `${nome} o seu IMC é de ${valorIMC}, portanto você está ${mensagem}`;

    } else {
        resultado.textContent = 'Verifique os dados'
    }
}

calcular.addEventListener('click', imc);