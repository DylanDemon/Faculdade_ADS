import pokemons from "./ListaPokemons.js";
const PokemonsPorPagina = 12;
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
        return true;
    }
    return false;
}
function anteriorPagina() {
    if(AtualPagina>1){
        AtualPagina--;
        return true;
    } 
    return false;
}
export{PokemonsPorPagina,AtualPagina,proximaPagina,anteriorPagina,PokeLimits};