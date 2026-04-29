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
        imagem: "./Pokemons_Sprites/17_Pidgeotto.gif"
    },
    {
        ID: 18,
        nome: "pidgeot",
        nivel: 36,
        tipo: ["Normal", "Voador"],
        tamanho: 1.5,
        peso: 39.5,
        sobre: "Este Pokémon possui uma plumagem deslumbrante. Muitos treinadores são cativados pela beleza das penas em sua cabeça, decidindo utilizá-lo como seu Pokémon principal.",
        fraqueza: ["Elétrico", "Gelo", "Rocha"],
        hab_principal: "Olhar Aguçado",
        hab_oculta: "Peito Desolado",
        imagem: "./Pokemons_Sprites/18_Pidgeot.gif"
    },
    {
        ID: 19,
        nome: "rattata",
        nivel: 1,
        tipo: ["Normal"],
        tamanho: 0.3,
        peso: 3.5,
        sobre: "Vive onde quer que haja comida disponível. Ele passa o dia inteiro procurando por algo para comer. Graças aos seus dentes afiados, pode roer quase qualquer coisa.",
        fraqueza: ["Lutador"],
        hab_principal: "Fuga",
        hab_oculta: "Entusiasmo",
        evolucoes: [20],
        imagem: "./Pokemons_Sprites/19_Rattata.gif"
    },
        {
        ID: 20,
        nome: "raticate",
        nivel: 20,
        tipo: ["Normal"],
        tamanho: 0.7,
        peso: 18.5,
        sobre: "Suas presas crescem constantemente, então ele rói rochas e troncos para desgastá-las. Pode até mesmo roer as paredes de casas.",
        fraqueza: ["Lutador"],
        hab_principal: "Fuga",
        hab_oculta: "Entusiasmo",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/20_Raticate.gif"
    },
        {
        ID: 21,
        nome: "spearow",
        nivel: 1,
        tipo: ["Normal", "Voador"],
        tamanho: 0.3,
        peso: 2.0,
        sobre: "Bate suas asas curtas com muita rapidez para se manter no ar. Ele vasculha a grama em busca de insetos para se alimentar.",
        fraqueza: ["Elétrico", "Gelo", "Rocha"],
        hab_principal: "Olhar Aguçado",
        hab_oculta: "Atirador",
        evolucoes: [22],
        imagem: "./Pokemons_Sprites/21_Spearow.gif"
    },
        {
        ID: 22,
        nome: "fearow",
        nivel: 20,
        tipo: ["Normal", "Voador"],
        tamanho: 1.2,
        peso: 38.0,
        sobre: "Com suas asas grandes e magníficas, ele pode voar o dia inteiro sem precisar descansar. Usa seu bico longo para capturar presas na terra ou na água.",
        fraqueza: ["Elétrico", "Gelo", "Rocha"],
        hab_principal: "Olhar Aguçado",
        hab_oculta: "Atirador",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/22_Fearow.gif"
    },
        {
        ID: 23,
        nome: "ekans",
        nivel: 1,
        tipo: ["Venenoso"],
        tamanho: 2.0,
        peso: 6.9,
        sobre: "Move-se silenciosamente pela grama e ataca suas presas por trás. Quanto mais velho ele fica, mais longo seu corpo se torna.",
        fraqueza: ["Psíquico", "Terra"],
        hab_principal: "Intimidação",
        hab_oculta: "Nervosismo",
        evolucoes: ["arbok"],
        imagem: "./Pokemons_Sprites/23_Ekans.gif"
    },
        {
        ID: 24,
        nome: "arbok",
        nivel: 22,
        tipo: ["Venenoso"],
        tamanho: 3.5,
        peso: 65.0,
        sobre: "A estampa em seu peito serve para intimidar inimigos. Aqueles que encontram seu olhar paralisam de medo antes mesmo de Arbok atacar.",
        fraqueza: ["Psíquico", "Terra"],
        hab_principal: "Intimidação",
        hab_oculta: "Nervosismo",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/24_arbok.gif"
    },
        {
        ID: 25,
        nome: "pikachu",
        nivel: 1,
        tipo: ["Elétrico"],
        tamanho: 0.4,
        peso: 6.0,
        sobre: "Quando vários desses Pokémon se reúnem, sua eletricidade pode causar tempestades de raios. Armazena energia em suas bochechas vermelhas.",
        fraqueza: ["Terra"],
        hab_principal: "Static (Estática)",
        hab_oculta: "Lightning Rod (Para-raios)",
        evolucoes: ["Raichu"],
        imagem: "./Pokemons_Sprites/25_Pikachu.gif"
    },
        {
        ID: 26,
        nome: "raichu",
        nivel: 1,
        tipo: ["Elétrico"],
        tamanho: 0.8,
        peso: 30.0,
        sobre: "Sua cauda longa serve como um fio terra para protegê-lo de sua própria alta voltagem. Se acumular muita eletricidade, ele se torna agressivo.",
        fraqueza: ["Terra"],
        hab_principal: "Static (Estática)",
        hab_oculta: "Lightning Rod (Para-raios)",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/26_Raichu.gif"
    },
        {
        ID: 27,
        nome: "sandshrew",
        nivel: 1,
        tipo: ["Terra"],
        tamanho: 0.6,
        peso: 12.0,
        sobre: "Seu corpo é seco e ele prefere viver em desertos. Ele se enrola em uma bola para se defender de inimigos e para evitar a perda de umidade corporal.",
        fraqueza: ["Água", "Grama", "Gelo"],
        hab_principal: "Sand Veil (Véu de Areia)",
        hab_oculta: "Sand Rush (Ímpeto de Areia)",
        evolucoes: ["sandslash"],
        imagem: "./Pokemons_Sprites/27_Sandshrew.gif"
    },
        {
        ID: 28,
        nome: "sandslash",
        nivel: 22,
        tipo: ["Terra"],
        tamanho: 1.0,
        peso: 29.5,
        sobre: "Seu corpo é coberto por espinhos rígidos que são extensões de sua pele. Ele se enrola para atacar ou se defender, causando sérios danos a quem o toca.",
        fraqueza: ["Água", "Grama", "Gelo"],
        hab_principal: "Sand Veil (Véu de Areia)",
        hab_oculta: "Sand Rush (Ímpeto de Areia)",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/28_Sandslash.gif"
    },
        {
        ID: 29,
        nome: "nidoran",
        nivel: 1,
        tipo: ["Venenoso"],
        tamanho: 0.4,
        peso: 7.0,
        sobre: "Embora seja pequena, seus chifres venenosos a tornam perigosa. Ela é um Pokémon dócil, mas libera uma toxina potente do seu chifre se for ameaçada.",
        fraqueza: ["Psíquico", "Terra"],
        hab_principal: "Poison Point (Ponto Venenoso)",
        hab_oculta: "Hustle (Entusiasmo)",
        evolucoes: ["nidorina"],
        imagem: "./Pokemons_Sprites/29_Nidoran_F.gif"
    },
        {
        ID: 30,
        nome: "nidorina",
        nivel: 16,
        tipo: ["Venenoso"],
        tamanho: 0.8,
        peso: 20.0,
        sobre: "Quando está com seus amigos ou família, ela retrai seus espinhos para não ferir ninguém. Ela se torna nervosa se for separada do grupo.",
        fraqueza: ["Psíquico", "Terra"],
        hab_principal: "Poison Point (Ponto Venenoso)",
        hab_oculta: "Hustle (Entusiasmo)",
        evolucoes: ["nidoqueen"],
        imagem: "./Pokemons_Sprites/30_Nidorina.gif"
    },
        {
        ID: 31,
        nome: "nidoqueen",
        nivel: 1,
        tipo: ["Venenoso", "Terra"],
        tamanho: 1.3,
        peso: 60.0,
        sobre: "Seu corpo é coberto por escamas extremamente rígidas. Ela usa seu corpo robusto para executar movimentos pesados e proteger sua prole com ferocidade.",
        fraqueza: ["Água", "Gelo", "Psíquico", "Terra"],
        hab_principal: "Poison Point (Ponto Venenoso)",
        hab_oculta: "Sheer Force (Força Bruta)",
        evolucoes: [],
        imagem: "./Pokemons_Sprites/31_Nidoqueen.gif"
    }
]
export default pokemons;