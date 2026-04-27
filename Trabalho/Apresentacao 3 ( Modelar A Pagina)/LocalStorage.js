const pokemon_id = {
    "bulbasaur": 1,
    "yvysaur": 2,
    "venusaur" : 3,
    "charmander" : 4
}
const pokemons = [
    {
        ID: 1,
        nome: "bulbasaur",
        nivel: 1,
        tipo: ["Planta", "Veneno"],
        tamanho: 0.7,
        peso: 6.9,
        sobre: "Possui um bulbo nas costas que armazena energia solar e cresce à medida que o Pokémon evolui. É conhecido por ser dócil e fiel, sendo uma escolha equilibrada para treinadores iniciantes.",
        fraqueza: ["fogo","gelo", "psiquico", "voador"],
        hab_principal: "Overgrow (Espessura)",
        hab_oculta: "Chlorophyll (Clorofila)",
        evolucoes: ["Ivysaur", "Venusaur"],
        imagem: "./Pokemons_Sprites/1_Bulbasaur.gif"
    },
    {
        ID: 2,
        nome: "ivysaur",
        nivel:16,
        tipo: ["Planta", "Veneno"],
        tamanho: 1,
        peso: 13,
        sobre: "Quando o bulbo em suas costas floresce, ele perde a capacidade de ficar em pé nas patas traseiras. Ele emite um aroma doce quando está prestes a desabrochar.",
        fraqueza: ["fogo","gelo", "psiquico", "voador"],
        hab_principal: "Overgrow (Espessura)",
        hab_oculta: "Chlorophyll (Clorofila)",
        evolucoes: ["bulbasaur", "venusaur"],
        imagem: "./Pokemons_Sprites/2_Ivysaur.gif"
    },
    {
        ID: 3,
        nome: "venusaur",
        nivel: 32,
        tipo: ["Planta", "Veneno"],
        tamanho: 2,
        peso: 100,
        sobre: "A flor em suas costas libera um aroma relaxante que acalma as emoções das pessoas e atrai outros Pokémon. Ela se torna mais vívida quando absorve muita energia solar.",
        fraqueza: ["fogo","gelo", "psiquico", "voador"],
        hab_principal: "Overgrow (Espessura)",
        hab_oculta: "Chlorophyll (Clorofila)",
        evolucoes: ["bulbasaur", "ivysaur"],
        imagem: "./Pokemons_Sprites/3_Venusaur.gif"
    },
    {
        ID: 4,
        nome: "charmander",
        nivel: 1,
        tipo: ["Fogo"],
        tamanho: 0.6,
        peso: 8.5,
        sobre: "A chama na ponta de sua cauda indica suas emoções. Se ele estiver alegre, a chama oscila; se estiver furioso, a chama queima intensamente. Se a chama se apagar, ele morre.",
        fraqueza: ["agua", "terra", "rocha"],
        hab_principal: "Blaze",
        hab_oculta: "Solar Power",
        evolucoes: ["charmeleon", "charizard"],
        imagem: "./Pokemons_Sprites/4_Charmander.gif"
    },
    {
        ID: 5,
        nome: "charmeleon",
        nivel: 16,
        tipo: ["Fogo"],
        tamanho: 1.1,
        peso: 19,
        sobre: "Tem uma natureza bárbara e adora lutas. Quando encontra um oponente forte, ele se torna agressivo e a chama na ponta de sua cauda queima com uma cor azul-esbranquiçada.",
        fraqueza: ["agua", "terra", "rocha"],
        hab_principal: "Blaze",
        hab_oculta: "Solar Power",
        evolucoes: ["charmander", "charizard"],
        imagem: "./Pokemons_Sprites/5_Charmeleon.gif"
    },
    {
        ID: 6,
        nome: "charizard",
        nivel: 36,
        tipo: ["fogo", "voador"],
        tamanho: 1.7,
        peso: 90.5,
        sobre: "Ele voa pelo céu em busca de oponentes poderosos. Cospe fogo com um calor tão intenso que é capaz de derreter rochas, mas nunca sopra chamas em um oponente mais fraco que ele.",
        fraqueza: ["eletrico", "agua", "rocha"],
        hab_principal: "Blaze",
        hab_oculta: "Solar Power",
        evolucoes: ["charmander", "charmeleon"],
        imagem: "./Pokemons_Sprites/6_Charizard.gif"
    },
    {
        ID: 7,
        nome: "squirtle",
        nivel: 5,
        tipo: ["Água"],
        tamanho: 0.5, // em metros
        peso: 9.0, // em kg
        sobre: "Após o nascimento, suas costas incham e endurecem formando uma concha. Ele borrifa espuma poderosamente pela boca.",
        fraqueza: ["Planta", "Elétrico"],
        hab_principal: "Torrente",
        hab_oculta: "Cura Pelas Chuvas",
        evolucoes: ["wartortle", "blastoise"],
        imagem: "./Pokemons_Sprites/7_Squirtle.gif"
    },
    {
        ID: 8,
        nome: "wartortle",
        nivel: 16,
        tipo: ["Água"],
        tamanho: 1.0, // em metros
        peso: 22.5, // em kg
        sobre: "É frequentemente mantido como animal de estimação porque sua cauda longa e peluda é um símbolo de longevidade. É um nadador muito habilidoso.",
        fraqueza: ["Planta", "Elétrico"],
        hab_principal: "Torrente",
        hab_oculta: "Cura Pelas Chuvas",
        evolucoes: ["blastoise"],
        imagem: "./Pokemons_Sprites/8_WarTortle.gif"
    },
    {
        ID: 9,
        nome: "blastoise",
        nivel: 36,
        tipo: ["Água"],
        tamanho: 1.6, // em metros
        peso: 85.5, // em kg
        sobre: "Um Pokémon brutal com canhões de água pressurizada em sua concha. Eles são usados para investidas em alta velocidade.",
        fraqueza: ["Planta", "Elétrico"],
        hab_principal: "Torrente",
        hab_oculta: "Cura Pelas Chuvas",
        evolucoes: [], // Estágio final
        imagem: "./Pokemons_Sprites/9_Blastoise.gif"
    },
    {
        ID: 10,
        nome: "caterpie",
        nivel: 3,
        tipo: ["Inseto"],
        tamanho: 0.3, // em metros
        peso: 2.9, // em kg
        sobre: "Para proteção, ele libera um fedor horrível de suas antenas para repelir inimigos. Suas patas têm ventosas que permitem escalar qualquer superfície.",
        fraqueza: ["Fogo", "Voador", "Rocha"],
        hab_principal: "Escudo de Poeira",
        hab_oculta: "Fuga",
        evolucoes: ["metapod", "butterfree"],
        imagem: "./Pokemons_Sprites/10_Caterpie.gif"
    },
    {
        ID: 11,
        nome: "metapod",
        nivel: 7,
        tipo: ["Inseto"],
        tamanho: 0.7, // em metros
        peso: 9.9, // em kg
        sobre: "A casca que cobre o corpo deste Pokémon é dura como uma placa de ferro. Metapod não se move muito. Ele permanece parado porque está preparando suas entranhas suaves para a evolução dentro da casca dura.",
        fraqueza: ["Fogo", "Voador", "Rocha"],
        hab_principal: "Mudar de Cor",
        hab_oculta: "Nenhuma",
        evolucoes: ["butterfree"],
        imagem: "./Pokemons_Sprites/11_Metapod.gif"
    },
    {
        ID: 12,
        nome: "butterfree",
        nivel: 10,
        tipo: ["Inseto", "Voador"],
        tamanho: 1.1, // em metros
        peso: 32.0, // em kg
        sobre: "Em batalha, ele bate suas asas em alta velocidade para liberar poeira altamente tóxica no ar. Pode buscar néctar em flores distantes.",
        fraqueza: ["Fogo", "Voador", "Elétrico", "Gelo", "Rocha (4x)"],
        hab_principal: "Olhos Compostos",
        hab_oculta: "Lente Matizada",
        evolucoes: [], // Estágio final
        imagem: "./Pokemons_Sprites/12_Butterfree.gif"
    },
    {
        ID: 13,
        nome: "weedle",
        nivel: 3,
        tipo: ["Inseto", "Venenoso"],
        tamanho: 0.3, // em metros
        peso: 3.2, // em kg
        sobre: "O ferrão em sua cabeça é muito pontiagudo. Ele se alimenta de folhas escondido em florestas e gramados.",
        fraqueza: ["Fogo", "Voador", "Psíquico", "Rocha"],
        hab_principal: "Escudo de Poeira",
        hab_oculta: "Fuga",
        evolucoes: ["Kakuna", "Beedrill"],
        imagem: "./Pokemons_Sprites/13_Weedle.gif"
    },
    {
        ID: 14,
        nome: "kakuna",
        nivel: 7,
        tipo: ["Inseto", "Venenoso"],
        tamanho: 0.6, // em metros
        peso: 10.0, // em kg
        sobre: "Quase incapaz de se mover sozinho. No entanto, quando ameaçado, ele pode estender seu ferrão e envenenar seu inimigo.",
        fraqueza: ["Fogo", "Voador", "Psíquico", "Rocha"],
        hab_principal: "Mudar de Cor",
        hab_oculta: "",
        evolucoes: ["Beedrill"],
        imagem: "./Pokemons_Sprites/14_Kakuna.gif"
    },
    {
        ID: 15,
        nome: "beedrill",
        nivel: 10,
        tipo: ["Inseto", "Venenoso"],
        tamanho: 1.0, // em metros
        peso: 29.5, // em kg
        sobre: "Tem três ferrões venenosos, dois nas patas dianteiras e um na parte inferior do corpo. Ele voa em alta velocidade para atacar.",
        fraqueza: ["Fogo", "Voador", "Psíquico", "Rocha"],
        hab_principal: "Enxame",
        hab_oculta: "Sniper",
        evolucoes: [], // Estágio final
        imagem: "./Pokemons_Sprites/15_Beedrill.gif"
    },
    {
        ID: 16,
        nome: "pidgey",
        nivel: 5,
        tipo: ["Normal", "Voador"],
        tamanho: 0.3, // em metros
        peso: 1.8, // em kg
        sobre: "Muito dócil. Se for atacado, muitas vezes chuta areia para se proteger em vez de revidar.",
        fraqueza: ["Elétrico", "Gelo", "Rocha"],
        hab_principal: "Olhar Aguçado", // Ou "Pés Ligeiros"
        hab_oculta: "Peito Grande",
        evolucoes: ["Pidgeotto", "Pidgeot"],
        imagem: "./Pokemons_Sprites/16_Pidgey.gif"
    },
    {
        ID: 17,
        nome: "pidgeotto",
        nivel: 18,
        tipo: ["Normal", "Voador"],
        tamanho: 1.1, // em metros
        peso: 30.0, // em kg
        sobre: "Este Pokémon é cheio de vitalidade. Ele voa constantemente por seu grande território em busca de presas.",
        fraqueza: ["Elétrico", "Gelo", "Rocha"],
        hab_principal: "Olhar Aguçado",
        hab_oculta: "Peito Grande",
        evolucoes: ["Pidgeot"],
        imagem: "./Pokemons_Sprites/18_Pidgeotto.gif"
    },
    {
        ID: 18,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
    {
        ID: 19,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
        {
        ID: 20,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
        {
        ID: 21,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
        {
        ID: 22,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
        {
        ID: 23,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
        {
        ID: 24,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
        {
        ID: 25,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
        {
        ID: 26,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
        {
        ID: 27,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
        {
        ID: 28,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
        {
        ID: 29,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
        {
        ID: 30,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    },
        {
        ID: 31,
        nome: "",
        nivel: ,
        tipo: [],
        tamanho: , // em metros
        peso: , // em kg
        sobre: "",
        fraqueza: [""],
        hab_principal: "",
        hab_oculta: "",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/"
    }
]
export default pokemons;