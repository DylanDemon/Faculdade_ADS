import {container, PokemonsMostrar} from './Scripts/PokemonsMostrar.js';
import {PokemonsPorPagina, AtualPagina, PokeLimits} from './Scripts/PokeLimits.js'

function init(){
    console.log("Pokemons Iniciado");
    PokemonsMostrar();
    PokeLimits();
}

document.addEventListener('DOMContentLoaded', init);