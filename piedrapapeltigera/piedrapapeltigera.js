
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)

}

function elegir(jugada){
    let eleccion =""
    if(jugada == 1){
        eleccion="piedra 🪨"
    } else if(jugada == 2){
        eleccion="papel 📄"
    }else if(jugada ==3){
        eleccion="tigeras ✂️"
    }else {
        eleccion="elige bein"
    }
    return eleccion
}

//1 es piedra ,2 es papel ,3 es tigera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0


while(triunfos<3 && perdidas<3){
    pc = aleatorio(1,3)
    jugador = prompt("elige 1 para piedra 2 para papel 3 para tigera")
    //alert("elegiste "+ jugador)
    
    alert("el pc eligio "+ elegir(pc))
    alert("tu elegiste "+ elegir(jugador))



    //combate
    if(pc ==jugador){
        alert("empate")
    } else if(jugador ==1 && pc ==3||jugador == 2 && pc==1||jugador == 3 && pc==2){
        alert("ganaste")
        triunfos = triunfos + 1
    } else {
        alert("perdiste")
        perdidas = perdidas + 1
    }


}
alert("ganaste " + triunfos + " perdiste "+ perdidas)