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

async function LocalCidade(cidade) {
    try {
        const CidadeString = await fetch(`https://wttr.in/${cidade}?format=j1`)
        const Cidade = await CidadeString.json();
        return Cidade;
    } 
    catch (error) {
        console.error("Não foi possível conectar à API:", error.message);
    }
}

function obterHoraAtual() {
    const agora = new Date();
    return agora.toLocaleTimeString('pt-BR'); 
}

const input = document.getElementById('cep')
const botao = document.getElementById('buscar')
const Resposta = document.getElementById('resultado')
const Area_Historico = document.getElementById('historico')
let Historico = ["", "", ""];
let contador = 0;
let parar = 0;
botao.addEventListener("click", async () => {
    const CEP = input.value;
    const API = await ConectarApi(CEP);
    const Cidade = await LocalCidade(API.localidade);
    Historico[contador] = document.createElement('div');
    Resposta.innerHTML = ``
    Resposta.innerHTML = `
        <p>Logradouro: ${API.logradouro}</p>
        <p>Bairro: ${API.bairro}</p>
        <p>Cidade: ${API.localidade}</p>
        <p>Estado: ${API.uf}</p>
        <p>Temperatura Atual: ${Cidade.current_condition[0].temp_C}</p>
        <p>Condicao Climatica: ${Cidade.current_condition[0].lang_xx[0].value}</p>
        <p>Horario De Consulta: ${obterHoraAtual()}</p>
    `
    Historico[contador].innerHTML = Resposta.innerHTML;
    
    if(contador > 2) contador = 0
    if(parar < 3){
        Area_Historico.appendChild(Historico[contador]);
        parar++
        contador++;
    }
    else{
        Historico[contador].innerHTML = Resposta.innerHTML;
        contador++;
        console.log()
    }
})