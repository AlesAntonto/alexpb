let size = 3; // Tamaño por defecto

        function createTable(includeSums = false) {
            const tableContainer = document.getElementById("table-container");
            tableContainer.innerHTML = ""; // Limpiar tabla anterior
            let table = document.createElement("table");
            table.setAttribute("id", "magicSquare");

            for (let i = 0; i < (includeSums ? size + 1 : size); i++) {
                let row = document.createElement("tr");
                for (let j = 0; j < (includeSums ? size + 1 : size); j++) {
                    let cell = document.createElement("td");
                    if (i < size && j < size) {
                        cell.setAttribute("id", `cell-${i}-${j}`);
                        cell.textContent = Math.floor(Math.random() * 50 + 1); // Número aleatorio
                    } else if (i < size && j === size) {
                        cell.classList.add("sum");
                        cell.setAttribute("id", `sum-row-${i}`);
                        cell.textContent = "0";
                    } else if (i === size && j < size) {
                        cell.classList.add("sum");
                        cell.setAttribute("id", `sum-col-${j}`);
                        cell.textContent = "0";
                    } else if (i === size && j === size) {
                        cell.classList.add("sum");
                        cell.setAttribute("id", `sum-diag`);
                        cell.textContent = "0";
                    }
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            tableContainer.appendChild(table);
        }

        function generateRandomSquare() {
            createTable(true);
            // Rellenar solo los números, las sumas se reinician a 0
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    document.getElementById(`cell-${i}-${j}`).textContent = Math.floor(Math.random() * 50 + 1);
                }
            }
            document.getElementById("result").textContent = "No es un cuadrado mágico";
        }

        function calculateSums() {
            let rowSums = Array(size).fill(0);
            let colSums = Array(size).fill(0);
            let diag1 = 0;
            let diag2 = 0;

            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    let value = parseInt(document.getElementById(`cell-${i}-${j}`).textContent) || 0;
                    rowSums[i] += value;
                    colSums[j] += value;
                    if (i === j) diag1 += value;
                    if (i + j === size - 1) diag2 += value;
                }
            }

            // Actualizar las celdas de sumas
            for (let i = 0; i < size; i++) {
                document.getElementById(`sum-row-${i}`).textContent = rowSums[i];
                document.getElementById(`sum-col-${i}`).textContent = colSums[i];
            }
            document.getElementById("sum-diag").textContent = `D1:${diag1} D2:${diag2}`;

            // Verificar si es un cuadrado mágico
            let allSums = [...rowSums, ...colSums, diag1, diag2];
            let magic = allSums.every((val) => val === allSums[0]);

            document.getElementById("result").textContent = magic ? "Sí es un cuadrado mágico" : "No es un cuadrado mágico";
        }

        function generateExampleAndCalculate() {
            generateRandomSquare();
            calculateSums();
        }

        function generateMagicSquare() {
            let magicSquare = [];

            if (size === 3) {
                magicSquare = [
                    [8, 1, 6],
                    [3, 5, 7],
                    [4, 9, 2]
                ];
            } else if (size === 4) {
                magicSquare = [
                    [1, 15, 14, 4],
                    [12, 6, 7, 9],
                    [8, 10, 11, 5],
                    [13, 3, 2, 16]
                ];
            } else if (size === 2) {
                // No existen cuadrados mágicos 2x2, pero para el propósito de la demostración, usaremos números que no son mágicos
                magicSquare = [
                    [1, 2],
                    [3, 4]
                ];
            } else if (size === 5) {
                magicSquare = [
                    [17, 24, 1, 8, 15],
                    [23, 5, 7, 14, 16],
                    [4, 6, 13, 20, 22],
                    [10, 12, 19, 21, 3],
                    [11, 18, 25, 2, 9]
                ];
            } else {
                // Para tamaños no implementados, genera números aleatorios
                magicSquare = Array.from({ length: size }, () => Array(size).fill(0));
                for (let i = 0; i < size; i++) {
                    for (let j = 0; j < size; j++) {
                        magicSquare[i][j] = Math.floor(Math.random() * 50 + 1);
                    }
                }
            }

            createTable(true);
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    document.getElementById(`cell-${i}-${j}`).textContent = magicSquare[i][j];
                }
            }
            calculateSums();
        }

        function changeSize(newSize) {
            size = newSize;
            generateRandomSquare();
        }

        window.onload = function() {
            createTable(true);
            generateRandomSquare();
        }