const botonEle = document.querySelector('#boton-cambiar-cita')
const citaa = document.getElementById('cita');
const autor = document.getElementById('autor');

function GenerarAleatorio(min,max){

    return Math.floor( Math.random()* (max-min)+min);


}
function cambiarCita (){
    let IndiceAleatorio= GenerarAleatorio(0,citas.length);
    citaa.textContent=`"${citas[IndiceAleatorio].cita}"`;
    autor.textContent=citas[IndiceAleatorio].autor
}
cambiarCita();
botonEle.addEventListener('click',cambiarCita);

