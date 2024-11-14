var i = 0;
 
        function pasoAPaso() {
            var expresion = document.getElementById("exp").value.split(" ");
           
            if (Number.isInteger(Number(expresion[i]))) {
                document.getElementById("textPaso").innerHTML += `Paso: ${expresion[i]} es un número, va al tope de la pila <br>`;
                Push(expresion[i]);
            } else if (expresion[i] === '*') {
                var operando1 = Pop();
                var operando2 = Pop();
                var multiplicacion = operando2 * operando1;
                Push(multiplicacion);
                document.getElementById("textPaso").innerHTML += `Paso: ${operando2} * ${operando1} = ${multiplicacion} <br>`;
            } else if (expresion[i] === '+') {
                var operando1 = Pop();
                var operando2 = Pop();
                var suma = Number(operando2) + Number(operando1);
                Push(suma);
                document.getElementById("textPaso").innerHTML += `Paso: ${operando2} + ${operando1} = ${suma} <br>`;
            } else if (expresion[i] === '-') {
                var operando1 = Pop();
                var operando2 = Pop();
                var resta = operando2 - operando1;
                Push(resta);
                document.getElementById("textPaso").innerHTML += `Paso: ${operando2} - ${operando1} = ${resta} <br>`;
            } else if (expresion[i] === '/') {
                var operando1 = Pop();
                var operando2 = Pop();
                var division = operando2 / operando1;
                Push(division);
                document.getElementById("textPaso").innerHTML += `Paso: ${operando2} / ${operando1} = ${division} <br>`;
            } else {
                document.getElementById("textPaso").innerHTML += `Paso: ${expresion[i]} no es un elemento válido en una expresión postfija <br>`;
                disableButtons();
            }
 
            i++;
            if (i === expresion.length) {
                disableButtons();
                evaluateResult();
            }
        }
 
        function disableButtons() {
            document.getElementById("botonEval").disabled = true;
            document.getElementById("botonPaso").disabled = true;
            document.getElementById("exp").disabled = true;
        }
 
        function evaluateResult() {
            var rt = document.getElementById("tabla");
            if (rt.hasChildNodes()) {
                if (rt.childNodes.length === 1) {
                    document.getElementById("textResultado").innerHTML = `Resultado: ${rt.firstChild.textContent}`;
                } else {
                    document.getElementById("textResultado").innerHTML = `Resultado: Hay un error en la expresión`;
                }
            }
        }
 
        function Reinicio() {
            document.getElementById("botonEval").disabled = false;
            document.getElementById("botonPaso").disabled = false;
            document.getElementById("exp").disabled = false;
            document.getElementById("exp").value = "3 4 * 2 5 + 42 /";
            document.getElementById("tabla").textContent = null;
            document.getElementById("textPaso").innerHTML = "Pasos: <br>";
            document.getElementById("textResultado").innerHTML = "Resultado: ";
            i = 0; // Reiniciar el índice
        }
 
        function Push(operando) {
            var renglon = document.createElement("tr");
            var celda1 = document.createElement("td");
            celda1.textContent = operando;
            renglon.appendChild(celda1);
            celda1.style.border = "1px solid black";
            var rt = document.getElementById("tabla");
            rt.insertBefore(renglon, rt.children[0]);
        }
 
        function Pop() {
            var rt = document.getElementById("tabla");
            if (rt.hasChildNodes()) {
                var regresar = rt.firstChild.textContent;
                rt.removeChild(rt.firstChild);
                return regresar;
            } else {
                document.getElementById("textResultado").innerHTML = "Error en la expresión postfija <br>";
                disableButtons();
            }
        }
 
        function Evaluar() {
            var expresion = document.getElementById("exp").value.split(" ");
            for (var i = 0; i < expresion.length; i++) {
                if (Number.isInteger(Number(expresion[i]))) {
                    document.getElementById("textPaso").innerHTML += `Paso: ${expresion[i]} es un número, va al tope de la pila <br>`;
                    Push(expresion[i]);
                } else if (expresion[i] === '*') {
                    var operando1 = Pop();
                    var operando2 = Pop();
                    var multiplicacion = operando2 * operando1;
                    Push(multiplicacion);
                    document.getElementById("textPaso").innerHTML += `Paso: ${operando2} * ${operando1} = ${multiplicacion} <br>`;
                } else if (expresion[i] === '+') {
                    var operando1 = Pop();
                    var operando2 = Pop();
                    var suma = Number(operando2) + Number(operando1);
                    Push(suma);
                    document.getElementById("textPaso").innerHTML += `Paso: ${operando2} + ${operando1} = ${suma} <br>`;
                } else if (expresion[i] === '-') {
                    var operando1 = Pop();
                    var operando2 = Pop();
                    var resta = operando2 - operando1;
                    Push(resta);
                    document.getElementById("textPaso").innerHTML += `Paso: ${operando2} - ${operando1} = ${resta} <br>`;
                } else if (expresion[i] === '/') {
                    var operando1 = Pop();
                    var operando2 = Pop();
                    var division = operando2 / operando1;
                    Push(division);
                    document.getElementById("textPaso").innerHTML += `Paso: ${operando2} / ${operando1} = ${division} <br>`;
                } else {
                    document.getElementById("textPaso").innerHTML += `Paso: ${expresion[i]} no es un elemento válido en una expresión postfija <br>`;
                    disableButtons();
                }
            }
 
            // Finalización del proceso
            evaluateResult();
        }