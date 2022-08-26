//Capturar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputLadoUm = e.target.querySelector(`#ladoUm`);
    const inputLadoDois = e.target.querySelector(`#ladoDois`);
    const inputLadoTres = e.target.querySelector(`#ladoTres`);

    const ladoUm = Number(inputLadoUm.value);
    const ladoDois = Number(inputLadoDois.value);
    const ladoTres = Number(inputLadoTres.value);

    if (!ladoUm) {
        setResultado(`Primeiro lado inválido`, false);
        return;
    }

    if (!ladoDois) {
        setResultado(`Segundo lado inválido`, false);
        return;
    }

    if (!ladoTres) {
        setResultado(`Terceiro lado inválido`, false);
        return;
    }

    const msg = `Seu triângulo é ${getCalculo(ladoUm, ladoDois, ladoTres)}.`;
    setResultado(msg, true);
});

function getCalculo(ladoUm, ladoDois, ladoTres) {
    let resposta = '';
    if (ladoUm === ladoDois && ladoDois === ladoTres) {
        return resposta = 'Equilatero';
    }
    else if (ladoUm != ladoDois && ladoDois != ladoTres && ladoUm != ladoTres) {
        return resposta = 'Escaleno';
    }
    else {
        return resposta = 'Isosceles';
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
