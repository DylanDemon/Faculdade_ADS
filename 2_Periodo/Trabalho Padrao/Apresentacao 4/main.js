import { ListaPokemons, CarregarPokemons, ListaGlobalPokemons } from './Scripts/1.PokemonApi.js';

import {container, PokemonsMostrar} from './Scripts/4.PokemonsMostrar.js';
import {PokeLimits, Pagina, pInput} from './Scripts/3.PokeLimits.js';
import {LocalPagina,aperteiProximo, aperteiAnterior} from './Scripts/3.Botoes.js';
import { PrincipalStorage } from './Scripts/1.LocalStorage.js';
import { mostrarTamanhoHeader } from './Scripts/1.MostrarTamanho.js';
import { botao_Buscar, Texto_Buscar, Procurar} from './Scripts/2.Procurador.js';

const botaoHome = document.getElementById("Botao_Home");
const botaoDeck = document.getElementById("Botao_Deck");
const botaoLogin = document.getElementById("Botao_Login");
const botaoProximo = document.getElementById("Botao_Proximo");
const botaoAnterior = document.getElementById("Botao_Anterior");

document.addEventListener('DOMContentLoaded', CarregarAPI);

async function CarregarAPI(){
    console.log("Aguardando o banco de dados do PixelMon carregar...");

    // Criamos uma checagem inteligente: se a lista ainda estiver vazia, 
    // esperamos o loop do outro arquivo terminar de colocar os itens na memória.
    while (ListaGlobalPokemons.length < 20) {
        // Espera 100 milissegundos antes de checar a memória de novo (evita travar o navegador)
        await new Promise(resolve => setTimeout(resolve, 100)); 
    }

    console.log("Banco de dados pronto! Total de itens na memória:", ListaGlobalPokemons.length);
    console.log("Renderizando os Pokémons direto na tela...");
    
    // Agora que a lista tem os 20 pokémons salvos, chama o display com segurança!
    await PokemonsMostrar();
}

// function init(){    
//     if(botaoHome)     botaoHome.addEventListener("click", (e) => LocalPagina("index"))
//     if(botaoDeck)     botaoDeck.addEventListener("click", (e) => LocalPagina("Deck"))
//     if(botaoLogin)    botaoLogin.addEventListener("click", (e) => LocalPagina("Login"))
//     if(botaoProximo)  botaoProximo.addEventListener("click", aperteiProximo)
//     if(botaoAnterior) botaoAnterior.addEventListener("click", aperteiAnterior)

//     if(pInput)        pInput.addEventListener("change", Pagina)
//     if (!localStorage.getItem("Favoritos")) {
//         console.log("Primeira execução detectada! Criando banco de dados inicial...");
//         PrincipalStorage([],[],[],[]); 
//     } else {
//         console.log("Bem-vindo de volta! Dados carregados do navegador.");
//     }   
//     if(!window.location.pathname.includes("Deck.html") && !window.location.pathname.includes("Login.html")){
//         PokeLimits();
//         if(botao_Buscar)  botao_Buscar.addEventListener("click", Procurar)
//     }
//     mostrarTamanhoHeader();

//     console.log("Pokemons Iniciado");
// }
document.addEventListener('DOMContentLoaded', CarregarAPI);

export {CarregarAPI}