async function PokemonData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');

    const dados = await response.json();
    
    console.log(dados);
}

buscarPokemon();