function mostrarTamanhoHeader(){
    const header = document.querySelector('header');
    const dimensoes = header.getBoundingClientRect();

    console.log("--- DIMENSÕES DO HEADER ---");
    console.log("Largura:", dimensoes.width, "px");
    console.log("Altura:", dimensoes.height, "px");
}

export{mostrarTamanhoHeader};