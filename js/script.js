
//esto es un comentario y estamos probando la consola del navegador

/*este es un comentario
multilinea
luego de terminar con las pruebas vamos a comentar todo este codigo, par aque no afecte
a la calculadora WEB*/

console.log("hola mundo");
console.log(2+2);
console.log("este es el resultado de la suma: ",(2+5) );

// variables

var num1 = 17;
var num2 = 25;
const iva = 21;

var resultado = (((num1*3)+num2)*((iva/100)+1));

console.log(resultado)

document.write("tenemos 2 numeros: ",num1, " y ", num2, " tambien una constante IVA = ", iva, "% " );
document.write("si multiplicamos el primer numero x 3 y le sumanos el segundo, a ese resultado le calculamos el iva, el cual se lo sumamos! obtenemos = " + resultado)

//el signo + tambien se lo utiliza para concatenar 

console.log("vamos a concatenar el numero 2 " + num2 + "tambien le concatenamos el valor de iva " + iva);

//var nombre = prompt("Ingrese su nombre", "")
//document.write("Te Gorrian " + nombre)

console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1+num2);

var suma = num1 + num2;

console.log(suma);

var nota = 9;
console.log("Nota = " + nota);

if (nota >= 7){
    console.log("El Alumno esta APROBADO");
}

//--------------------------------------

var nota = 5;
console.log("Nota = " + nota);

if (nota >= 7){
    console.log("El Alumno esta APROBADO");
}
else {
    console.log("El Alumno esta DESAPROBADO");
}
//---------------------------------------

var nota = 1;
console.log("El resultado del examen es: ");
switch(nota){
    case 10:
    calificacion="aprobado con la maxima nota";
    break
    case 9:
    case 8:
    calificacion="aprobo bien";
    break
    case 7:
    case 6:
    case 5:
    calificacion="pasaste arañando";
    break
    case 4:
    case 3:
    case 2:
    case 1:
    calificacion="siga la flecha y vualva a estudiar";
    break
    default:
    calificacion="esto no es una nota"
    break
}
console.log("Usted: " + calificacion);
//---------------------------------------------------
/*
var altura=0;
var edad=0;
altura=parseFloat(prompt("ingrese la altura: "));
edad=parseInt(prompt("ingrese su edad: "));
    if(altura > 1.5 && edad > 15){
        console.log("cumple con los parametros");
    }
    else{
        console.log("no puede ingresar, a casa papi");
    }*/
//-----------------------------------------------

var valor=0;
while(valor<10){
    console.log("Se repite del 0 hasta el 9, mira =", valor);
    valor++;
}
//-----------------------------------------------

for(var i=1; i<=15; i++){
    console.log("imprimimos i = ", i);
}
//------------------------------------------------

