1.
function aguardarMensagem(ms){
    return new Promise((resolve) => {
                setTimeout(() => {
            console.log("Operação concluída!");
        }, ms);
    })
}

async function Iniciar() {
    console.log('Iniciando...');
    const Mensagem = await aguardarMensagem(2000);
    console.log(Mensagem)
}
Iniciar();

2.
async function ConectarApi(){
    try{
        const Conectar = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if(!Conectar.ok){
            throw new Error(`Deu Erro Em Conectar O Api`)
        }
        const usuario = await Conectar.json();
        console.log('Conectou Com Sucesso')
        return usuario;
    }
    catch(erro){
        console.error("Não foi possível conectar à API:", erro.message);
    }
}
async function Mensagem(){
    const usuario = await ConectarApi();
    console.log(`Nome: ${usuario.name}`);
    console.log(`Email: ${usuario.email}`);
    console.log(`Cidade: ${usuario.address.city}`);
    console.log(`Empresa: ${usuario.company.name}`);
}
Mensagem();

3.
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