const palabrasAleatorias = [
    "sol", "libro", "café", "nube", "guitarra", "ventana", "camino", "sombra", "fuego", "montaña", "rio",
    "luz", "jardín", "arena", "puente"
];

// Función que asigna una palabra aleatoria al input de "Elemento" y actualiza el botón Push con la palabra.
function Aleatorias(){
    var indice = Math.floor(Math.random() * palabrasAleatorias.length);
    document.getElementById("Elemento").value = palabrasAleatorias[indice];
    document.getElementById("iPush").value = `Push(${palabrasAleatorias[indice]})`;
}

// Función que actualiza el valor del botón Push cuando cambia el texto del input.
function CambioTexto(){
    var texto = document.getElementById("Elemento").value;
    document.getElementById("iPush").value = `Push(${texto})`;
}

// Función para agregar un nuevo elemento a la pila.
function Push(){
    // Verifica que el input no esté vacío o compuesto solo por espacios en blanco.
    if(document.getElementById("Elemento").value.trim() != ""){
        document.getElementById("mensaje").innerHTML = "";

        // Crea un nuevo renglón y celdas para la tabla, donde se mostrará el nuevo elemento de la pila.
        var renglon = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        celda2.style.border = "1px solid black"; // Define el estilo del borde de la celda.
        celda1.textContent = "tope ->"; // Indica que es el tope de la pila.
        celda2.textContent = document.getElementById("Elemento").value; // Añade el valor ingresado a la celda.
        renglon.appendChild(celda1);
        renglon.appendChild(celda2);

        var rt = document.getElementById("tabla");

        // Si la tabla ya tiene elementos, quita la etiqueta "tope ->" del elemento anterior.
        if(rt.hasChildNodes()){
            document.getElementById("tabla").firstChild.firstChild.textContent = "";
        }

        // Inserta el nuevo renglón en la primera posición (tope) de la tabla.
        rt.insertBefore(renglon, rt.children[0]);
    } else {
        // Muestra un mensaje de error si se intenta agregar un valor vacío.
        document.getElementById("mensaje").innerHTML = "No se aceptan cadenas vacías";
    }
}

// Función para eliminar el elemento en el tope de la pila.
function Pop() {
    var rt = document.getElementById("tabla");

    // Verifica si la tabla tiene elementos (si la pila no está vacía).
    if(rt.hasChildNodes()){
        // Muestra un mensaje con el valor del elemento que fue eliminado.
        document.getElementById("mensaje").innerHTML = `Se eliminó del tope: ${rt.firstChild.childNodes[1].textContent}`;
        // Elimina el primer renglón (el tope) de la tabla.
        rt.removeChild(rt.firstChild);

        // Si quedan más elementos, marca el nuevo tope.
        if(rt.hasChildNodes()) {
            rt.firstChild.firstChild.textContent = "tope ->";
        }
    } else {
        // Muestra un mensaje de error si no hay elementos en la pila.
        document.getElementById("mensaje").innerHTML = "No hay elementos para hacer Pop";
    }
}

// Función que muestra el elemento que está en el tope de la pila sin eliminarlo.
function Peek(){
    var rt = document.getElementById("tabla");

    // Verifica si la pila tiene elementos.
    if (rt.hasChildNodes()){
        // Muestra un mensaje con el valor del elemento en el tope.
        document.getElementById("mensaje").innerHTML = `En el tope de la pila se encuentra: ${rt.firstChild.childNodes[1].textContent}`;
    } else{
        // Muestra un mensaje si la pila está vacía.
        document.getElementById("mensaje").innerHTML = "No hay elementos en la pila";
    }
}

// Función que limpia todos los elementos de la pila.
function Clear(){
    var rt = document.getElementById("tabla");

    // Si la pila tiene elementos, los elimina todos uno por uno.
    if(rt.hasChildNodes()){
        while(rt.firstChild){
            rt.removeChild(rt.firstChild);
        }
        // Muestra un mensaje indicando que la pila ha sido limpiada.
        document.getElementById("mensaje").innerHTML = "La pila ha sido limpiada";
    } else {
        // Muestra un mensaje si la pila ya estaba vacía.
        document.getElementById("mensaje").innerHTML = "La pila ya está vacía";
    }
}

// Función para buscar un elemento en la pila y mostrar todas las posiciones donde aparece.
function Find() {
    var rt = document.getElementById("tabla");
    var elemento = document.getElementById("Elemento").value.trim();
    var posiciones = []; // Arreglo para almacenar las posiciones encontradas.

    // Verifica si la pila tiene elementos.
    if (rt.hasChildNodes()) {
        // Recorre todos los elementos de la pila buscando coincidencias.
        for (let i = 0; i < rt.childNodes.length; i++) {
            // Si el texto del elemento coincide con el valor buscado, guarda la posición.
            if (rt.childNodes[i].childNodes[1].textContent === elemento) {
                posiciones.push(i + 1); // Guarda la posición (i+1 porque es humano-indexado).
            }
        }

        // Si se encontraron posiciones, las muestra.
        if (posiciones.length > 0) {
            document.getElementById("mensaje").innerHTML = `Elemento "${elemento}" encontrado en las posiciones: ${posiciones.join(", ")}`;
        } else {
            // Muestra un mensaje si no se encontró el elemento.
            document.getElementById("mensaje").innerHTML = `Elemento "${elemento}" no encontrado en la pila`;
        }
    } else {
        // Muestra un mensaje si la pila está vacía.
        document.getElementById("mensaje").innerHTML = "La pila está vacía";
    }
}

// Función que verifica si la pila está vacía o no.
function IsEmpty(){
    var rt = document.getElementById("tabla");

    // Si la pila tiene elementos, indica que no está vacía.
    if(rt.hasChildNodes()){
        document.getElementById("mensaje").innerHTML = "La pila no está vacía";
    } else {
        // Muestra un mensaje si la pila está vacía.
        document.getElementById("mensaje").innerHTML = "La pila está vacía";
    }
}