//#region Imports
import pokemons from "./1.ListaPokemons.js";
import {ListaPokemons } from "./1.PokemonApi.js";
import { CarregarStorage } from "./1.LocalStorage.js";
import {f_Favoritos } from "./2.Favoritos.js";
import { PokemonsFiltrado } from "./2.Procurador.js";

//#endregion
const Card_Info = document.getElementById('card_info');
const container = document.getElementById('poke_contain');
const dados = CarregarStorage();

async function PokemonsMostrar(Lista){
    try {
        if (!container) {
            console.error("Erro: O elemento #poke_contain nao foi encontrado no HTML!");
            return;
        }       
        container.innerHTML = "";
        if(!Lista) Lista = await PokemonsFiltrado();
        if (!Lista || Lista.length === 0) {
            console.warn("Nenhum pokémon encontrado para exibir.");
            return;
        }

            Lista.forEach(pokemon => { 
                const card = document.createElement('div');
                card.classList.add('card');

                if(dados.Favoritos.includes(pokemon.id)) pokemon.icone = "./CSS/Imagems_Extras/Favorito_1.png"
                else pokemon.icone = "./CSS/Imagems_Extras/Favorito_0.png"

                card.innerHTML = `
                    <div class="card_pokemon" style="background-image: url('${pokemon.card}');">
                        <div class="grupo_texto">
                            <h1 class="Texto_ID">${pokemon.id}</h1>
                            <h1 class="Texto_2">#</h1>
                        </div>
                        <h1 class="Texto_Pokemon">${pokemon.nome}</h1>
                        <img src="${pokemon.imagem}" alt="${pokemon.id}" class="pokemons">
                        <img src=${pokemon.icone} alt="" class="Favorito">
                    </div>
                `;
                card.addEventListener('click', () =>{
                    const tipo1 = pokemon.tipo[0];
                    const tipo2 = pokemon.tipo[1];
                    const imgTipo1 = `<img src="./CSS/Card_Pokemons/Tipos/${pokemon.tipo[0]}.png" alt="${tipo1}">`;
                    const imgTipo2 = `<img src="./CSS/Card_Pokemons/Tipos/${pokemon.tipo[1]}.png" alt="${tipo2}">`;
                    if(Card_Info){
                        Card_Info.style.display = "block";
                        Card_Info.innerHTML = `
                            <div class="Back_card">
                                <button id="btn_sair">X</button>
                                <div class="area_foto">
                                    <P class="pokemonID">#${pokemon.id}</P>
                                    <img src="${pokemon.imagem}" alt="${pokemon.id}" class="pokemon_cardinfo"> 
                                    <p class="pokemonGen">${pokemon.Gen}</p>
                                </div>
                                <div class="info_pokemon">
                                    <h1 class="pokemon_nome">${pokemon.nome.toUpperCase()}</h1>
                                    <div class="pokemonTipo">
                                        ${tipo1 ? imgTipo1 : ''}
                                        ${tipo2 ? imgTipo2 : ''}
                                    </div>
                                    <P class="pokemonTamanho">Tamanho: ${pokemon.tamanho}</P>
                                    <p class="pokemonPeso">Peso: ${pokemon.peso} KG</p>
                                    <P class="pokemonHab_principal">Habilidades Principais: ${pokemon.hab_principal}</P>
                                    <p class="pokemonHab_oculta">Habilidades Ocultas: ${pokemon.hab_oculta}</p>
                                    <P class="pokemonFraqueza">Fraquezas: ${pokemon.fraqueza}</P>
                                    <p class="pokemonsobre">(${pokemon.sobre})</p>
                                    <P class="pokemonEvolucoes">Evolucao: ${pokemon.evolucoes}</P>
                                </div>



                            </div>
                        `;
                        Card_Info.querySelector('#btn_sair').addEventListener('click', (e) => {
                            e.stopPropagation();
                            Card_Info.style.display = "none";
                        });
                    } else {
                        console.warn("Nao Achei O Card_Info")
                    }
                });

                    const botaoFavorito = card.querySelector('.Favorito');
                    if (botaoFavorito) {
                    botaoFavorito.addEventListener('click', (e) => {
                        e.stopPropagation();
                        f_Favoritos(botaoFavorito, pokemon)
                        
                    });
                    container.appendChild(card);
                }   
            })
    } 
    catch (erro) {
        console.error("DEU UM ERRO NO FUNcAO >> PokemonsMostrar << LOCALIZADO NA PokemonsMostrar.js" + erro.stack);
    }
}
export {container,PokemonsMostrar};