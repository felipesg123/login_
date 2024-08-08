// Função para validar o preenchimento dos campos de login
function acessar() {
    // Obtém os valores dos campos de e-mail e senha
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // Verifica se ambos os campos foram preenchidos
    if (!loginEmail || !loginSenha) {
        alert('Favor preencher todos os campos');
    } else {
        // Se os campos estiverem preenchidos, redireciona para a página de cadastro
        window.location.href = 'cadastro.html';
    }
}

// Declaração de um array global para armazenar os nomes dos usuários
var dadosLista = [];

// Função para salvar o nome do usuário no array
function salvarUser() {
    // Obtém o valor do campo de entrada de nome
    let nomeUser = document.getElementById('nomeUser').value;

    // Verifica se o campo de nome foi preenchido
    if (nomeUser) {
        // Adiciona o nome ao array e atualiza a lista na página
        dadosLista.push(nomeUser);
        criaLista();
        // Limpa o campo de entrada de nome após o salvamento
        document.getElementById('nomeUser').value = "";
    } else {
        alert('Favor, informar um nome');
    }
}

// Função para criar e atualizar a lista de usuários na tabela
function criaLista() {
    // Define o cabeçalho da tabela
    let tabela = document.getElementById("tabela").innerHTML = "<th><th>Nome Usuário</th><th>Ações</th></th>";
    
    // Percorre o array de usuários e adiciona cada um como uma nova linha na tabela
    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td> <button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> <button onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button>  </td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}

// Função para excluir um nome da lista
function excluir(i) {
    // Remove o nome do array e da tabela com base no índice
    dadosLista.splice((i-1), 1);
    document.getElementById("tabela").deleteRow(i);
}

// Função para editar um nome na lista
function editar(i) {
    // Preenche o campo de entrada com o nome a ser editado
    document.getElementById('nomeUser').value = dadosLista[(i-1)];
    // Remove o nome do array para que possa ser atualizado
    dadosLista.splice(dadosLista[(i-1)], 1);
}
