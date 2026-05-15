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
}
export {Texto_Buscar, botao_Buscar, PokemonsFiltrado, Procurar}