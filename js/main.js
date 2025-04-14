// // SNACK 1

// const listaBici = [
//     {
//         nome: "Specialized Tarmac",
//         peso: "10 Kg",
//     },
//     {
//         nome: "Trek Émonda",
//         peso: "9 Kg",
//     },
//     {
//         nome: "Cannondale SuperSix EVO",
//         peso: "8 Kg",
//     }
// ]
// // console.log(listaBici);

// //   Trovare la bici con peso piu basso:
// const filtroPesoMinore = listaBici.reduce(function(min, bici) {
//     const pesoBici = parseFloat(bici.peso);
//     const pesoMin = parseFloat(min.peso);
//      if (pesoBici < pesoMin) {
//         return bici;
//     }
//     else {
//         return min;
//     }
//     });
// console.log(filtroPesoMinore);

// Versione alternativa con for:



// SNACK 2

//
// FUNCTIONS /////////////////////////
//

// Genero Numeri Random:
function numeriRandomDa1A50() {
    const numeroGenerato = Math.floor(Math.random() * 50) + 1;
    return numeroGenerato;
}

////////////////////////////////////////

// array di oggetti

const squadreCalcio = [
    {
        nome: "Juventus",
        puntiFatti: "0",
        falliSubiti: "0",
    },
    {
        nome: "Inter ",
        puntiFatti: "0",
        falliSubiti: "0",
    },
    {
        nome: "AC Milan",
        puntiFatti: "0",
        falliSubiti: "0",
    },
    {
        nome: "AS Roma",
        puntiFatti: "0",
        falliSubiti: "0",
    },
    {
        nome: "Napoli",
        puntiFatti: "0",
        falliSubiti: "0",
    }
]

// console.log(numero);
let numeroRandom = numeriRandomDa1A50();

// Modifico i valori delle chiavi puntiFatti e falliSubiti inserendo un numero random:
squadreCalcio.forEach(function(mod){
    mod.puntiFatti = numeriRandomDa1A50();
    mod.falliSubiti = numeriRandomDa1A50();
})
console.log(squadreCalcio);
