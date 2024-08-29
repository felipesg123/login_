// Declaração de um array global para armazenar os dados dos usuários (nome e e-mail)
var dadosLista = [];

// Função para salvar o nome e o e-mail do usuário no array
function salvarUser() {
    // Obtém os valores dos campos de entrada de nome e e-mail
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('Email').value;

    // Verifica se ambos os campos foram preenchidos
    if (nomeUser && emailUser) {
        // Adiciona o objeto com nome e e-mail ao array e atualiza a lista na página
        dadosLista.push({ nome: nomeUser, email: emailUser });
        criaLista();
        // Limpa os campos de entrada de nome e e-mail após o salvamento
        document.getElementById('nomeUser').value = "";
        document.getElementById('Email').value = "";
    } else {
        alert('Favor, informar um nome e e-mail');
    }
}

// Função para criar e atualizar a lista de usuários na tabela
function criaLista() {
    // Define o cabeçalho da tabela
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>E-mail</th><th>Ações</th></tr>";
    
    // Percorre o array de usuários e adiciona cada um como uma nova linha na tabela
    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        tabela += `<tr>
            <td>${dadosLista[i].nome}</td>
            <td>${dadosLista[i].email}</td>
            <td>
                <button class='btn btn-danger btn-sm' onclick='excluir(${i + 1})'>Excluir</button>
                <button class='btn btn-warning btn-sm' onclick='editar(${i + 1})'>Editar</button>
            </td>
        </tr>`;
        document.getElementById("tabela").innerHTML = tabela;
    }
}

// Função para excluir um usuário da lista
function excluir(i) {
    // Remove o usuário do array e da tabela com base no índice
    dadosLista.splice((i - 1), 1);
    criaLista();
}

// Função para editar um usuário na lista
function editar(i) {
    // Preenche os campos de entrada com o nome e o e-mail a serem editados
    document.getElementById('nomeUser').value = dadosLista[i - 1].nome;
    document.getElementById('Email').value = dadosLista[i - 1].email;
    // Remove o usuário do array para que possa ser atualizado
    excluir(i);
}

// Função para validar o preenchimento dos campos de login (ajustada)
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
