// DECLARATION OF VARIABLES

let parrafos;
let articulos;
let lateral;

// INIT VARIABLES



document.addEventListener("DOMContentLoaded", () => {

    parrafos = document.getElementsByTagName("p");
    articulos = document.getElementsByClassName("articulo");
    lateral = document.getElementById("lateral");

    lateral.addEventListener("mouseover", ()=> {
        lateral.classList.remove("sidebar");
        lateral.classList.add("sidebar2");
        
    })

    lateral.addEventListener("mouseout", ()=> {
        lateral.classList.remove("sidebar2");
        lateral.classList.add("sidebar");
        
    })
    
    modificarParrafos();
    modificarArticulos();
    modSidebar();

})

// FUNCTIONS

function modificarParrafos(){
    parrafos[0].textContent="asasd";
    parrafos[1].innerHTML="<h1>asadasd</h1>";
    parrafos[2].style.color="red";
}

function modificarArticulos(){

    articulos[0].style.background="red";

}




