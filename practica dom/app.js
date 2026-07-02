let titulo = document.querySelector('h1')
let parrafo = document.querySelector("#parrafo") 
let botonCambiarFondo = document.querySelector('#botonCambiarFondo')
let botonCambiarTexto = document.querySelector( "#botonCambiarTexto" )
let botonCambiarLetra = document.querySelector( "#botonCambiarLetra" )
let botonCambiarColor = document.querySelector( "#botonCambiarColor" )
let botonReiniciar = document.querySelector( "#botonReiniciar")
let botonTamaño = document.querySelector( "#botonTamaño")
botonCambiarTexto.onclick = function(){
parrafo.textContent = 'trabajamos en el tp6'
}
botonCambiarColor.onclick = function (){
parrafo.style.color = "red"
}
botonCambiarFondo.onclick = function (){
    parrafo.style.backgroundColor = "blue"
}
botonCambiarLetra.onclick = function (){
    parrafo.style.fontFamily = "impact"
}
botonTamaño.onclick = function (){
    parrafo.style.fontSize = "30px"
}
botonReiniciar.onclick = function (){
    parrafo.textContent = 'este es el tp6'
    parrafo.style.color = "black"
    parrafo.style.backgroundColor = "rgb(69, 93, 102)"
    parrafo.style.fontFamily = "Arial, Helvetica, sans-serif"
    parrafo.style.fontSize = "15px"
}
