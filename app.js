//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Digite um nome válido.');
    return;
  }

  if (amigos.includes(nome)) {
    alert('Esse nome já foi adicionado.');
    return;
  }

  amigos.push(nome);
  input.value = ''; // limpa o campo
  atualizarLista();
}

// Atualiza a lista de amigos na tela
function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Adicione pelo menos 2 nomes para sortear.');
    return;
  }

  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>🎉 O amigo sorteado foi: <strong>${sorteado}</strong></li>`;
}
