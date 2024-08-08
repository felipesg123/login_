//VALIDAÇÃO DE PREENCHIMENTO
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha) {
        alert('Favor prencher todos os campos')
    } else {
        /// alert('Campos prenchidos com sucesso')
        window.location.href = 'cadastro.html';
    }
}

// FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES

var dadosLista = [];

function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;

    if (nomeUser) {
        dadosLista.push(nomeUser);
        //   console.log(dadosLista)
        criaLista();
        document.getElementById('nomeUser').value = "";
    } else {
        alert('Favor, informar um nome');
    }
}
//função criação de lista

function criaLista() {
    let tabela = document.getElementById("tabela").innerHTML = "<th><th>nome usuario</th><th>ações</th></th>";
    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td> <button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> <button onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button>  </td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }

}

// fução para excluir  nome de lista
function excluir(i){
    dadosLista.splice((i-1), 1);
    document.getElementById("tabela").deleteRow(i);
}
// fução para editar  nome de lista
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i-1)];
    dadosLista.splice(dadosLista[(i-1)], 1);
}