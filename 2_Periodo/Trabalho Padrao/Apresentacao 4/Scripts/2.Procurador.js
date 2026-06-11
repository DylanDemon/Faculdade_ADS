import { AtualPaginaSet } from "./3.PokeLimits.js";
import { PokemonsMostrar } from "./4.PokemonsMostrar.js";
import { TraducirPortugues } from "./1.Tradutor.js";

const botao_Buscar = document.getElementById('Buscar_Ok')
const Texto_Buscar = document.getElementById('Buscar')
const Tipo_Buscar = document.getElementById('buscar-tipo')

async function PokemonsFiltrado(pokemon){
        let resultado = pokemon;
        const Texto = Texto_Buscar.value.toLowerCase().trim();
        const Tipo = Tipo_Buscar.value.toLowerCase().trim();
        const Numero = Number(Texto)
        if(Texto !== ""){
                if(!Number.isNaN(Numero)){
                        resultado = resultado.filter(p => p.id.toString().includes(Texto));
                }
                else{
                        resultado =resultado.filter(p => p.name.includes(Texto));
                }
        }
        if(Tipo !== ""){
                const Tipo_Quebrado = Tipo.split(/[\s,]+/).filter(Boolean);

                resultado = resultado.filter(p => {
                        if (!p.types || !Array.isArray(p.types)) return false;
                        const TiposPokemons = p.types.map(t => t.toLowerCase());
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