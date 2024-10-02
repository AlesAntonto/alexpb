var tarjetas = [
    "1.jpg","1.jpg","2.jpg","2.jpg",
    "3.jpg","3.jpg","4.jpg","4.jpg",
    "5.jpg","5.jpg","6.jpg","6.jpg",
    "7.jpg","7.jpg","8.jpg","8.jpg",
];      

var imagenTemporal, esperando = false;
var contador=0;
function cambiarImagen(imagen, indice) {
imagen.src = `./imagenes/${tarjetas[indice]}`;
imagen.removeAttribute("onclick");
if (!esperando) imagenTemporal = imagen;
else {
    if (imagenTemporal.src == imagen.src) {
        setTimeout(function(){
            Regresar(imagenTemporal, imagen);
            desaparecerPar(imagenTemporal, imagen);
            }, 700);
    } else {
        setTimeout(function(){
        Regresar(imagenTemporal, imagen);
        }, 800);
    }
}
esperando = !esperando;
}

function Regresar(imagen1, imagen2){
imagen1.src = "./imagenes/0.jpg";
imagen2.src = "./imagenes/0.jpg";
imagen1.setAttribute("onclick", `cambiarImagen(this,${imagen1.id})`);
imagen2.setAttribute("onclick", `cambiarImagen(this,${imagen2.id})`);
}
function desaparecerPar(imagen1, imagen2) {
/* imagen1.src = "";
imagen1.style.display = "none";
imagen2.src = "";
imagen2.style.display = "none"; */
imagen1.style.visibility = "hidden";
imagen2.style.visibility = "hidden";
imagen1.removeAttribute("onclick");
imagen2.removeAttribute("onclick");
contador++;
if(contador != 8){
    document.getElementById("contador").innerHTML = `Pares Encontrados: ${contador}`;
}else{
    document.getElementById("contador").innerHTML = `Pares Encontrados: ${contador} Ganaste!!`;
}
}

function Revolver() {
    var i = 0, j = 0, temporal  = 0;
    for (let i = 0; i < tarjetas.length-1; i++) {
        j = Math.floor(Math.random() * (i+1));
        [tarjetas[i],tarjetas[j]] = [tarjetas[j],tarjetas[i]];
    }
}

function Fondo(){
    var fondo = Math.floor(Math.random()*8)+1;
    document.getElementById("tablita").style= `background-image: url("./imagenes/Fondo${fondo}.jpg")`;
}
function Reiniciar(){
    location.reload();
}