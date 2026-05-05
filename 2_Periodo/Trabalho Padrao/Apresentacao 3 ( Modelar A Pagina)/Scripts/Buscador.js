const apiBase = 'https://pokeapi.co/api/v2/pokemon/';
const cachePokemon = new Map();

function capitalizar(texto) {
  return `${texto.charAt(0).toUpperCase()}${texto.slice(1)}`;
}

async function buscarPokemon(nome) {
  const termo = nome.trim().toLowerCase();
  if (!termo) {
    throw new Error('Informe um nome ou número de Pokémon.');
  }

  if (cachePokemon.has(termo)) {
    return cachePokemon.get(termo);
  }

  const response = await fetch(`${apiBase}${encodeURIComponent(termo)}`);
  if (!response.ok) {
    throw new Error('Pokémon não encontrado.');
  }

  const data = await response.json();
  cachePokemon.set(termo, data);
  return data;
}

async function buscarPokemonAleatorio() {
  const maxPokemon = 1010;
  const idAleatorio = Math.floor(Math.random() * maxPokemon) + 1;
  return buscarPokemon(String(idAleatorio));
}

function criarFichaPokemon(data) {
  const tipos = data.types.map(item => capitalizar(item.type.name)).join(', ');
  const habilidades = data.abilities.map(item => capitalizar(item.ability.name)).join(', ');
  const stats = data.stats
    .map(item => `<li>${capitalizar(item.stat.name.replace('-', ' '))}: ${item.base_stat}</li>`)
    .join('');
  const imagem = data.sprites.front_default || data.sprites.other?.['official-artwork']?.front_default || '';

  return `
    <div class="pokemon-card">
      <h2>${capitalizar(data.name)} (#${data.id})</h2>
      <img src="${imagem}" alt="${data.name}" />
      <p><strong>Tipo:</strong> ${tipos}</p>
      <p><strong>Altura:</strong> ${data.height / 10} m</p>
      <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
      <p><strong>Habilidades:</strong> ${habilidades}</p>
      <p><strong>Status base:</strong></p>
      <ul>${stats}</ul>
    </div>
  `;
}

function mostrarResultado(html) {
  const container = document.getElementById('resultado-pokemon');
  if (container) {
    container.innerHTML = html;
  }
}

function mostrarErro(mensagem) {
  mostrarResultado(`<p class="erro">${mensagem}</p>`);
}

function limparResultado() {
  mostrarResultado('');
}

async function buscarHandler(event) {
  event.preventDefault();
  const input = document.getElementById('pokemon-nome');
  if (!input) {
    return;
  }

  try {
    mostrarResultado('<p>Buscando...</p>');
    const data = await buscarPokemon(input.value);
    mostrarResultado(criarFichaPokemon(data));
  } catch (error) {
    mostrarErro(error.message);
  }
}

async function buscarAleatorioHandler() {
  try {
    mostrarResultado('<p>Carregando Pokémon aleatório...</p>');
    const data = await buscarPokemonAleatorio();
    mostrarResultado(criarFichaPokemon(data));
  } catch (error) {
    mostrarErro(error.message);
  }
}

function inicializarBuscador() {
  const form = document.getElementById('busca-pokemon');
  if (form) {
    form.addEventListener('submit', buscarHandler);
  }

  const input = document.getElementById('pokemon-nome');
  if (input) {
    input.addEventListener('input', () => {
      if (!input.value.trim()) {
        limparResultado();
      }
    });
  }

  const botaoAleatorio = document.getElementById('pokemon-aleatorio');
  if (botaoAleatorio) {
    botaoAleatorio.addEventListener('click', buscarAleatorioHandler);
  }
}

document.addEventListener('DOMContentLoaded', inicializarBuscador);
