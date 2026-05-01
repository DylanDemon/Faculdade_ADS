import {PokemonsPorPagina,AtualPagina,PokeLimits } from "./PokeLimits.js";
const container = document.getElementById('poke_contain');

function PokemonsMostrar(){
container.innerHTML = "";
PokeLimits().forEach(pokemon => {
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
export {container,PokemonsMostrar};