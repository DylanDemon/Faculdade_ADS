import pokemons from "./1.ListaPokemons.js";
import { ListaPokemons, IDSAtuais} from "./1.PokemonApi.js";
import { PokemonsMostrar } from "./4.PokemonsMostrar.js";
import {PokemonsFiltrado } from "./2.Procurador.js";

const getpInput = () => document.getElementById("N_Pagina");
const pInput = getpInput();
const TotalPagina = async () => {
    const listaCompletaAtiva = window.ListaFiltradaAtiva || window.ListaGlobalPokemons || [];
    return Math.ceil(listaCompletaAtiva.length / 20); // Ajustado para /20 já que suas páginas exibem 20 itens
};

let AtualPagina = 1;

function AtualPaginaSet(Valor){AtualPagina = Valor;}    

//#region Pagina
async function proximaPagina() {
    try {
        console.log("Atualpagina = " + AtualPagina)
        const pInput = document.getElementById("N_Pagina");
        const total = await TotalPagina();
        

        if (AtualPagina < total) {
            AtualPagina++;
            
            if (pInput) pInput.value = AtualPagina;

            console.log("Avançando para a página: " + AtualPagina);

            const PokemonsAtuais = IDSAtuais(AtualPagina);
            await PokemonsMostrar(PokemonsAtuais);
            return true;
        } 
        else {
            AtualPagina = 1;

            if (pInput) pInput.value = 1;
            console.log("Resetando para a página 1.");
            const PokemonsAtuais = IDSAtuais(AtualPagina);
            await PokemonsMostrar(PokemonsAtuais);
            return false;
        } 
    }
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇÃO >> proximaPagina << LOCALIZADO NA PokeLimits.js: " + error.message);
    }
}

async function anteriorPagina() {
    try {
        const pInput = document.getElementById("N_Pagina");
        const total = await TotalPagina();

        if(AtualPagina>1){
            AtualPagina--;
            if(pInput){
                pInput.value = AtualPagina;
                console.log("Botão Anterior apertado!")
            }
            const PokemonsAtuais = IDSAtuais(AtualPagina);
            await PokemonsMostrar(PokemonsAtuais);
            return true;
        }
        else {
            AtualPagina = total;
            pInput.value = total;
            console.log("Botão Anterior apertado!")
            const PokemonsAtuais = IDSAtuais(AtualPagina);
            await PokemonsMostrar(PokemonsAtuais);
            return false;
        }
    } 
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> anteriorPagina << LOCALIZADO NA PokeLimits.js" + error.message);
    }
}

async function Pagina(){
    try {
        const pInput = getpInput();
        const total = await TotalPagina();
        if(!pInput) return;
        let valor = parseInt(pInput.value);
        if(!isNaN(valor) && valor > 0 && valor <= total){
            AtualPagina = valor;
            console.log("Atualpagina:", AtualPagina)
            const PokemonsAtuais = IDSAtuais(AtualPagina);
            await PokemonsMostrar(PokemonsAtuais);
        }
        else{ pInput.value = AtualPagina; }
    } 
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> Pagina << LOCALIZADO NA PokeLimits.js" + error.message);
    }
}
//#endregion
export{AtualPaginaSet,proximaPagina,anteriorPagina, Pagina, pInput, AtualPagina};