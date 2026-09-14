async function Pokemons(poke){
    let localizacaoFinal = "Localização Desconhecida";

    const Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then(response => {
        if(!response.ok) throw new Error("Pókemon Não Encontrado");
        response.json()
    })
    .then(dados => {console.log(`Carregou O Api Pokemon`)})
    
    const Especie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${poke}`)
    .then(response => {
        if(!response.ok) throw new Error("Especie Não Encontrado");
        response.json()
    })
    .then(dados => {console.log(`Carregou O Api Especie`)})

    const localizacao = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}/encounters`)
    .then(response => {
        if(!response.ok) throw new Error("Localização Não Encontrado");
        response.json()
        if (response.length > 0) {
                localizacaoFinal = Dados_Encontros[0].location_area.name.replace(/-/g, ' ');
            }
    })
    .then(dados => {console.log(`Carregou O Api Especie`)})

    return [Pokemon, Especie, localizacao]
    console.log("Funcao Pokemons Chegou Ao Fim")
}
async function PokeList(poke, lista) {
    const [Pokemon, Especie, localizacao] = await Pokemons(poke);
    
    let ListaPokemon = {
            id: Pokemon.id,
            nome: Pokemon.name,
            gen: Especie.generation.name,
            tipo: [tipo1, tipo2],
            tamanho: Pokemon.height / 10 + " m",
            peso: Pokemon.weight / 10 + " kg",
            localizacao: localizacaoFinal.toUpperCase(), 
            hab_principal: habPrincipal,
            hab_oculta: habOculta,
            imagem: Pokemon.sprites.front_default, 
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/`,
            card: `./CSS/Card_Pokemons/${Traducido}.png`, 
            icone: "./CSS/Imagems_Extras/Favorito_0.png",
            min_lvl_Evolucao: Evolucao_Info.chain.evolves_to[0]?.evolution_details[0]?.min_level || "N/A",
            evolucoes: Evolucao_Info.chain.evolves_to[0]?.species.name || "Nenhuma",
            fraqueza: fraquezasUnicas 
        };
}