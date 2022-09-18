let titulo = document.getElementById("tituloPrincipal")
console.log(titulo)

let sub = document.getElementsByClassName("parrafo")
console.log(sub)

class Juegos {
    constructor(id, genero, titulo, precio, imagen){

        this.id = id,
        this.titulo = titulo,
        this.genero = genero,
        this.precio = precio
        this.imagen = imagen

    }

    mostrarData(){
        console.log(
            `El titulo es: ${this.titulo}
            El genero es: ${this.genero}
            Su precio es: ${this.precio}`)
    }
}

const juego1 = new Juegos(1, "Survival Horror","Resident Evil 3 Nemesis", 2900, "re3.jpg")

const juego2 = new Juegos(2,"Survival Horror", "Dead Space", 1500, "DS.jpg")

const juego3 = new Juegos(3, "Survival Horror", "Silent Hill", 2800,"SH.jpg")

const juego4 = new Juegos(4, "Lucha","Marvel vs Capcom", 1400,"MvsC.jpg")

const juego5 = new Juegos(5, "Lucha", "Street Fighter", 1500,"SF.jpg")

const juego6 = new Juegos(6, "Lucha", "Super Smash Bros: Ultimate", 2000,"SSBU.jpg")

const juego7 = new Juegos(7, "Deportes", "Rocket League", 1000,"RL.jpg")

const juego8 = new Juegos(8, "Deportes", "Fifa 22", 900,"Fifa22.jpg")

const juego9 = new Juegos(9, "Deportes", "NBA2K22", 800,"NBA.jpg")

const juego10 = new Juegos(10, "Aventuras", "God of War", 2100,"GOW.jpg")

const juego11 = new Juegos(11, "Aventuras", "Assassins Creed Valhalla", 2700,"ACV.jpg")

const juego12 = new Juegos(12, "Aventuras", "Sekiro: Shadows Die Twice", 2500,"sekiro.jpg")

const catalogo= []
catalogo.push(juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8, juego9, juego10, juego11, juego12)


let divProductos = document.getElementById("productos")
function mostrarCatalogo(array){
    array.forEach((Juegos)=>{
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML = `<div id="${Juegos.id}" class="card" style="width: 18rem;">
    <img src="./assets/img/${Juegos.imagen}" style="height: 250px;" class="card-img-top" alt="${Juegos.titulo}">
    <div class="card-body">
        <h5 class="card-title">${Juegos.titulo}</h5>
        <p class="card-text">${Juegos.genero}</p>
        <p class="card-text">Precio: ${Juegos.precio}</p>
        <button class="btn btn-outline-success btnComprar">Comprar</button>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    })
        let btnCompra = document.getElementsByClassName("btnComprar")
        for(let compra of btnCompra){
        compra.addEventListener("click", ()=>{
            alert("El producto ha sido comprado")
        })
    }
}

let btnMostrarCatalogo = document.getElementById("verCatalogo")
btnMostrarCatalogo.addEventListener("click", ()=>{
    mostrarCatalogo(catalogo)
})

function ocultarCatalogo(){
    divProductos.innerHTML = ""
}

let btnOcultarCatalogo = document.getElementById("ocultarCatalogo")
btnOcultarCatalogo.onclick = ocultarCatalogo
