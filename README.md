
# Desarrollo de Interfaces - Sept 2023 PER 9318

# CLASSNOTES

## 13/09/23

Introducción. Temario

## 20/09/23

Programación en Javascript. 

- Tipos de datos y variables. Masterclass: https://youtu.be/JVv-oAOL7ng
- Operaciones básicas con datos. Masterclass: https://youtu.be/62f7HCcyFgM
- Conversiones y operadores. Masterclass: https://youtu.be/u6_YzJFG-GQ
- Arrays. Masterclass:  https://youtu.be/bIUzTwx3Uec
- Diccionarios. Masterclass:  https://youtu.be/z3zoTIK1HcM
- IF-ELSE. Masterclass:  https://youtu.be/sbk5cdzGM0k
- SWITCH 
- WHILE . Masterclass: https://youtu.be/0ou6KRJgygo
- FOR. Masterclass:  https://youtu.be/ab3HVuR2cAE
- Funciones. Masterclass:  https://youtu.be/sp9mKeECya8

## 27/09/23

- Hacemos el ejercicio DOM
- Explica las 4 maneras de meter el javascript al cargar la pagina: sin listener, con listener y llamando a a la funcion, con listener y haciendo la funcion dentro del parentesis del listener, con listener y haciendo la funcion dentro del parentesi del listener con funcion lambda o arrow)
- **Acceso a elementos del dom**: por clase, por id, por tagName.
- **Modificar elementos del DOM**: modificamos un div con textContent, que elimina todos los hijos por el texto.
 que pongamos. Otra opción es la propiedad innerHTML, que borra todos los hijos, pero podemos meter HTML.
- Una etiqueta puede tener mas de una clase (se separan por espacios). Tenemos la propiedad classList con la que podemos quitar una clase y poner otra etc. Ejemplo en el ejercicio.  (classList.remove classList.add). Esto es superutil!!!!
- En los apuntes tenemos el setAttribute, verlo.
- Podemos cambiar dentro de un elemento el style: elemento.style.backgroundColor , elemento.style.color (textoC color)
- Habla de eventos OnMouseOver y MouseOut: elemento.addEventListener(mouseover/mouseout, cambiarColor)

## 04/10/23

- Que empecemos a hacer la actividad ya.
- Y que la semana que viene hacemos la actividad del carrito de la compra (da pistas desde el min9 hasta el 12). Que lo haga antes.
- Y que haga los ejercicios resueltos!
- empieza con los dos ejercicio de formularios en el minuto 15.
- EJ1
- Eventos de una caja de texto de un formulario. Cuando estamos dentro de lacaja se produce el evento onfocus, y cuanod salimos se prodeuce el ontrario, el elvento onblur. Cada vez que escibimos se porduce un evento oninput. 
- Recomienda que con el onblur demos un feedback de validacion al usuario.
- En el ejercicio nos interesa el evento oninput.
- Metodo: elemento.disabled=true/false;
- EJ2
- Quiere vallidar que las dos conraseñas coincidad con el evento onblur, cuando el usuario ha salido de la caja, que yaha terminado de escribir. Si no coincide le pondra el tecto en rojo y dira que no coinicden. min40.
- 




