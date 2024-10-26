function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (!peso || !altura) {
        resultado.textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'abaixo do peso normal';
    } else if (imc < 24.9) {
        classificacao = 'com peso normal';
    } else if (imc < 29.9) {
        classificacao = 'com sobrepeso';
    } else if (imc < 34.9) {
        classificacao = 'com Obesidade classe I'
    } else if (imc < 39.9) {
        classificacao = 'com Obesidade classe II'
    } else {
        classificacao = 'com Obesidade Classe III'
    }

    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} e você está ${classificacao}.`;
}