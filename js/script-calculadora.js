var pantalla = document.querySelector(".pantalla");
var botones = document.querySelectorAll(".boton"); //querySelectorAll Sirve para crear un Array con los botones
var num1 = '';
var bandera = false;

botones.forEach(btn => {
    btn.addEventListener("click", () =>{
        let apretarboton = btn.textContent;

        switch (apretarboton) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':

                if((pantalla.textContent!='0') && (pantalla.textContent.length<=9) && (!bandera)){
                    pantalla.textContent += apretarboton;
                }
                else if(pantalla.textContent == '0' && (!bandera)) {
                    pantalla.textContent = apretarboton;
                }
                else if (bandera){
                    pantalla.textContent = apretarboton;
                    bandera = false;
                }

                break;

            case '.':
                if (!pantalla.textContent.includes('.')) {
                    pantalla.textContent += '.';
                }
                break;

            case '⇐':
                if(pantalla.textContent.length>1){
                pantalla.textContent=pantalla.textContent.substring(0,(pantalla.textContent.length -1));
                }
                else {
                    pantalla.textContent = '0';
                }
                break;

            case 'c':
                pantalla.textContent=0;
                num1 = '';
                break;

            case '/':

            case '*':

            case '-':

            case '+':
                num1 += pantalla.textContent + apretarboton;
                pantalla.textContent = 0;
                break;

                case '=':
                    num1 += pantalla.textContent;
                    let resultado = eval(num1); // Obtener el resultado
                    if (resultado.toString().length > 10) {
                        resultado = resultado.toExponential(5); // Convertir a notación científica con 5 dígitos decimales
                    } else {
                        resultado = resultado.toString(); // Convertir a cadena si no excede los 10 caracteres
                    }
                    console.log(resultado); // Mostrar el resultado en la consola
                    pantalla.textContent = resultado; // Mostrar el resultado en la pantalla
                    num1 = '';
                    bandera = true;
                    break;
        }
        
    })
});


//-----------------------------------------
/*

function calcular(arrayNum1) {
    var numero1 = 0;
    let indicador = 0;
    for (let i=0; i < arrayNum1.length; i++){
        if (arrayNum1.charAt(i) == '+'|| arrayNum1.charAt(i) == '-'||arrayNum1.charAt(i) == '/'||arrayNum1.charAt(i) == '*'){
            numero1 += Number (arrayNum1.substring(indicador, i));
            indicador = i+1;
        }
    }
    return numero1;
}

--------------------------------------------

function operaciones (arrayNum1){
        let num1 = 0, indicador = 0, resultado;
    for (let i=0; i > arrayNum1.length; i++){
        if (arrayNum1.charAt(i) == '+'|| arrayNum1.charAt(i) == '-'||arrayNum1.charAt(i) == '/'||arrayNum1.charAt(i) == '*'){
            num1 += Number (arrayNum1.substring(indicador, i));
            indicador = i++;
        }
    }
    return num1;
}
*/