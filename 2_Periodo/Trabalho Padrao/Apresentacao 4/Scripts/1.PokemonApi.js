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
async function PokemonsTipos(arrayTipos){
        try{
        const Tipos = arrayTipos.map(tipo => 
            fetch(`https://pokeapi.co/api/v2/type/${tipo}`).then(resposta => {
                if (!resposta.ok) throw new Error(`Tipo ${tipo} não encontrado`);
                return resposta.json();
            })
        );
        const Resultado = await Promise.all(Tipos)
        const listaDePokemon = Resultado.map(dados => dados.pokemon);

        if (listaDePokemon.length === 1) {
            return listaDePokemon[0].map(item => ({
                name: item.pokemon.name,
                id: item.pokemon.id,
            }));
        }
        console.log('Conectou Com Sucesso')
        return API;
    }
    catch(erro){
        console.error("Não foi possível conectar à API:", erro.message);
    }
}
export{ConectarApi}