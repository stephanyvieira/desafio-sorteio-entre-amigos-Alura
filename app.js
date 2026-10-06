
let amigos = [];


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


function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Adicione pelo menos 2 nomes para sortear.');
    return;
  }

  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>🎉 O amigo sorteado foi: <strong>${sorteado}</strong></li>`;
}
