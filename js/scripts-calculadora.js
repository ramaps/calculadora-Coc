var pantalla = document.querySelector(".pantalla");
var botones = document.querySelectorAll(".boton"); //querySelectorAll Sirve para crear un Array con los botones


botones.forEach(btn => {
    btn.addEventListener("click", () =>{
        let apretarboton = btn.textContent;
        pantalla.textContent = apretarboton;
    })
});

