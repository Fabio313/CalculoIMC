const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const peso = e.target.querySelector('#peso').value
    const altura = e.target.querySelector('#altura').value

    if (!peso || isNaN(parseFloat(peso))) {
        setResultado('Peso inválido', false)
    }
    else if (!altura || isNaN(parseFloat(altura))) {
        setResultado('Altura inválida', false)
    }
    else {
        const imc = calculateIMC(peso,altura)
        setResultado(`Seu IMC é ${imc.toFixed(2)} (${getLevel(imc)})`,true)
    }
})

function setResultado(msg, isValid) {
    const resultadoLabel = document.querySelector('#resultado')
    resultadoLabel.textContent = msg

    if (isValid) {
        resultadoLabel.classList.add('paragrafo-resultado')
        resultadoLabel.classList.remove('bad')
    } else {
        resultadoLabel.classList.add('bad')
        resultadoLabel.classList.remove('paragrafo-resultado')
    }
}

function getLevel(imc){
    const imcs = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return imcs[5]
    if (imc >= 34.9) return imcs[4]
    if (imc >= 29.9) return imcs[3]
    if (imc >= 24.9) return imcs[2]
    if (imc >= 18.5) return imcs[1]
    if (imc < 18.5) return imcs[0]
}

function calculateIMC(peso, altura){
    return peso/(altura**2)
}