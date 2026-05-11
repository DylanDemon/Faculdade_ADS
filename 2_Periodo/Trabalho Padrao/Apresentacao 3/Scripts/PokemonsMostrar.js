import {PokeLimits} from "./PokeLimits.js";
const container = document.getElementById('poke_contain');

function PokemonsMostrar(){
    try {
        if (!container) {
            console.error("Erro: O elemento #poke_contain não foi encontrado no HTML!");
            return;
        }
        let Lista= PokeLimits();
        // Pokemons Antigos Deletados
        container.innerHTML = "";
        // Pokemons Novos Adicionados
        Lista.forEach(pokemon => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
            <div class="card_pokemon" style="background-image: url('${pokemon.card}');">
                <div class="grupo_texto">
                    <h1 class="Texto_ID">${pokemon.ID}</h1>
                    <h1 class="Texto_2">#</h1>
                </div>
                <h1 class="Texto_Pokemon">${pokemon.nome}</h1>
                <img src="${pokemon.imagem}" alt="${pokemon.ID}" class="pokemons">
            </div>
            `;
            container.appendChild(card);
        })
    } 
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> PokemonsMostrar << LOCALIZADO NA PokemonsMostrar.js" + erro.message);
    }
}
export {container,PokemonsMostrar};