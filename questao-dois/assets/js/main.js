const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputValorDeA = e.target.querySelector(`#valorDeA`);
    const inputValorDeB = e.target.querySelector(`#valorDeB`);
    const inputValorDeC = e.target.querySelector(`#valorDeC`);

    const valorDeA = Number(inputValorDeA.value);
    const valorDeB = Number(inputValorDeB.value);
    const valorDeC = Number(inputValorDeC.value);

    if (valorDeA === 0) {
        setResultado(`O valor de A, deve ser diferente de 0.`, false);
        return;
    }

    if (!valorDeA) {
        setResultado(`Valor de A inválido.`, false);
        return;
    }

    if (!valorDeB) {
        setResultado(`Valor de B inválido.`, false);
        return;
    }

    if (!valorDeC) {
        setResultado(`Valor de C inválido.`, false);
        return;
    }

    const msg = `${bhaskara(valorDeA, valorDeB, valorDeC)}.`;
    setResultado(msg, true);
});

function bhaskara(valorDeA, valorDeB, valorDeC) {
    let delta = valorDeB * valorDeB - 4 * valorDeA * valorDeC;
    let array = [];

    if (delta < 0) {
        return `Delta é negativo`;
    }

    else {
        array[0] = (-valorDeB + Math.sqrt(delta)) / (2 * valorDeA);
        array[1] = (-valorDeB - Math.sqrt(delta)) / (2 * valorDeA);
        return `x1: ${array[0].toFixed(5)}, x2:${array[1].toFixed(5)}`;
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
