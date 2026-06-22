import { ListaPokemons, IDSAtuais, BancoDeIDS} from "./1.PokemonApi.js";
import { AtualPaginaSet, AtualPagina} from "./3.PokeLimits.js";
import { PokemonsMostrar } from "./4.PokemonsMostrar.js";
const botao_Buscar = document.getElementById('Buscar_Ok')
const Texto_Buscar = document.getElementById('Buscar')
const Tipo_Buscar = document.getElementById('buscar-tipo')

async function PokemonsFiltrado(){

        let resultado = Array.isArray(window.ListaGlobalPokemons) ? [...window.ListaGlobalPokemons] : [];

        const Texto = Texto_Buscar.value.toLowerCase().trim();
        const Tipo = Tipo_Buscar.value.toLowerCase().trim();
        const Numero = Number(Texto)

        if(Texto !== ""){
                if(!Number.isNaN(Numero)){
                        resultado = resultado.filter(p => p.id.toString().includes(Texto));
                }
                else{
                        resultado =resultado.filter(p => p.nome.toLowerCase().includes(Texto));
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
        window.ListaFiltradaAtiva = resultado;
        const inicio = (AtualPagina - 1) * 20;
        const fim = inicio + 20;
        return resultado.slice(inicio,fim);
}
function Procurar(){
        AtualPaginaSet(1);
        PokemonsMostrar();
}
export {Texto_Buscar, botao_Buscar, PokemonsFiltrado, Procurar}