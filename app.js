let amigos = [];

function limparCampo(){
    novoAmigo = document.querySelector('#amigo');
    novoAmigo.value = '';
    document.getElementById('amigo').setAttribute('placeholder', 'Digite um nome');  
    }
function adicionarAmigo(){
    const contemNumeros = /\d/;
    let novoAmigo = document.querySelector('#amigo').value;
    if (novoAmigo == '' || contemNumeros.test(novoAmigo)){
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(novoAmigo);
        console.log(amigos.length);
        atualizarListaAmigos();
        limparCampo ();
    }
}

function atualizarListaAmigos (){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
        for(var i=0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}`;
    }
}

function sortearAmigo(){
    if (amigos == ''){
        alert('Digite o nome de pelo menos 2 amigos para sortear');
    }else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML += `<li> ${amigoSorteado}`;
    }
}

