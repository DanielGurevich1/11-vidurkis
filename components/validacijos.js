function arTikrasSarasas(sarasas) {
    if (!Array.isArray(sarasas)) {
        console.error('ERROR: duotas ne array.'); 
        return false;
    }
    if (sarasas.length === 0) {
        console.error('ERROR: duotas array yra tuscias.'); 
        return false;
    }
    return true;
}

function arNormalusSkaicius(skaicius, tikrinamoObjektoPavadinimas) {
    if (typeof tikrinamoObjektoPavadinimas !== 'string') {
        console.warn('Warning: skaiciaus tipo tikrinimo objekto pavadinimas');
        tikrinamoObjektoPavadinimas = 'reksme/objektas';
    }
    if (typeof skaicius !== 'number') {
        console.error(`ERROR: ${tikrinamoObjektoPavadinimas} nera skaicius.`);
            return false;
    }
    if (!isFinite(skaicius)) {
        console.error(`ERROR: ${tikrinamoObjektoPavadinimas} nera tikras skaicius.`);
            return false;
    }
    return true;
}

export { arTikrasSarasas, arNormalusSkaicius }