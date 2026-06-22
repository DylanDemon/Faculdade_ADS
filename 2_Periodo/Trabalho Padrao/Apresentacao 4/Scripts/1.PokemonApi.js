import { Traductor, TipoTradutor, TraduzirFraquezas} from "./1.Tradutor.js";
import { AtualPagina } from "./3.PokeLimits.js";
import { PokemonsMostrar } from "./4.PokemonsMostrar.js";

function BancoDeIDS() {
    const Banco = [];
    for(let i = 1; i <= 1025; i++){
        Banco.push(i);
    }
    return Banco;
}

async function ListaPokemons(ID){
        let fraquezasBrutas = [], resistenciasEImunidades = [], localizacaoFinal = "Localização Desconhecida";

        const Pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
        .then(response => {
            if(!response.ok)throw new Error(`Deu Erro Em Conectar O Api Pokemons`);
            return response.json();
        })
        .catch(err => console.error(err))

        const Especie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${ID}`)
        .then(response => {
            if(!response.ok) throw new Error(`Deu Erro Em Conectar O Api Especie`);
            return response.json();
        })
        .catch(err => console.error(err))

        const Encontros = await fetch(Pokemons.location_area_encounters)
        .then(response => {
            if (!response.ok) throw new Error(`Deu Erro Em Conectar O Api Encontros`);
                return response.json();
        })
        .then(dados => {
                if (dados.length && dados.length > 0) {
                    localizacaoFinal = dados[0].location_area.name.replace(/-/g, ' ');
                }
                return localizacaoFinal
        })
        .catch(err => console.error(err))

        const urlEvolucao = Especie.evolution_chain.url;
        const Evolucao = await fetch(urlEvolucao)
        .then(response => {
            if(!response.ok) throw new Error(`Erro ao buscar linha de evolução`);
               return response.json();
        })
        .catch(err => console.error(err))

        const tipo1 = Pokemons.types[0].type.name;
        const tipo2 = Pokemons.types[1] ? Pokemons.types[1].type.name : "";

        const resTipo1 = await fetch(`https://pokeapi.co/api/v2/type/${tipo1}`)
        .then(response => {
            if (!response.ok) throw new Error(`Deu Erro Em Conectar O Api resTipo1`);
                return response.json();
        })
        .then(dadosT1 => {
                fraquezasBrutas.push(...dadosT1.damage_relations.double_damage_from.map(f => f.name));
                resistenciasEImunidades.push(...dadosT1.damage_relations.half_damage_from.map(r => r.name));
                resistenciasEImunidades.push(...dadosT1.damage_relations.no_damage_from.map(i => i.name));
        })
        .catch(err => console.error(err))

        if (tipo2) {
            const resTipo2 = await fetch(`https://pokeapi.co/api/v2/type/${tipo2}`)
            .then(response => {
                if (!response.ok) throw new Error(`Deu Erro Em Conectar O Api resTipo1`);
                    return response.json();
            })
            .then(dadosT2 => {
                if (dadosT2.ok) {
                    fraquezasBrutas.push(...dadosT2.damage_relations.double_damage_from.map(f => f.name));
                    resistenciasEImunidades.push(...dadosT2.damage_relations.half_damage_from.map(r => r.name));
                    resistenciasEImunidades.push(...dadosT2.damage_relations.no_damage_from.map(i => i.name));
                }
            })
            .catch(err => console.error(err))
        }

        const fraquezasReais = fraquezasBrutas.filter(elemento => !resistenciasEImunidades.includes(elemento));
        const fraquezasUnicas = [...new Set(fraquezasReais)];

        const habPrincipal = Pokemons.abilities.find(h => !h.is_hidden)?.ability.name || "Nenhuma";
        const habOculta = Pokemons.abilities.find(h => h.is_hidden)?.ability.name || "Nenhuma";

        const Traducido = Traductor(tipo1, tipo2)
        const tiposTraduzido = [] = TipoTradutor(tipo1,tipo2)
        let ListaPokemon = {
            id: Pokemons.id,
            nome: Pokemons.name,
            gen: Especie.generation.name,
            tipo: tiposTraduzido,
            tamanho: Pokemons.height / 10 + " m",
            peso: Pokemons.weight / 10 + " kg",
            localizacao: localizacaoFinal.toUpperCase(), 
            hab_principal: habPrincipal,
            hab_oculta: habOculta,
            imagem: Pokemons.sprites.front_default, 
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/`,
            card: `./CSS/Card_Pokemons/${Traducido}.png`, 
            icone: "./CSS/Imagems_Extras/Favorito_0.png",
            min_lvl_Evolucao: Evolucao.chain.evolves_to[0]?.evolution_details[0]?.min_level || "N/A",
            evolucoes: Evolucao.chain.evolves_to[0]?.species.name || "Nenhuma",
            fraqueza: TraduzirFraquezas(fraquezasUnicas)
        };

        // console.log(`Conectou Com Sucesso e calculou as fraquezas de ${ListaPokemon.nome}!`);
        return ListaPokemon;
    }
    let BancoTotalPokemons = [];

const atualizarTelaProgresso = (barra, texto, porcentagem) => {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            if (barra) barra.style.width = `${porcentagem}%`;
            if (texto) texto.innerText = `Carregando Pokédex... (${porcentagem}%)`;
            setTimeout(resolve, 0);
        });
    });
};

async function CarregarTodosOsPokemons() {
    try {
        const totalPokemons = 1025; 

        const barra = document.getElementById("Barra_Carregar");
        const texto = document.getElementById("Texto_Carregar");
        const telaCarregamento = document.getElementById("Tela_Carregar");

        let progressoVisual = 0;
        const timerProgresso = setInterval(() => {
            if (progressoVisual < 90) {
                progressoVisual += 1; 
                if (barra) barra.style.width = `${progressoVisual}%`;
                if (texto) texto.innerText = `Carregando Pokédex... (${progressoVisual}%)`;
            }
        }, 30);

        console.log("[API] Baixando Pokémons em background...");
        const ids = Array.from({ length: totalPokemons }, (_, i) => i + 1);
        
        const promessas = ids.map(id => ListaPokemons(id));
        const todosPokemons = await Promise.all(promessas); 

        clearInterval(timerProgresso);
        
        if (barra) barra.style.width = "100%";
        if (texto) texto.innerText = "Carregando Pokédex... (100%)";

        await new Promise(res => setTimeout(res, 300));
        
        if (telaCarregamento) {
            telaCarregamento.style.opacity = "0";
            setTimeout(() => {
                telaCarregamento.style.display = "none";
            }, 500);
        }

        console.log("[API] Todos os Pokémons carregados!");
        return todosPokemons;

    } catch (error) {
        console.error("Erro crítico ao carregar a lista de Pokémons:", error);
    }
}

function IDSAtuais(PaginaAlvo = 1) {
    if (!PaginaAlvo) PaginaAlvo = 1;

    const todosPokemons = window.ListaFiltradaAtiva || window.ListaGlobalPokemons || [];

    const inicio = (PaginaAlvo - 1) * 20;
    const fim = inicio + 20;
    console.log(`[API] Buscando do Pokémon número ${inicio} até o ${fim} para a página ${PaginaAlvo}`);

    return todosPokemons.slice(inicio,fim)
}
export{ListaPokemons, BancoDeIDS, IDSAtuais, CarregarTodosOsPokemons}