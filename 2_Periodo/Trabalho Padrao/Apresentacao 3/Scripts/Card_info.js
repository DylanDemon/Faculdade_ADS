import pokemons from "./1.ListaPokemons.js"; 
import { CarregarStorage } from "./1.LocalStorage.js"; 
import {PokeLimits} from "./3.PokeLimits.js";
import { PokemonsMostrar } from "./4.PokemonsMostrar.js";
import { Pokemons_Sprites } from "./5.Pokemons_Sprites.js";
const Cardinfo = document.getElementById('Card_info');
const PokemonImg = document.getElementById('PokemonImg');
const PokemonNome = document.getElementById('PokemonNome');
const PokemonID = document.getElementById('pokemonID');
const fecharCard = document.getElementById('fecharCard');
const dados = CarregarStorage();

function Card_info(pokemon){
    PokemonID.innerText = `ID: ${pokemon.ID}`;
    PokemonNome.innerText = pokemon.nome;
    PokemonImg.src = pokemon.imagem;
    Cardinfo.style.display = 'block';

}export {Card_info};

 fecharCard.addEventListener('click', () => {
 })
 