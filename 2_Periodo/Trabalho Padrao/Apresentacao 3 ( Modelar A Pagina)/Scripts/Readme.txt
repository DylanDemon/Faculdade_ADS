OI MINHA GENTE, AQUI FICARAO TODOS OS SCRIPTS QUE VAO SER ENVIADOS A O MAIN.JS E VOU EXPLICAR COMO VAI FUNCIONAR

main.js = O script que vai ser enviado ao html para ser accesado

buscador.js = script onde vai ficar o buscador com a filtragem

ListaPokemons.js = Onde Vai Ficar A Lista Com Os Detalhes ListaPokemons

LocalStorage.js = Onde Vamos Deixar Os Objetos Json Para Serem Salvos No Propio Navegador

PokeLimits.js = Onde Criaremos O Limite De Pokemons Que Tem Que Ser Mostrados Por Pagina

PokemonsMostrar.js = O Script Onde Esta O Sistema Para Mostrar Os Pokemons

SelectCard.js = Script Onde Vai Fazer Que Ao Clicar No Pokemon, Aparesca Um Cuadrado Com Todas As Informaçoes Do Pokemon Selecionado

Conselho

1. Sempre Que Criar Algum Script Tem Que Criar Um Export e Depois Na main, fazer o import Desse Jeito Voce Manda A Informaçao Do Script Ao Main.js,
e depois o html vai ler a informaçao do script enviado ao main.js

Exemplo:

PokemonsMostrar.js = 

const container = document.getElementById('poke_contain');

function PokemonsMostrar(){Imagina Estar Cheio De Comandos}

export {container, PokemonsMostrar};

main.js = 

import {container, PokemonsMostrar} from './Scripts/PokemonsMostrar.js';

2. Cada Vez Que Criar Um Script E Vai Fazer Ele Guardar Comandos, Primeiro Faça A Funçao E Dentro Da Funçao Voce Coloca Os Comandos.

Exemplo:

function PokemonsMostrar(){

pokemons.forEach(pokemon => {
    const card = document.createElement('div');
    card.classList.add('card-pokemon');

    card.innerHTML = `
        <p>#${pokemon.ID}</p>
        <img src="${pokemon.imagem}" alt="${pokemon.nome}">
        <h2 style="text-transform: capitalize;">${pokemon.nome}</h2>
        <p>Tipo: ${pokemon.tipo.join('/')}</p>
    `;
    container.appendChild(card)
})

}

