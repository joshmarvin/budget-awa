//const nom = 'Awa'; // Type : string
//const budget = 50000; // Type : number ; unité : FCFA
//const transportTexte = '12500'; // Type : string ; unité : FCFA
//const alimentationTexte = '18300'; // Type : string ; unité : FCFA
//const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
// TODO : calculez le total, le budget restant et budgetRespected.
// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
//console.log(`Rapport de dépenses à compléter pour ${nom}.`);



// ===== Données d'Awa =====
const nom = 'Awa'; // string
const budget = 50000; // number, FCFA

// Saisies textuelles
const transportTexte = '12500'; // string, FCFA
const alimentationTexte = '18300'; // string, FCFA
const loisirsTexte = '7500'; // string, FCFA

// Conversions avec Number
const transport = Number(transportTexte); // number, FCFA
const alimentation = Number(alimentationTexte); // number, FCFA
const loisirs = Number(loisirsTexte); // number, FCFA

// Calculs
const totalDepenses = transport + alimentation + loisirs; // number, FCFA
const budgetRestant = budget - totalDepenses; // number, FCFA
const budgetRespected = budgetRestant >= 0; // boolean

// ===== Rapport =====
console.log(`Bilan du budget quotidien de ${nom}`);
console.log(`Budget : ${budget} FCFA`);
console.log(`Transport : ${transport} FCFA`);
console.log(`Alimentation : ${alimentation} FCFA`);
console.log(`Loisirs : ${loisirs} FCFA`);
console.log(`Total des dépenses : ${totalDepenses} FCFA`);
console.log(`Reste : ${budgetRestant} FCFA`);
console.log(`Budget respecté : ${budgetRespected}`);