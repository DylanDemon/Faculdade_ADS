import pokemons from "./ListaPokemons.js";
import { PokemonsMostrar } from "./PokemonsMostrar.js";
function PokemonsPorLargura() {
    try{
    const largura = window.innerWidth;

    if (largura < 768) {
        return 4;  // Celular mostra poucos para carregar rápido
    } else if (largura < 1200) {
        return 8; // Tablet
    } else if(largura < 1920){
        return 12; // PC de 17 polegadas ou mais
    }
    else {
        return 18
    }
    }
    catch(error){
        throw new error("Error No PokemonsPorLargura")
        console.error(error.stack)
        return null;
    }
}
const PokemonsPorPagina = PokemonsPorLargura();
let AtualPagina = 1

function PokeLimits(){
    try{
    const inicio = (AtualPagina - 1) * PokemonsPorPagina;
    const fim = inicio + PokemonsPorPagina
    return pokemons.slice(inicio,fim);
    }
    catch(error){
        
    }
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
export{PokemonsPorPagina,AtualPagina,proximaPagina,anteriorPagina,PokeLimits,PokemonsPorLargura};