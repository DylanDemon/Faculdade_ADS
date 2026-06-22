function Traductor(t1, t2){
    const traduzirTipo = (t) => {
        if (!t) return ""; 

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
            "rock": "Rocha",
            "psychic": "Psiquico",
            "dark": "Sombrio",
            "fairy": "Fada",
            "normal": "Normal"
        };
        
        return dicionario[t.toLowerCase()] || (t.charAt(0).toUpperCase() + t.slice(1));
    }

    const t1_pt = traduzirTipo(t1);
    const t2_pt = traduzirTipo(t2);

    let nomeFundo = `Pokemon ${t1_pt}`;
    
    if (t2_pt) {
        nomeFundo += `_${t2_pt}`;
    }
    
    return nomeFundo;
}
function TipoTradutor(t1, t2){
    const traduzirTipo = (t) => {
        if (!t) return ""; 

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
            "rock": "Rocha",
            "psychic": "Psiquico",
            "dark": "Sombrio",
            "fairy": "Fada",
            "normal": "Normal"
        };
        
        return dicionario[t.toLowerCase()] || (t.charAt(0).toUpperCase() + t.slice(1));
    }

    const t1_pt = traduzirTipo(t1);
    const t2_pt = traduzirTipo(t2);

    return [t1_pt, t2_pt].filter(Boolean);
}

function TraduzirFraquezas(fraquezasDado) {
    if (!fraquezasDado) return "Nenhuma";

    const dicionario = {
        "fire": "Fogo",
        "water": "Água",
        "grass": "Planta",
        "poison": "Veneno",
        "flying": "Voador",
        "electric": "Elétrico",
        "fighting": "Lutador",
        "ice": "Gelo",
        "bug": "Inseto",
        "ghost": "Fantasma",
        "dragon": "Dragão",
        "steel": "Aço",
        "ground": "Terra",
        "rock": "Rocha",
        "psychic": "Psíquico",
        "dark": "Sombrio",
        "fairy": "Fada",
        "normal": "Normal"
    };

    let listaIngles = [];

    if (Array.isArray(fraquezasDado)) {
        listaIngles = fraquezasDado.filter(Boolean);
    } else if (typeof fraquezasDado === 'string') {
        listaIngles = fraquezasDado.split(/[\s,]+/).filter(Boolean);
    } else {
        listaIngles = [String(fraquezasDado)];
    }

    const listaPT = listaIngles.map(f => {
        const termoLimpo = f.toLowerCase().trim();
        return dicionario[termoLimpo] || f;
    });

    return listaPT.join(", ");
}

export { Traductor, TipoTradutor, TraduzirFraquezas};