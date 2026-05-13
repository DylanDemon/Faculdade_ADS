import {PokeLimits} from "./PokeLimits.js";
import { CarregarStorage } from "./Localstorage.js";
import pokemons from "./ListaPokemons.js";
const container = document.getElementById('poke_contain');
const dados = CarregarStorage();
function PokemonsMostrar(){
    try {
        if (!container) {
            console.error("Erro: O elemento #poke_contain não foi encontrado no HTML!");
            return;
        }
        let Lista= PokeLimits();

        container.innerHTML = "";
        Lista.forEach(pokemon => {
            const card = document.createElement('div');
            card.classList.add('card');

            if(dados.Favoritos.includes(pokemon.ID)) pokemon.icone = "./CSS/Imagems_Extras/Favorito_1.png"
            else pokemon.icone = "./CSS/Imagems_Extras/Favorito_0.png"

            card.innerHTML = `
                <div class="card_pokemon" style="background-image: url('${pokemon.card}');">
                    <div class="grupo_texto">
                        <h1 class="Texto_ID">${pokemon.ID}</h1>
                        <h1 class="Texto_2">#</h1>
                    </div>
                    <h1 class="Texto_Pokemon">${pokemon.nome}</h1>
                    <img src="${pokemon.imagem}" alt="${pokemon.ID}" class="pokemons">
                    <img src=${pokemon.icone} alt="" class="Favorito">
                </div>
            `;

            const botaoFavorito = card.querySelector('.Favorito');

            botaoFavorito.addEventListener('click', () =>{
                let Favoritos = dados.Favoritos;
                const index = Favoritos.indexOf(pokemon.ID);

                if(index === -1){
                    botaoFavorito.src = "./CSS/Imagems_Extras/Favorito_1.png";
                    Favoritos.push(pokemon.ID)
                    console.log(`Adicionado No Favoritos: ${pokemon.nome}`);
                }
                else{
                    Favoritos.splice(index, 1);
                    botaoFavorito.src = "./CSS/Imagems_Extras/Favorito_0.png";
                    Favoritos = Favoritos.filter(id => id !== pokemon.ID)
                    console.log(`Removido No Favoritos: ${pokemon.nome}`);
                }      

                localStorage.setItem("Favoritos", JSON.stringify(Favoritos))
            })
            container.appendChild(card);
        })
    } 
    catch (erro) {
        console.error("DEU UM ERRO NO FUNÇAO >> PokemonsMostrar << LOCALIZADO NA PokemonsMostrar.js" + erro.stack);
    }
}
export {container,PokemonsMostrar};