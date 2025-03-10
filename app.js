let amigos = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("amigo").setAttribute("placeholder", "Digite um nome");
});

function limparCampo() {
    let novoAmigo = document.querySelector("#amigo");
    novoAmigo.value = "";
    novoAmigo.setAttribute("placeholder", "Digite um nome");  
}

function adicionarAmigo() {
    const contemNumeros = /\d/;
    let novoAmigo = document.querySelector("#amigo").value.trim();
    
    if (!novoAmigo || contemNumeros.test(novoAmigo)) {
        alert("Por favor, insira um nome válido.");
    } else if (amigos.includes(novoAmigo)) {
        alert("O nome já está na lista, digite um novo nome.");
    } else {
        amigos.push(novoAmigo);
        atualizarListaAmigos();
    }
    limparCampo();
}

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(amigo => `<li style="text-align: center;">${amigo}</li>`).join("");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Todos os nomes foram sorteados. Por favor, inicie um novo sorteio.");
        return;
    }
    
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indice, 1)[0];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li style="text-align: center; font-weight: bold;">O amigo sorteado é: ${amigoSorteado}</li>`;
    
    dispararConfete();
    novoSorteio();
}

function novoSorteio() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}

function dispararConfete() {
    var count = 200;
    var defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}
