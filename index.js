function ejercicio1() {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }

}

function ejercicio2() {
    let valores = [true, 5, false, "hola", "adios",2];
    
if(valores[3].length < valores[4].length){
    console.log(valores[0])
    console.log("adios es la palabra con mas letras")
 }
else{
    console.log(valores[2])
    console.log("hola es la palabra con menos letras")
 }
console.log(valores[1]  +   valores[5])
console.log(valores[1]  -   valores[5])
console.log(valores[1]  *   valores[5])
console.log(valores[1]  /   valores[5])
}


function ejercicio3(){

    var numero1 = 5;
    var numero2 = 8;

    if(numero1<numero2) {
console.log("numero1 no es mayor que numero2");
 }

if(numero2>0) {
console.log("numero2 es positivo");
 }

if(numero1<0) {
console.log("numero1 es negativo o distinto de cero");
 }

if(numero1 +1 <numero2) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

}

function ejercicio4(){

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
    'E', 'T'];

let dni = document.querySelector("#dni").value;
let letrauser = document



if(dni > 0 && dni < 99999999) {
let nletra = dni % 23;

let letra = letras[nletra];

if(letra == letrauser){
    console.log("Las letras son iguales")


    console.log("La letra de tu DNI es:  "+ letra);

 }
 else{
    console.log("Es incorrecto")
 }
}
}