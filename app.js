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
        limparCampo ();
    }
}

