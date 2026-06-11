async function PokemonData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');

    const dados = await response.json();
    
    console.log(dados);
    console.log(dados.name);
    console.log(dados.id);
    console.log(dados.types[0].type.name);
    console.log(dados.sprites.front_default);
}

export{PokemonData}