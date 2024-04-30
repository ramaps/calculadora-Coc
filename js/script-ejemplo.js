var pantalla = document.querySelector(".pantalla");
var botones = document.querySelectorAll(".boton"); //querySelectorAll Sirve para crear un Array con los botones


botones.forEach(btn => {
    btn.addEventListener("click", () =>{
        let apretarboton = btn.textContent;
        console.log(apretarboton);
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
                pantalla.textContent += apretarboton;        
                break;
            case '.':
                pantalla.textContent+='.';
                break;

            case '⇐':
                if(pantalla.textContent.length>1){
                pantalla.textContent=pantalla.textContent.substring(0,(pantalla.textContent.length -1));
                }
                break;
            case 'c':
                pantalla.textContent=0;
                break;
        }
        

    })
});



