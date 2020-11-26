import { arTikrasSarasas, arNormalusSkaicius } from "./validacijos.js";

function skaiciuKiekis(skaiciuSarasas) {
    if (!arTikrasSarasas(skaiciuSarasas)) {
        return false;
    }
let kiekis = 0;

for (let i = 0; i < skaiciuSarasas.length; i++) {
 const skaicius = skaiciuSarasas[i];
 if (typeof skaicius !== 'number') {
     continue;
 }
 kiekis++;
}

if (!arNormalusSkaicius(kiekis, `kiekio rezultatas`)) {
    return false;
}

return kiekis;
}
export { skaiciuKiekis }