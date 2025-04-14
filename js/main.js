const listaBici = [
    {
        nome: "Specialized Tarmac",
        peso: "10 Kg",
    },
    {
        nome: "Trek Émonda",
        peso: "9 Kg",
    },
    {
        nome: "Cannondale SuperSix EVO",
        peso: "8 Kg",
    }
]
// console.log(listaBici);

//   Trovare la bici con peso piu basso:
const filtroPesoMinore = listaBici.reduce(function(min, bici) {
    const pesoBici = parseFloat(bici.peso);
    const pesoMin = parseFloat(min.peso);
     if (pesoBici < pesoMin) {
        return bici;
    }
    else {
        return min;
    }
    });
console.log(filtroPesoMinore);