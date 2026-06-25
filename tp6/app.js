let titulo = document.querySelector ( "h1" )
let parrafo = document.querySelector ("p")
let botonTexto = document.querySelector ("botonTexto")
let botonColor = document.querySelector ("botonColor")
let botonLetra = document.querySelector ( "botonLetra")
let botonFondo = document.querySelector ( "botonFondo")
botonTexto.onclick = function() {
    titulo.textContent = "quiero queque"
}
botonColor.onclick = function (){
    parrafo.style.color = "blue"
}
botonFondo.onclick = function (){
    parrafo.style.backgroundColor = "yellow"
}
botonLetra.onclick = function(){
    
}