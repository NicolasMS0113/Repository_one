function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')


    if(inputHipodoge.checked){
        alert("Seleccionaste a hipodoge")
    } else if(inputCapipepo.checked){
        alert("Seleccionaste a Capipepo")
    } else if(inputRatigueya.checked){
        alert("Seleccionaste a Ratigueya")
    } else {alert("selecciona una mascota")}

}

window.addEventListener('load',iniciarJuego)