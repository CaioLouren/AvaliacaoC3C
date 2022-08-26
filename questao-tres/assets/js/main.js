const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNota = e.target.querySelector(`#nota`);
    const nota = Number(inputNota.value);

    if (!nota) {
        setResultado(`Digite uma nota válida`, false);
        return;
    }

    if (nota > 100 || nota < 0) {
        setResultado(`Digite uma nota válida`, false);
        return;
    }

    const msg = `${Arredonda(nota)}`;
    setResultado(msg, true);
});

function Arredonda(nota) {
    if (nota < 38) {
        return `Reprovado: ${nota}`;
    }
    else if (nota % 5 === 0) {
        return `Parabéns você foi aprovado: ${(Math.floor(nota / 5)) * 5}`;
    }
    else if ((nota + 1) % 5 === 0) {
        return `Parabéns você foi aprovado: ${(Math.floor(nota / 5) * 5) + 5}`;
    }
    else if ((nota + 2) % 5 === 0) {
        return `Parabéns você foi aprovado: ${(Math.floor(nota / 5) * 5) + 5}`;
    }
    else if ((nota + 3) % 5 === 0) {
        return `Parabéns você foi aprovado: ${(Math.floor(nota / 5) * 5) + 5}`;
    }
    else if (nota > 40) {
        return `Parabéns você foi aprovado: ${nota}`;
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
