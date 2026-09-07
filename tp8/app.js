let texto = document.querySelector("#Parrafo1")
let botonParrafo1 = document.querySelector("#Boton1")
let input1 = document.querySelector("#input1")

botonParrafo1.onclick = function(){
    if (input1.value >= 18)  {
        texto.textContent = "Eres mayor de edad"
    }
    else {
        texto.textContent = "Eres menor de edad"
    }
}

let Parraf2 = document.querySelector('#Parrafo2')
let botonParrafo2 = document.querySelector('#Boton2')
let input2 = document.querySelector("#input2")

botonParrafo2.onclick = function(){
    if (input2.value == 'Julian'){
        Parrafo2.textContent = "Bienvenido Julian, ¿como estas?"
    } else {
        Parrafo2.textContent = "Bienvenido usuario"
    }
}

let Parraf3 = document.querySelector('#Parrafo3')
let botonParrafo3 = document.querySelector('#Boton3')
let input3 = document.querySelector('#input3')

botonParrafo3.onclick = function(){
    if (input3.value == 'Jorge'|| input3.value == 'Roberto'){
        Parrafo3.textContent = 'Bienvenido ' + input3.value + ', ¿como estas?' 
    } else {
        Parrafo3.textContent = 'Bienvenido ' + input3.value
    }
}

let Parraf4 = document.querySelector('#Parrafo4')
let botonParrafo4 = document.querySelector('#Boton4')
let input4 = document.querySelector('#input4')

botonParrafo4.onclick = function(){
    if (input4.value > 0) {
        Parrafo4.textContent = 'el numero es positivo'
    } else if (input4.value < 0) {
        Parrafo4.textContent = 'el numero es negativo'
    } else {
        Parrafo4.textContent = 'el numero es cero'
    }
}

let Parraf5 = document.querySelector('#Parrafo5')
let botonParrafo5 = document.querySelector('#Boton5')
let input5 = document.querySelector('#input5')

botonParrafo5.onclick = function(){
    if (input5.value >= 6 && input5.value <= 11) {
        Parrafo5.textContent = 'niño'
    } else if (input5.value>= 12 && input5.value <= 18) {
        Parrafo5.textContent = 'adolescente'
    } else if (input5.value>= 19 && input5.value <= 26) {
        Parrafo5.textContent = 'joven'
    } else if (input5.value>= 27 && input5.value <= 59) {
        Parrafo5.textContent = 'adulto'
    } else if (input5.value>= 60) {
        Parrafo5.textContent = 'anciano'
    } else {
        Parrafo5.textContent = 'edad no valida'
    }
}
let Parraf6 = document.querySelector("#Parrafo6")
let botonParrafo6 = document.querySelector('#Boton6')
let input6 = document.querySelector('#input6')

botonParrafo6.onclick = function(){
    if (input6.value == 'lunes' || input6.value == 'martes' || input6.value == 'miercoles' || input6.value == 'jueves' || input6.value == 'viernes') {
        Parrafo6.textContent = 'es un dia laborable'
    } else if (input6.value == 'sabado' || input6.value == 'domingo') {
        Parrafo6.textContent = 'es fin de semana'
    }
}

let Parrafo7 = document.querySelector('#Parrafo7')
let botonParrafo7 = document.querySelector('#Boton7')
let input7 = document.querySelector('#input7')

botonParrafo7.onclick = function(){
    if (input7.value == 'secreto') {
        Parrafo7.textContent = 'acceso concedido'
    } else {
        Parrafo7.textContent = 'acceso denegado'
    }
}


