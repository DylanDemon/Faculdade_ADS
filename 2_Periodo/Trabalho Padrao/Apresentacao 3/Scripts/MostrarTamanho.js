function mostrarTamanhoHeader(){
    try {       
    header = document.querySelector('header');
    const dimensoes = header.getBoundingClientRect();

    console.log("--- DIMENSÕES DO HEADER ---");
    console.log("Largura:", dimensoes.width, "px");
    console.log("Altura:", dimensoes.height, "px");
    } 
    catch (error) {
        console.error("DEU UM ERRO NO FUNÇAO >> mostrarTamanhoHeader << LOCALIZADO NA MostrarTamanho.js" + erro.message);
    }
    const 
}

export{mostrarTamanhoHeader};