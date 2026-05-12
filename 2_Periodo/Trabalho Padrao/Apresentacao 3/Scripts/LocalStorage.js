const S_Favoritos = []
const S_Deck1 = []
const S_Deck2 = []
const S_Deck3 = []
function PrincipalStorage(S_Favoritos, S_Deck1, S_Deck2, S_Deck3){
    try {  
        localStorage.setItem("Favoritos",JSON.stringify(S_Favoritos || []));
        localStorage.setItem("Deck1",JSON.stringify(S_Deck1 || []));
        localStorage.setItem("Deck2",JSON.stringify(S_Deck2 || []));
        localStorage.setItem("Deck3",JSON.stringify(S_Deck3 || []));
    } 
    catch (erro) {
        console.error("DEU UM ERRO NO FUNÇAO >> salvarStorage << LOCALIZADO NA LocalStorage.js" + erro.message);
    }
  
}
function CarregarStorage(){
    try {
    const Favoritos = JSON.parse(localStorage.getItem("Favoritos")) || [];
    const Deck1 = JSON.parse(localStorage.getItem("Deck1")) || [];
    const Deck2 = JSON.parse(localStorage.getItem("Deck2")) || [];
    const Deck3 = JSON.parse(localStorage.getItem("Deck3")) || [];

    console.log("Carregou Tudo Certo");

    return { Favoritos, Deck1, Deck2, Deck3};
    } 
    catch (erro) {
        console.error("DEU UM ERRO NO FUNÇAO >> mostrarTamanhoHeader << LOCALIZADO NA MostrarTamanho.js" + erro.message);
        return {Favoritos: [], Deck1: [], Deck2: [], Deck3: [] };
    }
}
export{PrincipalStorage, CarregarStorage};