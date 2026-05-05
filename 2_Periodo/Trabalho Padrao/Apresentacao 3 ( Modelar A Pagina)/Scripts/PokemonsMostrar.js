import {PokemonsPorPagina,AtualPagina,PokeLimits } from "./PokeLimits.js";
const container = document.getElementById('poke_contain');

function PokemonsMostrar(){
// Pokemons Antigos Deletados
container.innerHTML = "";

// Pokemons Novos Adicionados
PokeLimits().forEach(pokemon => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        
        <img src="${pokemon.card}" alt="" class="card_pokemon">
        <img src="${pokemon.imagem}" alt="" class="pokemons">
    `;
    container.appendChild(card)
})
}
export {container,PokemonsMostrar};