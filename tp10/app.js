let utiles = ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"];
console.log(utiles)
console.log(utiles[0])
console.log(utiles[2])
console.log(utiles[utiles.length - 1])
console.log(utiles.length)
utiles.push("mochila")
console.log(utiles)
utiles.unshift("cartuchera")
console.log(utiles);
console.log(utiles.length);
console.log(utiles[4]);
utiles.pop();
console.log(utiles);
console.log(utiles[0]);
utiles.shift();
console.log(utiles);
console.log(utiles.length);


let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"];
console.log (productos)
console.log (productos.length)
productos.push ("azucar")
productos.push ("yerba")
productos.push ("cafe")
console.log (productos)
productos.unshift ("sal")
productos.unshift ("galletitas")
console.log (productos)
console.log (productos.length)
console.log (productos[9])
productos.pop()
console.log (productos[8])
productos.pop()
console.log (productos)
console.log (productos.length)


let productos2 = ["Teclado","Mouse","Monitor","Auriculares","Webcam","Parlantes"];


productos2.indexOf("Mouse")
console.log (productos2.indexOf("Mouse"))
productos2.indexOf("Monitor")
console.log (productos2.indexOf("Monitor"))
productos2.indexOf("Webcam")
console.log (productos2.indexOf("Webcam"))
productos2.indexOf("Impresora")
console.log (productos2.indexOf("Impresora"))
productos2.indexOf("Teclado")
console.log (productos2.indexOf("Teclado"))
let teclado = productos2.indexOf("Teclado")
if (teclado == -1){
    console.log ("El elemento no se encuentra en la lista");
}else{
    console.log ("El elemento se encuentra en la posición: " + teclado);
}
productos2.push ("Impresora");
console.log (productos2.indexOf ("Impresora"));
console.log (productos2.length);

let videojuegos = ["Minecraft","Pokémon Cristal","Super Mario","The Legend of Zelda", "Sonic"]
console.log(videojuegos)
console.log(videojuegos.length)
videojuegos.push("Animal Crossing")
videojuegos.push("Pokémon Rojo")
console.log(videojuegos)
videojuegos.unshift("Tetris")
videojuegos.unshift("Pac-Man")
console.log(videojuegos)
videojuegos.indexOf("Pokémon Cristal")
console.log (videojuegos.indexOf ("Pokémon Cristal"))
videojuegos.indexOf("Sonic")
console.log (videojuegos.indexOf ("Sonic"))
videojuegos.indexOf("FIFA")
console.log (videojuegos.indexOf ("FIFA"))
console.log(videojuegos[8])
videojuegos.pop()
console.log(videojuegos[0])
videojuegos.shift()
console.log(videojuegos)
console.log(videojuegos.length)

let estudiantes = ["Martina","Lucas","Sofía","Tomás","Valentina"];
console.log(estudiantes)
console.log(estudiantes.length)
estudiantes.push("Agustin")
estudiantes.push("Camila")
console.log(estudiantes)
