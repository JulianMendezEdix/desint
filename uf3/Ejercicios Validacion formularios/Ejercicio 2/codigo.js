let caja1;
let caja2;
let mensajeError;
let botonAceptar;

document.addEventListener("DOMContentLoaded", ()=> {

    //InicializacionVariables
    caja1 = document.getElementById("passwordInput");
    caja2 = document.getElementById("passwordInput2");
    mensajeError = document.getElementById("error-message");
    botonAceptar = document.getElementById("button");

    //InicializarPagina
    caja1.focus();
    botonAceptar.disabled = true;
    mensajeError.style.display="none";
    mensajeError.style.color="red";

    //Validar cuando sale de la caja 2
    caja2.addEventListener("blur", ()=>{

        if (caja1.value == caja2.value) {
            botonAceptar.disabled = false;
            caja1.style.border = "solid green";
            caja2.style.border = "solid green";
        }

        else      {
            botonAceptar.disabled = true;
            caja1.style.border = "solid red";
            caja2.style.border = "solid red";
            mensajeError.style.display = "inline";
        }

    });
});

