import { Traductor } from "./1.Tradutor.js";

let ListaGlobalPokemons = [];

async function CarregarPokemons() {
    try {
        const Conectar = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1025`);
        if(!Conectar.ok)
            throw new Error(`Deu Erro Em Conectar O Api CarregarPokemons`);
        const datos = await Conectar.json();
        let pokemons = [];
        datos.results.forEach(pokemon => {
            const Lista = { nome: pokemon.name };
            pokemons.push(Lista);
        });
        return pokemons;
    } catch (error) {
        console.error("Não foi possível conectar à API CarregarPokemons:", error.message);
    }
}

async function ListaPokemons(Pokemon){
    try {
        const Pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`);
        const Especie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${Pokemon}`);
        
        if(!Pokemons.ok || !Especie.ok){
            throw new Error(`Deu Erro Em Conectar O Api`);
        }
        
        const Pokemons_Info = await Pokemons.json();
        const Especie_Info = await Especie.json();

        const Encontros_Resposta = await fetch(Pokemons_Info.location_area_encounters);
        let localizacaoFinal = "Localização Desconhecida";
        if (Encontros_Resposta.ok) {
            const Dados_Encontros = await Encontros_Resposta.json();
            if (Dados_Encontros.length > 0) {
                localizacaoFinal = Dados_Encontros[0].location_area.name.replace(/-/g, ' ');
            }
        }

        const urlEvolucao = Especie_Info.evolution_chain.url;
        const Evolucao = await fetch(urlEvolucao);
        if(!Evolucao.ok) throw new Error(`Erro ao buscar linha de evolução`);
        const Evolucao_Info = await Evolucao.json();

        const tipo1 = Pokemons_Info.types[0].type.name;
        const tipo2 = Pokemons_Info.types[1] ? Pokemons_Info.types[1].type.name : "";

        let fraquezasBrutas = [];
        let resistenciasEImunidades = [];

        const resTipo1 = await fetch(`https://pokeapi.co/api/v2/type/${tipo1}`);
        if (resTipo1.ok) {
            const dadosT1 = await resTipo1.json();
            fraquezasBrutas.push(...dadosT1.damage_relations.double_damage_from.map(f => f.name));
            resistenciasEImunidades.push(...dadosT1.damage_relations.half_damage_from.map(r => r.name));
            resistenciasEImunidades.push(...dadosT1.damage_relations.no_damage_from.map(i => i.name));
        }

        if (tipo2) {
            const resTipo2 = await fetch(`https://pokeapi.co/api/v2/type/${tipo2}`);
            if (resTipo2.ok) {
                const dadosT2 = await resTipo2.json();
                fraquezasBrutas.push(...dadosT2.damage_relations.double_damage_from.map(f => f.name));
                resistenciasEImunidades.push(...dadosT2.damage_relations.half_damage_from.map(r => r.name));
                resistenciasEImunidades.push(...dadosT2.damage_relations.no_damage_from.map(i => i.name));
            }
        }

        const fraquezasReais = fraquezasBrutas.filter(elemento => !resistenciasEImunidades.includes(elemento));
        const fraquezasUnicas = [...new Set(fraquezasReais)];

        const habPrincipal = Pokemons_Info.abilities.find(h => !h.is_hidden)?.ability.name || "Nenhuma";
        const habOculta = Pokemons_Info.abilities.find(h => h.is_hidden)?.ability.name || "Nenhuma";

        const Traducido = Traductor(tipo1, tipo2)

        let ListaPokemon = {
            id: Pokemons_Info.id,
            nome: Pokemons_Info.name,
            gen: Especie_Info.generation.name,
            tipo: [tipo1, tipo2],
            tamanho: Pokemons_Info.height / 10 + " m",
            peso: Pokemons_Info.weight / 10 + " kg",
            localizacao: localizacaoFinal.toUpperCase(), 
            hab_principal: habPrincipal,
            hab_oculta: habOculta,
            imagem: Pokemons_Info.sprites.front_default, 
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/`,
            card: `./CSS/Card_Pokemons/${Traducido}.png`, 
            icone: "./CSS/Imagems_Extras/Favorito_0.png",
            min_lvl_Evolucao: Evolucao_Info.chain.evolves_to[0]?.evolution_details[0]?.min_level || "N/A",
            evolucoes: Evolucao_Info.chain.evolves_to[0]?.species.name || "Nenhuma",
            fraqueza: fraquezasUnicas 
        };

        console.log(`Conectou Com Sucesso e calculou as fraquezas de ${ListaPokemon.nome}!`);
        return ListaPokemon;
    }
    catch(erro){
        console.error("Não foi possível conectar à API ListaPokemons:", erro.message);
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    const TodosNomes = await CarregarPokemons();

    if (!TodosNomes || TodosNomes.length === 0) {
        console.error("Erro: A lista de nomes de Pokémons veio vazia!");
        return;
    }

    for (let i = 0; i < 20; i++) {
        const itemAtual = TodosNomes[i];
        
        // CORREÇÃO: Garante que estamos pegando a propriedade de texto 'nome'
        const nomeCerto = itemAtual ? (itemAtual.nome || itemAtual.name) : null;

        if (nomeCerto) {
            // CORREÇÃO: Agora passa a STRING "bulbasaur" e não o objeto {}
            let pokemonDetalhado = await ListaPokemons(nomeCerto); 
            
            if (pokemonDetalhado) {
                ListaGlobalPokemons.push(pokemonDetalhado);
            }
        } else {
            console.warn(`Item na posição ${i} está com estrutura inválida:`, itemAtual);
        }
    }
});

export{ListaPokemons, CarregarPokemons, ListaGlobalPokemons}