import pokemons from "./ListaPokemons.js";
import { PokemonsMostrar } from "./PokemonsMostrar.js";
const PokemonsPorPagina = 15;
let AtualPagina = 1

function PokeLimits(){
    const inicio = (AtualPagina - 1) * PokemonsPorPagina;
    const fim = inicio + PokemonsPorPagina
    return pokemons.slice(inicio,fim);
}
function proximaPagina() {
    const TotalPagina = Math.ceil(pokemons.length / PokemonsPorPagina)
    if(AtualPagina<TotalPagina) {
        AtualPagina++
        PokemonsMostrar();
        return true;
    }
    return false;
}
function anteriorPagina() {
    if(AtualPagina>1){
        AtualPagina--;
        PokemonsMostrar();
        return true;
    } 
    return false;
}
export{PokemonsPorPagina,AtualPagina,proximaPagina,anteriorPagina,PokeLimits};