let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3



function iniciarJuego() {
    let sectionSeleccionarReiniciar = document.getElementById('reiniciar')
    sectionSeleccionarReiniciar.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataquefuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueagua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataquetierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarjuego)

}
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert("selecciona una mascota")
    }
    seleccionarMascotaEnemigo()
    
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if (mascotaAleatorio ==1){
        //hipodague
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2){
        //capipepo
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        //Ratihueya
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}
function ataqueAleatorioEnemigo(){
    let AtaqueAleatorio = aleatorio(1,3)
    if (AtaqueAleatorio ==1){
        //fuego
        ataqueEnemigo='FUEGO'
        //alert("el enemigo eligio fuego")
    } else if (AtaqueAleatorio == 2){
        //Agua}
        ataqueEnemigo='AGUA'
        //alert("el enemigo eligio Agua")
    } else {
        //Tierra
        ataqueEnemigo='TIERRA'
        //alert("el enemigo eligio Tierra")
    }
    combate() 
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo =document.createElement('p')
    parrafo.innerHTML='Tu mascota ataco con ' + ataqueJugador + ' la mascota del enemigo ataco con ' + ataqueEnemigo +'- '+ resultado

    sectionMensajes.appendChild(parrafo)
}
function crearMensajefinal(resultadofinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadofinal 

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled=true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled=true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled=true
    let sectionSeleccionarReiniciar = document.getElementById('reiniciar')
    sectionSeleccionarReiniciar.style.display = 'block'
}

function combate(){
    let spanVidasJugador=document.getElementById("vidas-jugador")
    let spanVidasEnemigo=document.getElementById("vidas-enemigo")


    if(ataqueEnemigo ==ataqueJugador){
       crearMensaje('EMPATE')
    } else if(ataqueJugador =='FUEGO' && ataqueEnemigo =='AGUA'||ataqueJugador == 'AGUA' && ataqueEnemigo=='FUEGO'||ataqueJugador == 'TIERRA' && ataqueEnemigo=='AGUA'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo 
    } else {
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador 
    }

    //revisar vidas
    revisarvidas()
}


function revisarvidas(){
    if(vidasEnemigo == 0){
        crearMensajefinal('GANASTE')
    } else if(vidasJugador ==0){
        crearMensajefinal('PERDISTE')
    }
}

function ataquefuego(){
    ataqueJugador='FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueagua(){
    ataqueJugador='AGUA'
    ataqueAleatorioEnemigo()
}
function ataquetierra(){
    ataqueJugador='TIERRA'
    ataqueAleatorioEnemigo()
}
function reiniciarjuego(){
    location.reload()
}


function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)

}

window.addEventListener('load',iniciarJuego)