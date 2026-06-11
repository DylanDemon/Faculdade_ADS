import pokemons from "./1.ListaPokemons.js";
import ConectarApi from "./1.PokemonApi.js";
import { PokemonsMostrar } from "./4.PokemonsMostrar.js";
import {PokemonsFiltrado } from "./2.Procurador.js";

const getpInput = () => document.getElementById("N_Pagina");
const pInput = getpInput();
const largura = window.innerWidth;
const TotalPagina = () => Math.ceil(PokemonsFiltrado().length / PokemonsPorPagina)

let AtualPagina = 1;

function AtualPaginaSet(Valor){AtualPagina = Valor;}    

function PokemonsPorLargura(){
    try {
        if (largura < 768) return 12;   
        else if (largura < 1200) return 16;
        else return 24;          
    } 
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> PokemonsPorLargura << LOCALIZADO NA PokeLimits.js" + erro.stack);
    }
}

let PokemonsPorPagina = PokemonsPorLargura();

function PokeLimits(){
    try {
        const inicio = (AtualPagina - 1) * PokemonsPorPagina;
        const fim = inicio + PokemonsPorPagina;
        return PokemonsFiltrado().slice(inicio,fim);
    } 
    catch (erro) {
        console.error("DEU UM ERRO NO FUNÇAO >> PokeLimits << LOCALIZADO NA PokeLimits.js" + erro.stack);
    }
}

//#region Pagina
function proximaPagina() {
    try {
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
        else{
            AtualPagina = 1;
            pInput.value = 1;
            PokemonsMostrar();
            return false;
        } 
    }
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> proximaPagina << LOCALIZADO NA PokeLimits.js" + erro.message);
    }
}

function anteriorPagina() {
    try {
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
        else {
            AtualPagina = TotalPagina();
            pInput.value = TotalPagina();
            console.log("Botão apertado!")
            PokemonsMostrar();
            return false;
        }
    } 
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> anteriorPagina << LOCALIZADO NA PokeLimits.js" + erro.message);
    }
}

function Pagina(){
    try {
        const pInput = getpInput();
        if(!pInput) return;
        let valor = parseInt(pInput.value);
        const total = TotalPagina();
        if(!isNaN(valor) && valor > 0 && valor <= total){
            AtualPagina = valor;
            console.log("Atualpagina:", AtualPagina)
            PokemonsMostrar();
        }
        else{ pInput.value = AtualPagina; }
    } 
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> Pagina << LOCALIZADO NA PokeLimits.js" + erro.message);
    }
}
//#endregion
export{AtualPaginaSet,proximaPagina,anteriorPagina,PokeLimits, Pagina, pInput};