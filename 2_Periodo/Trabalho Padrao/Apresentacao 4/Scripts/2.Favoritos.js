import { CarregarStorage } from "./1.LocalStorage.js";

function f_Favoritos (botaoFavorito,  pokemon){

    const dados = CarregarStorage();

    let Favoritos = dados.Favoritos || [];

    const index = Favoritos.indexOf(pokemon.id);

    if(index === -1){
        botaoFavorito.src = "./CSS/Imagems_Extras/Favorito_1.png";
        Favoritos.push(pokemon.id)
        console.log(`Adicionado No Favoritos: ${pokemon.nome}`);
    }
    else{
        Favoritos.splice(index, 1);
        botaoFavorito.src = "./CSS/Imagems_Extras/Favorito_0.png";
        console.log(`Removido No Favoritos: ${pokemon.nome}`);
    }      

    localStorage.setItem("Favoritos", JSON.stringify(Favoritos))
}

export { f_Favoritos};