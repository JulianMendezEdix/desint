let cajaTexto;
let error;
let botonSaludar;
let patronNombre = /^\D+$/;

document.addEventListener("DOMContentLoaded",init);
//window.addEventListener("load",init);

function initVars(){

    cajaTexto = document.getElementById("cajaTexto");
    validation = document.getElementById("validation");
    botonSaludar = document.getElementById("botonSaludar");


}

function initEvents(){

    botonSaludar.addEventListener("click",saludar)

}

function saludar(){

    if (cajaTexto.value=="")
        validation.textContent = "no puede estar vacio my friend";
    else if (patronNombre.test(cajaTexto.value))
        document.write("<h2>Validado. Gracias " + cajaTexto.value + "</h2>");
    else
        validation.textContent = "Pon un nombre correto zángano";

        
}

function init() {
    initVars();
    initEvents();
}

