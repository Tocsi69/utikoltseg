const benzinarr = ["1000 cm3-ig 7,6 l/100km", "1001-1500 cm3 között 8,6 l/100km", "1501-2000 cm3 között 9,5 l/100km", "2001-3000 cm3 között 11,4 l/100km", "3001 cm3 fölött 13,3 l/100km", "1500 cm3-ig 5,7 l/100km", "1501-2000 cm3 között 6,7 l/100km"];
const gazolajarr = ["1500 cm3-ig 5,7 l/100km", "1501-2000 cm3 között 6,7 l/100km", "2001-3000 cm3 között 7,6 l/100km", "3001 cm3 fölött 9,5 l/100km"];

function dizel(){
    for (let i = 0; i < gazolajarr.length; i++){
        document.getElementById("b" + i).innerText = gazolajarr[i];
    }
}

function benzin(){
    for (let i = 0; i < benzinarr.length; i++){
        document.getElementById("b" + i).innerText = benzinarr[i];
    }
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