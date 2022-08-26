const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputValor = e.target.querySelector(`#valor`);
    const valor = Number(inputValor.value);

    if (!valor) {
        setResultado(`Digite uma valor válida`, false);
        return;
    }

    const msg = `${LuidyMoura(valor)}`;
    setResultado(msg, true);
});

function LuidyMoura(valor) {

    for (let i = 1; i <= valor; i++) {
        if (valor % 5 === 0 && valor % 9 === 0) {
            console.log('LuidyMoura')
        } else if (valor % 5 === 0) {
            console.log('Luidy')
        } else if (valor % 9 === 0) {
            console.log('Moura')
        } else {
            console.log(i)
        }
    }
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }
    else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
