const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(`entrei`)
    const peso = e.target.querySelector('#peso').value
    const altura = e.target.querySelector('#altura').value

    if(!peso){
        console.log(peso)
        setResultado('Peso inválido', false)
    }
    if(!altura){
        setResultado('Altura inválida', false)
    }
})

function setResultado (msg, isValid) {
    const resultadoLabel = document.querySelector('#resultado');
    resultadoLabel.textContent = msg;

    if (isValid) {
        resultadoLabel.classList.add('paragrafo-resultado');
        resultadoLabel.classList.remove('bad');
    } else {
        resultadoLabel.classList.add('bad');
        resultadoLabel.classList.remove('paragrafo-resultado');
    }
  }