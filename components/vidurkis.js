import { sarasoSuma } from './suma.js'
import { skaiciuKiekis } from './skaiciuKiekis.js'
import { arTikrasSarasas, arNormalusSkaicius } from "./validacijos.js";

function vidurkis (skaiciuSarasas) {
    if (!arTikrasSarasas(skaiciuSarasas)) {
        return false;
    }
    
const suma = sarasoSuma(skaiciuSarasas);
const kiekis = skaiciuKiekis(skaiciuSarasas);
const vid = suma / kiekis;
 


if (!arNormalusSkaicius(vid, 'vidurkio rezultatas')) {
    return false;
}
return vid;
}
export { vidurkis }

