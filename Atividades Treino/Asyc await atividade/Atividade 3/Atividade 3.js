async function ConectarApi(CEP){
    try{
        const Conectar = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
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
    const CEP = input.value;
    const API = await ConectarApi(CEP);
    Resposta.innerHTML = ``
    Resposta.innerHTML = `
        <p>Logradouro: ${API.logradouro}</p>
        <p>Bairro: ${API.bairro}</p>
        <p>Cidade: ${API.localidade}</p>
        <p>Estado: ${API.uf}</p>
    `
})