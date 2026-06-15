import { ListaPokemons, CarregarPokemons, AtualizarPaginaPokemon, ListaGlobalPokemons } from './Scripts/1.PokemonApi.js';

import {container, PokemonsMostrar} from './Scripts/4.PokemonsMostrar.js';
import {PokeLimits, Pagina, pInput, AtualPagina} from './Scripts/3.PokeLimits.js';
import {LocalPagina,aperteiProximo, aperteiAnterior} from './Scripts/3.Botoes.js';
import { PrincipalStorage } from './Scripts/1.LocalStorage.js';
import { mostrarTamanhoHeader } from './Scripts/1.MostrarTamanho.js';
import { botao_Buscar, Texto_Buscar, Procurar} from './Scripts/2.Procurador.js';

const botaoHome = document.getElementById("Botao_Home");
const botaoDeck = document.getElementById("Botao_Deck");
const botaoLogin = document.getElementById("Botao_Login");
const botaoProximo = document.getElementById("Botao_Proximo");
const botaoAnterior = document.getElementById("Botao_Anterior");

async function CarregarAPI(){
    console.log("Aguardando o banco de dados do PixelMon carregar...");

    console.log("Banco de dados pronto! Total de itens na memória:", ListaGlobalPokemons.length);
    console.log("Renderizando os Pokémons direto na tela...");
    
    await AtualizarPaginaPokemon(AtualPagina);
}

async function init(){

    await CarregarAPI();

    if(botaoHome)     botaoHome.addEventListener("click", (e) => LocalPagina("index"))
    if(botaoDeck)     botaoDeck.addEventListener("click", (e) => LocalPagina("Deck"))
    if(botaoLogin)    botaoLogin.addEventListener("click", (e) => LocalPagina("Login"))
    if(botaoProximo)  botaoProximo.addEventListener("click", aperteiProximo)
    if(botaoAnterior) botaoAnterior.addEventListener("click", aperteiAnterior)

    if(pInput)        pInput.addEventListener("change", Pagina)
    if (!localStorage.getItem("Favoritos")) {
        console.log("Primeira execução detectada! Criando banco de dados inicial...");
        PrincipalStorage([],[],[],[]); 
    } else {
        console.log("Bem-vindo de volta! Dados carregados do navegador.");
    }   
    if(!window.location.pathname.includes("Deck.html") && !window.location.pathname.includes("Login.html")){
        PokeLimits();
        if(botao_Buscar)  botao_Buscar.addEventListener("click", Procurar)
    }
    mostrarTamanhoHeader();

    console.log("Pokemons Iniciado");
}
document.addEventListener('DOMContentLoaded', init);

export {CarregarAPI}