const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputValor = e.target.querySelector(`#valor`);
    const valor = Number(inputValor.value);

    if (!valor) {
        setResultado(`Digite uma valor válida`, false);
        return;
    }

    let msg = LuidyMoura(valor);
    setResultado(msg, true);
});

function LuidyMoura(valor) {
    let text = '';
    for (let i = 1; i <= valor; i++) {
        if (i % 5 === 0 && i % 9 === 0) {
            text += i != valor ? 'LuidyMoura, \n' : 'LuidyMoura.';
        } else if (i % 5 === 0) {
            text += i != valor ? 'Luidy, \n' : 'Luidy.';
        } else if (i % 9 === 0) {
            text += i != valor ? 'Moura, \n' : 'Moura.';
        } else {
            text += i != valor ? i + ', \n' : i + '. \n';
        }
    }
    return text;
}

function criaP() {
    let p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    let p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }
    else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
