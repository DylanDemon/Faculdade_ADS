import { proximaPagina, anteriorPagina } from "./3.PokeLimits.js";

function LocalPagina(Local) {
    try{
        setTimeout(() => {
            window.location.href = `./${Local}.html`;
        }, 100);
    }
    catch(erro){
        console.error("DEU UM ERRO NO FUNÇAO >> aperteiHome << LOCALIZADO NA Botoes.js" + erro.message);
    }
}

async function aperteiProximo(){
    try {
        setTimeout( async () => {
            await proximaPagina();
        }, 100);
    } 
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> aperteiProximo << LOCALIZADO NA Botoes.js" + erro.message);
    }
}

async function aperteiAnterior(){
    try {
        setTimeout(async () => {
            anteriorPagina();
        }, 100);
    } 
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> aperteiAnterior << LOCALIZADO NA Botoes.js" + erro.message);
    }
}

export{ LocalPagina, aperteiProximo, aperteiAnterior};