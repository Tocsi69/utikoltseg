const benzinarr = ["1000 cm3-ig 7,6 l/100km", "1001-1500 cm3 között 8,6 l/100km", "1501-2000 cm3 között 9,5 l/100km", "2001-3000 cm3 között 11,4 l/100km", "3001 cm3 fölött 13,3 l/100km"];
const benzinar = ["7.6", "8.6", "9.5", "11.4", "13.3"];
const gazolajarr = ["1500 cm3-ig 5,7 l/100km", "1501-2000 cm3 között 6,7 l/100km", "2001-3000 cm3 között 7,6 l/100km", "3001 cm3 fölött 9,5 l/100km"];
const gazolajar = ["5.7", "6.7", "7.6", "9.5"];

function dizel(){
    for (let i = 0; i < gazolajarr.length; i++){
        document.getElementById("b" + i).innerText = gazolajarr[i];
        document.getElementById("b" + i).value = gazolajar[i];
    }
    document.getElementById("uzemanyagar").value = 478;
}

function benzin(){
    for (let i = 0; i < benzinarr.length; i++){
        document.getElementById("b" + i).innerText = benzinarr[i];
        document.getElementById("b" + i).value = benzinar[i];
    }
    document.getElementById("uzemanyagar").value = 478;
}

function getuzemanyagtipus() {
    var temp = document.getElementById('uzemanyagtipus');
    var ertek = temp.options[temp.selectedIndex].value;
    console.log(ertek);
    switch(ertek){
        case "Benzin":
            return benzin();
        case "Gazolaj":
            return dizel();
        default:
            console.log("Vááááááááááááááááááááááááá");
    }
  }

function szamitas(){
    var uzemanyagar = document.getElementById("uzemanyagar").value;
    var temp = document.getElementById('norma');
    var norma = temp.options[temp.selectedIndex].value;
    var km = document.getElementById("kmadat").value;
    console.log(uzemanyagar + " " + norma + " " + km)
    var utikoltseg = uzemanyagar * norma * km / 100;
    console.log(utikoltseg)
    document.getElementById("osszkoltseg").value = Math.round(utikoltseg);
    var amortizacio = document.getElementById("amortizacio").value = km * 15;
    document.getElementById("elszamolhato").value = Math.round(utikoltseg + amortizacio);
}