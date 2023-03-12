//document.getElementById("b1").addEventListener("click", copia);
/*for (i=0; i<8; i++){
    document.getElementById("d"+i).addEventListener("click", modifica);
}*/

document.getElementById("b3").addEventListener("click", scriviParola);
document.addEventListener("DOMContentLoaded",ready);
document.getElementById("b1").addEventListener("click", somma);
document.getElementById("b2").addEventListener("click", controlla);

function sposta(){
    let sez = document.getElementById("s1");
    sez.appendChild(this);
}

function scriviParola(){
    let parola = document.getElementById("i1").value;
    let sez = document.getElementById("s1")
    for (i=0; i< parola.length; i++){
        let elemento = document.createElement("div");
        elemento.textContent= parola.charAt(i);
        elemento.addEventListener("click", sposta);
        sez.appendChild(elemento);
    }
    let figli =sez.childNodes;
    for (valori of figli){
        console.log(valori.textContent);
    }

   // if e else con for cambio background div
}

function ready(){
    let sez = document.getElementById("s1");
    for (i=0; i<8; i++){
    let elemento = document.createElement("div");
    elemento.id = "d"+i;
    elemento.textContent = "0";
    elemento.addEventListener("click", modifica)
    sez.appendChild(elemento);}
}

function conversione(valore){
    let cifraEs ="";
    switch(valore){
        case 15: cifraEs = "F" ; break;
        case 14: cifraEs = "E" ; break;
        case 13: cifraEs = "D" ; break;
        case 12: cifraEs = "C" ; break;
        case 11: cifraEs = "B" ; break;
        case 10: cifraEs = "A" ; break;
        default: cifraEs = valore;
    }
    
    return cifraEs;
}

function modifica(){
    let cifra = parseInt(this.textContent);
    if (cifra=="0"){
        cifra="1";
    } 
    else {
        cifra = "0";
    }
    this.textContent = cifra;

    let vet =[];

    let i =0;
    for (i=0; i<8; i++){
      let c = document.getElementById("d"+i).textContent;
      vet.push(parseInt(c)); // aggiunge
    }
    console.log(vet);
    let primaCifra = vet[0]*Math.pow(2,3)+vet[1]*Math.pow(2,2)+vet[2]*Math.pow(2,1)+vet[3]*Math.pow(2,0);
    document.getElementById("d8").textContent=primaCifra;

    let cifraEs =conversione(primaCifra);
    
    

    let secondaCifra = vet[4]*Math.pow(2,3)+vet[5]*Math.pow(2,2)+vet[6]*Math.pow(2,1)+vet[7]*Math.pow(2,1);
    document.getElementById("d9").textContent=secondaCifra;

    let cifraEs1 =conversione(secondaCifra);
}

function controlla(){
    let frutta= document.getElementById("i3").value;
    const fruitsInclude = fruits.includes(frutta);
    if (fruitsInclude==true){
        document.getElementById("d2").textContent="presente";}
        else {
        document.getElementById("d2").textContent="assente";
        }
}

document.addEventListener("DOMContentLoaded", ready);
function somma(){
    let numero1 = parseInt (document.getElementById("i1").value);
    let numero2 = parseInt (document.getElementById("i2").value);
    let somma = numero1+ numero2;
    document.getElementById("d2").textContent="somma= "+somma;

}
function copia(){
    let testo= document.getElementById("i1").value;
    document.getElementById("d2").textContent=testo;
}
function ready(){
    console.log("Ciao sono Elena");
}

let n = 10; // let : variabile globale
if (n<20){
    var z=4; // variabile locale
    z++;
    n+=5;
    console.log(z);
}
console.log (z,n);
// invertire variabili
let a=10;
let b=20;
[a,b]=[b,a];
console.log(a,b);

//visualizzazione lettere che compongono la lettera
let parola = "tavolo";

for (i=0; i< parola.length; i++){
    console.log(parola.charAt(i),i);
}

//arrey

let arr=[2,3,4,5,6];

for (let i =0; i<arr.length;i++){
console.log(arr[i]);
}

//aggiunge
let arr2=[2,3,4,5,6];

for (let i =0; i<5;i++){
arr2.push(i);
}

//iteratore
for (valore of arr2){
    console.log("--"+ valore)
}

//funzione implementazione

function by(){
    console.log("HI")
}
by();// richiamare funzione

// funzione con assegnamento variabile
let by1 = ()=>{
    console.log("Hello")
}
by1();

//
let arr22 =[5,10,3,15]
arr22.forEach((valore, indice)=>{
console.log(indice+ " - " +valore);
})

//index of
var fruits = ["Apple", "Mango", "Orange", "Banana"];

document.getElementById("d2").textContent=fruits;

const indexFound = fruits.indexOf('Mango');
console.log(indexFound);
const indexNotFound = fruits.indexOf('Pinapple');
console.log(indexNotFound);

//include
fruits = ["Apple", "Mango", "Orange", "Banana"];
const fruitsInclude = fruits.includes('Mango');
console.log(fruitsInclude);

//split si applica alle stringhe : separa 
                          //join : unisce
let parola1= "computer"
let lettere= []
lettere=parola.split("")
let parola3 = lettere.join("-")

console.log(parola3)
lettere=parola3.split("-");
console.log(lettere);

//esercizio
let nuovaParola = "elettrodomestico"
vocali=["a","e","i","o","u"]
conta = 0;
for (i=0; i< nuovaParola.length; i++){
    if (nuovaParola.includes(vocali[i])) {
        conta++;
    }
} console.log("totali vocali"+conta);