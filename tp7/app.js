let edad = 18
let nombreUsuario = "nahuel"
let nombreUsuario2 = "marcos"
let numero = 0
let edad2 = 6
let dia = "sabado"
let contrasenia = "secreto"
let parrafo1 = document.querySelector("#Parrafo1")
let boton1 = document.querySelector("#Boton1")
let parrafo2 = document.querySelector("#Parrafo2")
let boton2 = document.querySelector("#Boton2")
let parrafo3 = document.querySelector("#Parrafo3")
let boton3 = document.querySelector("#Boton3")
let parrafo4 = document.querySelector("#Parrafo4")
let boton4 = document.querySelector("#Boton4")
let parrafo5 = document.querySelector("#Parrafo5")
let boton5 = document.querySelector("#Boton5")
let parrafo6 = document.querySelector("#Parrafo6")
let boton6 = document.querySelector("#Boton6")
let parrafo7 = document.querySelector("#Parrafo7")
let boton7 = document.querySelector("#Boton7")

boton1.onclick = function () {
    if (edad <= 18) {
        parrafo1.textContent = "Sos menor de edad"
    } else {
        parrafo1.textContent = "Sos mayor de edad"
    }
}
boton2.onclick = function () {
    if (nombreUsuario == "nahuel") {
        parrafo2.textContent = "Bienvenido Nahuel, ¿cómo estás?"
    } else {
        parrafo2.textContent = "Bienvenido usuario"   
    }
}
boton3.onclick = function () {
    if ((nombreUsuario2 == "marcos") || (nombreUsuario2 == "nahuel")) {
        parrafo3.textContent = "Bienvenido," + " " + nombreUsuario + " " + "¿cómo estás?"
    } else {
        parrafo3.textContent = "Bienvenido, " + nombreUsuario
    }
}
boton4.onclick = function () {
    if (numero < 0) {
        parrafo4.textContent = "El número es negativo"
    } else if (numero == 0){
        parrafo4.textContent = "El número es cero"
    } else if (numero > 0){
        parrafo4.textContent = "El número es positivo"
    }
}
boton5.onclick = function (){
    if((edad2 >=6 ) && (edad2 <=11)){
        parrafo5.textContent = "Niño"
    }else if((edad2 >= 12) && (edad2 <= 18)){
        parrafo5.textContent = "adolescente"
    }else if((edad2 >= 19) && (edad2 <= 26)){
        parrafo5.textContent = "joven"
    }else if((edad2 >= 27) && (edad2 <= 59)){
        parrafo5.textContent = "adulto"
    }else if(edad2 >= 60){
        parrafo5.textContent = "anciano"}
}

boton6.onclick = function (){
    if ((dia == "lunes") || (dia == "martes") || (dia == "miercoles") || (dia == "jueves") || (dia == "viernes")){
        parrafo6.textContent = "Es día laboral"
    }else if ((dia == "sabado") || (dia == "Domingo")){
        parrafo6.textContent = "Es fin de semana"
    }
}
boton7.onclick = function (){
    if (contrasenia == "secreto"){
    parrafo7.textContent = "acceso concedido"
} else {
    parrafo7.textContent = "acceso denegado"
}
}