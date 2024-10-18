var control = true;

var contador = 0;
 
function Chturn(boton) {

    boton.disabled = true;
 
    boton.value = control ? "O" : "✖";
 
    document.getElementById("turno").innerHTML = control ? "turno ✖" : "turno O";
 
    control = !control;
 
    Verificar();

}
 
function Verificar() {

    if (++contador == 9) {

        document.getElementById("turno").innerHTML = `EMPATE`;

    }
 
    var botones = document.querySelectorAll("input[type=button]");

    if (botones[0].value == botones[1].value && botones[1].value == botones[2].value && botones[0].value != "") {

        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;

        Dall();

        const Style = document.createElement("style");

        Style.textContent = `tr:nth-child(1)::after

    {

        content: ""; /* Es la cadena de texto en blanco para utilizar solo el fondo */

        position: absolute; /* Establece que es lo que se tomara en cuenta a la hora de dibujar la linea */

        top: 48%; /* Es a partir de donde se empieza a dibujar la linea sin tomar en cuenta el grosor */

        left: 0%; /* Es el porcentaje a partir del cual se dibujara la linea tomando en cuenta lo que miden las 3 casillas por la izquierda */

        right: 0%; /* Es el porcentaje que dejara sin dibujar desde la derecha */

        height: 10px; /* Establece el grosor de la linea */

        background-color: black; /* Establece el color de la linea */

        z-index: 1; /* Establece la linea por encima de los objetos*/

        pointer-events: none; /* Para que la linea no interfiera con los botones */

    }`;

        document.head.appendChild(Style);

    }

    else if (botones[3].value == botones[4].value && botones[4].value == botones[5].value && botones[3].value != "") {

        document.getElementById("turno").innerHTML = `Gana ${botones[3].value}`;

        Dall();

        const Style = document.createElement("style");

        Style.textContent = `tr:nth-child(2)::after

    {

        content: ""; /* Es la cadena de texto en blanco para utilizar solo el fondo */

        position: absolute; /* Establece que es lo que se tomara en cuenta a la hora de dibujar la linea */

        top: 48%; /* Es a partir de donde se empieza a dibujar la linea sin tomar en cuenta el grosor */

        left: 0%; /* Es el porcentaje a partir del cual se dibujara la linea tomando en cuenta lo que miden las 3 casillas por la izquierda */

        right: 0%; /* Es el porcentaje que dejara sin dibujar desde la derecha */

        height: 10px; /* Establece el grosor de la linea */

        background-color: black; /* Establece el color de la linea */

        z-index: 1; /* Establece la linea por encima de los objetos*/

        pointer-events: none; /* Para que la linea no interfiera con los botones */

    }`;

        document.head.appendChild(Style);

    }

    else if (botones[6].value == botones[7].value && botones[7].value == botones[8].value && botones[6].value != "") {

        document.getElementById("turno").innerHTML = `Gana ${botones[6].value}`;

        Dall();

        const Style = document.createElement("style");

        Style.textContent = `tr:nth-child(3)::after

    {

        content: ""; /* Es la cadena de texto en blanco para utilizar solo el fondo */

        position: absolute; /* Establece que es lo que se tomara en cuenta a la hora de dibujar la linea */

        top: 48%; /* Es a partir de donde se empieza a dibujar la linea sin tomar en cuenta el grosor */

        left: 0%; /* Es el porcentaje a partir del cual se dibujara la linea tomando en cuenta lo que miden las 3 casillas por la izquierda */

        right: 0%; /* Es el porcentaje que dejara sin dibujar desde la derecha */

        height: 10px; /* Establece el grosor de la linea */

        background-color: black; /* Establece el color de la linea */

        z-index: 1; /* Establece la linea por encima de los objetos*/

        pointer-events: none; /* Para que la linea no interfiera con los botones */

    }`;

        document.head.appendChild(Style);

    }

    else if (botones[0].value == botones[3].value && botones[3].value == botones[6].value && botones[0].value != "") {

        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;

        Dall();

        const Style = document.createElement("style");

        Style.textContent = `td:nth-child(1)::after

    {

        content: "";  /* Es la cadena de texto en blanco para utilizar solo el fondo */

        position: absolute;  /* Establece que es lo que se tomara en cuenta a la hora de dibujar la linea */

        top: 0px;

        bottom: 0px;

        left: 48%;

        width: 10px;

        background-color: black;

        z-index: 1;

        pointer-events: none;

    }`;

        document.head.appendChild(Style);

    }

    else if (botones[1].value == botones[4].value && botones[4].value == botones[7].value && botones[1].value != "") {

        document.getElementById("turno").innerHTML = `Gana ${botones[1].value}`;

        Dall();

        const Style = document.createElement("style");

        Style.textContent = `td:nth-child(2)::after

    {

        content: "";  /* Es la cadena de texto en blanco para utilizar solo el fondo */

        position: absolute;  /* Establece que es lo que se tomara en cuenta a la hora de dibujar la linea */

        top: 0px;

        bottom: 0px;

        left: 48%;

        width: 10px;

        background-color: black;

        z-index: 1;

        pointer-events: none;

    }`;

        document.head.appendChild(Style);

    }

    else if (botones[2].value == botones[5].value && botones[5].value == botones[8].value && botones[2].value != "") {

        document.getElementById("turno").innerHTML = `Gana ${botones[2].value}`;

        Dall();

        const Style = document.createElement("style");

        Style.textContent = `td:nth-child(3)::after

    {

        content: "";  /* Es la cadena de texto en blanco para utilizar solo el fondo */

        position: absolute;  /* Establece que es lo que se tomara en cuenta a la hora de dibujar la linea */

        top: 0px;

        bottom: 0px;

        left: 48%;

        width: 10px;

        background-color: black;

        z-index: 1;

        pointer-events: none;

    }`;

        document.head.appendChild(Style);

    }

    else if (botones[0].value == botones[4].value && botones[4].value == botones[8].value && botones[0].value != "") {

        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;

        Dall();

        const Style = document.createElement("style");

        Style.textContent = `table::before

    {

        content: "";  /* Es la cadena de texto en blanco para utilizar solo el fondo */

        position: absolute; /* Establece que es lo que se tomara en cuenta a la hora de dibujar la linea */

        top: 0; /* Es a partir de donde se empieza a dibujar la linea sin tomar en cuenta el grosor */

        left: 0; /* Es el porcentaje a partir del cual se dibujara la linea tomando en cuenta lo que miden las 3 casillas por la izquierda */

        width: calc(100% * 1.414); /* Es el ancho que tendra la linea */

        height: calc(100% * 1.414);

        border-top: 5px solid rgb(0, 0, 0); /* indica el grosor y color de la linea */

        transform: rotate(45deg); /* indica los grados de inclinacion que tendra la linea */

        transform-origin: top left;

        z-index: 1;

        pointer-events: none;

    }`;

        document.head.appendChild(Style);

    }

    else if (botones[2].value == botones[4].value && botones[4].value == botones[6].value && botones[2].value != "") {

        document.getElementById("turno").innerHTML = `Gana ${botones[2].value}`;

        Dall();

        const Style = document.createElement("style");

        Style.textContent = `table::after

    {

        content: "";  /* Es la cadena de texto en blanco para utilizar solo el fondo */

        position: absolute; /* Establece que es lo que se tomara en cuenta a la hora de dibujar la linea */

        top: 100%; /* Es a partir de donde se empieza a dibujar la linea sin tomar en cuenta el grosor */

        left: 0; /* Es el porcentaje a partir del cual se dibujara la linea tomando en cuenta lo que miden las 3 casillas por la izquierda */

        width: calc(100% * 1.414); /* Es el ancho que tendra la linea */

        height: calc(100% * 1.414);

        border-top: 5px solid black; /* indica el grosor y color de la linea */

        transform: rotate(-45deg); /* indica los grados de inclinacion que tendra la linea */

        transform-origin: top left;

        z-index: 1;

        pointer-events: none;

    }`;

        document.head.appendChild(Style);

    }
 
}
 
function Dall() {

    var botones = document.querySelectorAll("input[type=button]");

    for (let i = 0; i < botones.length; i++) {

        botones[i].disabled = true;

    }

}
 