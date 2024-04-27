
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