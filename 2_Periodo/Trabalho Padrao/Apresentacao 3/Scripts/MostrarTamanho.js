function mostrarTamanhoHeader(){
    try {
    const header = document.querySelector('header');

    if(!header){throw new Error("Elemento <header> não foi encontrado no Dom.");}

    const dimensoes = header.getBoundingClientRect();
    console.log("--- DIMENSÕES DO HEADER ---");
    console.log("Largura:", dimensoes.width, "px");
    console.log("Altura:", dimensoes.height, "px");
    } 
    catch (e) {
        console.error("DEU UM ERRO NO FUNÇAO >> mostrarTamanhoHeader << LOCALIZADO NA MostrarTamanho.js" + e.message);
    }
}

export{mostrarTamanhoHeader};