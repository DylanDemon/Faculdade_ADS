import pokemons from "./1.ListaPokemons.js";
import { AtualPaginaSet } from "./3.PokeLimits.js";
import { PokemonsMostrar } from "./4.PokemonsMostrar.js";
const botao_Buscar = document.getElementById('Buscar_Ok')
const Texto_Buscar = document.getElementById('Buscar')
const Tipo_Buscar = document.getElementById('buscar-tipo')

function PokemonsFiltrado(){
        let resultado = pokemons;
        const Texto = Texto_Buscar.value.toLowerCase().trim();
        const Tipo = Tipo_Buscar.value.toLowerCase().trim();
        const Numero = Number(Texto)
        if(Texto !== ""){
                if(!Number.isNaN(Numero)){
                        resultado = resultado.filter(p => p.ID.toString().includes(Texto));
                }
                else{
                        resultado =resultado.filter(p => p.nome.includes(Texto));
                }
        }
        if(Tipo !== ""){
                const Tipo_Quebrado = Tipo.split(/[\s,]+/).filter(Boolean);

                resultado = resultado.filter(p => {
                        if (!p.tipo || !Array.isArray(p.tipo)) return false;
                        const TiposPokemons = p.tipo.map(t => t.toLowerCase());
                        return Tipo_Quebrado.every(tb => TiposPokemons.some(tP => tP.includes(tb)));
                })
        }

        return resultado;
}
function Procurar(){
        AtualPaginaSet(1);
        PokemonsMostrar();
        
 let input = document.getElementById("Buscar");                                                                    
const pokemonApi = document.getElementById("card_info");                                                             
const url = "https://pokeapi.co/api/v2/pokemon/";                                                                     

    const pokemonNome = input.value.toLowerCase();   
    
   if(pokemonNome ==="") {
        AtualPaginaSet(1);
        PokemonsMostrar();
        return;
    }

    fetch(`${url}${pokemonNome}`)                                                                                             
        .then(response => { 
                if (!response.ok)       throw new Error("Pokémon não encontrado!");     
        })                                                       
        .then((pokemon) => {                                                                                               
            console.log(pokemon);                                                                                        
            pokemonApi.innerHTML = `                                                 
                <h1>${pokemon.name.toUpperCase()}</h1>                                      
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">              
                <p>Tipo: ${pokemon.types.map(type => type.type.name).join(", ")}</p>           
                <p>Altura: ${pokemon.height / 10} m</p>                                              
                <p>Peso: ${pokemon.weight / 10} kg</p>
                <p>Habilidades: ${pokemon.abilities.map(ability => ability.ability.name).join(", ")}</p>
                <p>Stats: ${pokemon.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(", ")}</p>
                <p>Movimentos: ${pokemon.moves.slice(0, 5).map(move => move.move.name).join(", ")}...</p>
                <p>Experiência Base: ${pokemon.base_experience}</p>
                <p>Ordem: ${pokemon.order}</p>
                <p>Id: ${pokemon.id}</p>                                                 
            `;
        })
        .catch(error => console.error("Erro ao buscar dados da API: ", error));                                                   }
export {Texto_Buscar, botao_Buscar, PokemonsFiltrado, Procurar}
