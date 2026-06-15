function Traductor(t1, t2){
    const traduzirTipo = (t) => {
        const dicionario = {
            "fire": "Fogo",
            "water": "Agua",
            "grass": "Planta",
            "poison": "Veneno",
            "flying": "Voador",
            "electric": "Eletrico",
            "fighting": "Lutador",
            "ice": "Gelo",
            "bug": "Inseto",
            "ghost": "Fantasma",
            "dragon": "Dragao",
            "steel": "Aco",
            "ground": "Terra",
            "rock": "Pedra",
            "psychic": "Psiquico",
            "dark": "Sombrio",
            "fairy": "Fada",
            "normal": "Normal"
        };
    return dicionario[t.toLowerCase()] || (t.charAt(0).toUpperCase() + t.slice(1));
    }
    const t1_pt = traduzirTipo(t1);
    const t2_pt = t2 ? traduzirTipo(t2) : ""

    let nomeFundo = `Pokemon ${t1_pt}`;
        if (t2_pt) {
            nomeFundo += `_${t2_pt}`;
        }
        return nomeFundo;
}


export {Traductor}