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
    } if (amigos.includes(novoAmigo)){
        alert('O nome já está na lista, digite um novo nome');
        limparCampo();
    }else{
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
        alert('Todos os nomes foram sorteados. Por favor inicie um novo sorteio');
        novoSorteio ();
    }else{
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        checarNomeSorteado(amigoSorteado);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML += `<li> ${amigoSorteado}`; 
    }
}

function checarNomeSorteado(amigoSorteado){
let index = amigos.indexOf(amigoSorteado);
if (index >-1){
    amigos.splice(index,1);
}else{
    return amigoSorteado;
}
}

function novoSorteio (){
    limparCampo();
    let listasHTML = document.getElementById('listas');
    listasHTML.innerHTML = 
    `
    <div id="listas">
                <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
                <ul id="resultado" class="result-list" aria-live="polite"></ul>
            </div>
    `
}

