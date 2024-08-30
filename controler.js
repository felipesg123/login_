// Função para validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Verifica se o CPF tem 11 dígitos e não é uma sequência repetida

    let soma, resto;

    // Calcula o primeiro dígito verificador
    soma = Array.from({ length: 9 }, (_, i) => cpf[i] * (10 - i)).reduce((acc, num) => acc + num, 0);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;

    // Calcula o segundo dígito verificador
    soma = Array.from({ length: 10 }, (_, i) => cpf[i] * (11 - i)).reduce((acc, num) => acc + num, 0);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[10])) return false;

    return true;
}

// Função para salvar ou atualizar o usuário no array
function salvarUser() {
    const nomeUser = document.getElementById('nomeUser').value.trim();
    const emailUser = document.getElementById('Email').value.trim();
    const cpf = document.getElementById("cpf").value.trim();

    if (!nomeUser || !emailUser || !cpf) {
        alert('Favor, informar um nome, e-mail e CPF.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailUser)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    if (!validarCPF(cpf)) {
        alert('Por favor, insira um CPF válido.');
        return;
    }

    // Verifica se está no modo de edição
    if (editIndex !== -1) {
        dadosLista[editIndex] = { nome: nomeUser, email: emailUser, cpf };
        editIndex = -1; // Reseta o índice de edição
    } else {
        if (dadosLista.some(user => user.email === emailUser)) {
            alert('Este e-mail já está cadastrado.');
            return;
        }

        if (dadosLista.some(user => user.cpf === cpf)) {
            alert('Este CPF já está cadastrado.');
            return;
        }

        dadosLista.push({ nome: nomeUser, email: emailUser, cpf });
    }

    criaLista();

    // Limpa os campos após o salvamento
    document.getElementById('nomeUser').value = "";
    document.getElementById('Email').value = "";
    document.getElementById('cpf').value = "";
}

// Função para criar a lista de usuários na tabela
function criaLista() {
    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ""; // Limpa a tabela antes de reescrever

    dadosLista.forEach((user, index) => {
        const row = tabela.insertRow();
        row.insertCell(0).textContent = user.nome;
        row.insertCell(1).textContent = user.email;
        row.insertCell(2).textContent = user.cpf;
        const acoes = row.insertCell(3);

        // Adiciona botões de editar e excluir
        acoes.appendChild(criarBotao('Editar', () => editarUser(index)));
        acoes.appendChild(criarBotao('Excluir', () => excluirUser(index)));
    });
}

// Função para criar um botão com evento
function criarBotao(texto, acao) {
    const btn = document.createElement('button');
    btn.textContent = texto;
    btn.className = 'btn btn-primary me-2';
    btn.onclick = acao;
    return btn;
}

// Função para editar o usuário
function editarUser(index) {
    const user = dadosLista[index];
    document.getElementById('nomeUser').value = user.nome;
    document.getElementById('Email').value = user.email;
    document.getElementById('cpf').value = user.cpf;
    editIndex = index; // Define o índice do usuário sendo editado
}

// Função para excluir o usuário
function excluirUser(index) {
    dadosLista.splice(index, 1);
    criaLista();
}

// Array que armazena os usuários
const dadosLista = [];
let editIndex = -1; // Índice do usuário sendo editado (-1 significa nenhum)
