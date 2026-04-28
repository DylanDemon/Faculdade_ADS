import pokemons from "./Scripts/LocalStorage";
const PokemonsPorPagina = 12;
const AtualPagina = 1

function PokeLimits(){
    const inicio = (AtualPagina - 1) * PokemonsPorPagina;
    const fim = inicio + PokemonsPorPagina
    return pokemons.slice(inicio,fim);
}