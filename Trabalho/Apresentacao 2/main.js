import pokemons from "./pokemons.js";

const container = document.getElementById("container");
const input = document.getElementById("busca");
const filtroTipo = document.getElementById("tipo");

// mostrar pokémons
function mostrar(lista) {
    container.innerHTML = "";

    lista.forEach(pokemon => {
        container.innerHTML += `
            <div class="card" onclick="verDetalhes('${pokemon.nome}')">
                <h2>${pokemon.nome}</h2>
                <img src="${pokemon.imagem}" width="120">
                <p>${pokemon.tipo.join(", ")}</p>
            </div>
        `;
    });
}

// filtro por nome + tipo
function filtrar() {
    const texto = input.value.toLowerCase();
    const tipo = filtroTipo.value;

    const filtrados = pokemons.filter(p => {
        const matchNome = p.nome.toLowerCase().includes(texto);
        const matchTipo = tipo === "" || p.tipo.includes(tipo);
        return matchNome && matchTipo;
    });

    mostrar(filtrados);
}

// detalhes do pokemon
window.verDetalhes = (nome) => {
    const pokemon = pokemons.find(p => p.nome === nome);

    alert(
        `Nome: ${pokemon.nome}\nTipo: ${pokemon.tipo.join(", ")}\nEvoluções: ${pokemon.evolucoes.join(" → ")}\nFraquezas: ${pokemon.fraqueza.join(", ")}`
    );
};

// eventos
input.addEventListener("input", filtrar);
filtroTipo.addEventListener("change", filtrar);

// inicial
mostrar(pokemons);


