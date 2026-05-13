import pokemons from "./1.ListaPokemons.js";
import { AtualPaginaSet } from "./3.PokeLimits.js";
import { PokemonsMostrar } from "./4.PokemonsMostrar.js";
const Texto_Buscar = document.getElementById('Buscar')
const botao_Buscar = document.getElementById('Buscar_Ok')
function PokemonsFiltrado(){
        const Texto = Texto_Buscar.value.toLowerCase().trim();
        const Numero = Number(Texto)
        if(Texto == "" ) return pokemons;

        else if(!Number.isNaN(Numero)){
                return pokemons.filter(pokemon => pokemon.ID.toString().includes(Texto));
        }

        else{
                return pokemons.filter(pokemon => pokemon.nome.includes(Texto));
        }      
}
function Procurar(){
        AtualPaginaSet(1);
        PokemonsMostrar();
}
export {Texto_Buscar, botao_Buscar, PokemonsFiltrado, Procurar}