async function ConectarApi(Pokemon){
    try{
        const Conectar = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`);
        if(!Conectar.ok){
            throw new Error(`Deu Erro Em Conectar O Api`)
        }
        const API = await Conectar.json();
        console.log('Conectou Com Sucesso')
        return API;
    }
    catch(erro){
        console.error("Não foi possível conectar à API:", erro.message);
    }
}

const input = document.getElementById('cep')
const botao = document.getElementById('buscar')
const Resposta = document.getElementById('resultado')

botao.addEventListener("click", async () => {
    const Pokemon = input.value;
    const API = await ConectarApi(Pokemon);
    Resposta.innerHTML = ``
    Resposta.innerHTML = `
        <p>Nome: ${API.name}</p>
        <p>Altura: ${API.height/10}m</p>
        <p>Peso: ${API.weight/10}KG</p>
        <img src="${API.sprites.versions['generation-v']['black-white'].animated.front_default}" alt="${Pokemon}">
    `
})