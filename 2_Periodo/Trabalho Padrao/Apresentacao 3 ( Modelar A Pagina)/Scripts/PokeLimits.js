import pokemons from "./ListaPokemons.js";
import { PokemonsMostrar } from "./PokemonsMostrar.js";
const getpInput = () => document.getElementById("N_Pagina");
const largura = window.innerWidth;
const pInput = getpInput();

function PokemonsPorLargura(){
    if (largura < 768) return 8;    // Celular mostra poucos para carregar rápido
    if (largura < 1200) return 12;  // Tablet
    return 20;                      // PC de 17 polegadas ou mais
}

let PokemonsPorPagina = PokemonsPorLargura();
const TotalPagina = () => Math.ceil(pokemons.length / PokemonsPorPagina)
let AtualPagina = 1;

function PokeLimits(){
    const inicio = (AtualPagina - 1) * PokemonsPorPagina;
    const fim = inicio + PokemonsPorPagina
    return pokemons.slice(inicio,fim);
}

function proximaPagina() {
    
    if(AtualPagina<TotalPagina()) {
        AtualPagina++
        const pInput = document.getElementById("N_Pagina");
        if(pInput){
            pInput.value = AtualPagina;
            console.log("Botão apertado!")
        }
        PokemonsMostrar();
        return true;
    }
    return false;
}

function anteriorPagina() {
    if(AtualPagina>1){
        AtualPagina--;
        const pInput = document.getElementById("N_Pagina");
        if(pInput){
            pInput.value = AtualPagina;
            console.log("Botão apertado!")
        }
        PokemonsMostrar();
        return true;
    } 
    return false;
}

function Pagina(){
    const pInput = getpInput();
    if(!pInput) return;
    let valor = parseInt(pInput.value);
    const total = TotalPagina();
    if(!isNaN(valor) && valor > 0 && valor <= total){
        AtualPagina = valor;
        console.log("Atualpagina:", AtualPagina)
        PokemonsMostrar();
    }
    else{
        pInput.value = AtualPagina;
    }
}
export{proximaPagina,anteriorPagina,PokeLimits, Pagina, pInput};