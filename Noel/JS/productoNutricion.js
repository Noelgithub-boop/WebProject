/*document.addEventListener espera a que el DOM del documento se haya cargado por completo para luego ejecutar el codigo */
document.addEventListener('DOMContentLoaded', () => {

    /*Ahora obtenemos las referencias del docuemnto (gracias a las ID y el query Selector ) */
    const form = document.getElementById('formComentario');
    const nombreInput = document.getElementById('nombre');
    const mensajeInput = document.getElementById('mensaje');
    const comentarioSection = document.querySelector('.comentarios');

    /*En este fragmento añado el 'addEventListener', al clickar el boton de enviar , se ejecuta el codigo, que previene el comportamiento por defecto de la pagina
    que es recargarse al clickar submit */
    form.addEventListener('submit', (event) => {
        event.preventDefault();


        /*Adquiero el valor del nombre, y lo paso por la funcion trim() la cual elimina cualquier espacio en blanco
        (lo mismo para el valor del mensaje) */
        const nombre = nombreInput.value.trim();
        const mensaje = mensajeInput.value.trim();


        /*Un if myu simple ,para comprobar que ni el nombre ni el mensaje esten vacios
        (validacion) */
        if (nombre === '' || mensaje === '') {
            alert('Se deben completar ambos campos')
            return;
        }
        // creacion del nuevo elemento, el nuevo elemento sera un div , como sus hermanos y tendra la clase 'comment' (para que se le aplique el css)
        const nuevoComment = document.createElement('div');
        nuevoComment.classList.add('comment')
        //creacion del elemento h3( que representa el nombre)
        const nombreElemento = document.createElement('h3');
        nombreElemento.textContent = nombre;
        //Creacion del 'cuerpo del mensaje' 
        const mensajeElemento = document.createElement('p');
        mensajeElemento.textContent = mensaje;

        //Ahora procedo a mediante la funcion appedChild añadir al nuevo comentario su correspondiente 'h3' (nombreElemento) y su 'p'(mensaje)
        nuevoComment.appendChild(nombreElemento);
        nuevoComment.appendChild(mensajeElemento);

        //Y con el mismo procedimiento añado el nuevo comentario a la seccion de comentarios con .appendChild
        comentarioSection.appendChild(nuevoComment);


    });
});