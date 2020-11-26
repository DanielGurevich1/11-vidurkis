import { skaiciai } from "./components/data.js";
import { skaiciai2 } from "./components/data2.js";

import { vidurkis } from "./components/vidurkis.js";

const ats = vidurkis(skaiciai);
const ats2 = vidurkis(skaiciai2);


console.log(`Is pateiktu ${skaiciai.length} skaiciu, vidurkis gaunasi ${ats}.`);
console.log(`Is pateiktu ${skaiciai2.length} skaiciu, vidurkis gaunasi ${ats2}.`);
