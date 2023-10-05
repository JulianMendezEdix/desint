// declaracion de variables
let password;
let botonAceptar;
let i;

// inicializamos el programa y las variables

document.addEventListener("DOMContentLoaded", ()=>{
    password = document.getElementById("passwordInput");
    password.focus();
    botonAceptar = document.getElementById("button");
    password.addEventListener("input", ()=>{     
        if (password.value.length>=6 && password.value.length<=12) 
            botonAceptar.disabled = false;
        else
            botonAceptar.disabled = true;
    });

});



