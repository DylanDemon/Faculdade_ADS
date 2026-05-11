const IDpokemons= {    
    "bulbasaur": 1,
    "ivysaur": 2,
    "venusaur": 3,
    "charmander": 4,
    "charmeleon": 5,
    "charizard": 6,
    "squirtle": 7,
    "wartortle": 8,
    "blastoise": 9,
    "caterpie": 10,
    "metapod": 11,
    "butterfree": 12,
    "weedle": 13,
    "kakuna": 14,
    "beedrill": 15,
    "pidgey": 16,
    "pidgeotto": 17,
    "pidgeot": 18,
    "rattata": 19,
    "raticate": 20,
    "spearow": 21,
    "fearow": 22,
    "ekans": 23,
    "arbok": 24,
    "pikachu": 25,
    "raichu": 26,
    "sandshrew": 27,
    "sandslash": 28,
    "nidoran": 29,
    "nidorina": 30,
    "nidoqueen": 31
}

const Favoritos = [
]
const Deck1 = [
]
const Deck2 = [
]
const Deck3 = [
]
function salvarStorage(){
    try {  
        localStorage.setItem("IDpokemons",JSON.stringify(IDpokemons));
        localStorage.setItem("Favoritos",JSON.stringify(Favoritos));
        localStorage.setItem("Deck1",JSON.stringify(Deck1));
        localStorage.setItem("Deck2",JSON.stringify(Deck2));
        localStorage.setItem("Deck3",JSON.stringify(Deck3));
    } 
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> salvarStorage << LOCALIZADO NA LocalStorage.js" + erro.message);
    }
  
}
export{salvarStorage};