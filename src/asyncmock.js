const productos = [
{nombre: "Royal Perro Maxi Adulto", precio: 600, id: "1", img: "../img/royalmaxi.jpg", idCat: "1"},
{nombre: "Royal Perro Puppi", precio: 600, id: "2", img: "../img/royalpuppi.jpg.jpg", idCat: "1"},
{nombre: "Performance Perro Adulto", precio: 400, id: "3", img: "../img/perforadulto.jpg", idCat: "1"},
{nombre: "Performance Perro Junior", precio: 400,  id: "4", img: "../img/perforjunior.jpg", idCat: "1"},
{nombre: "Eukanuba Perro Adulto", precio: 500, id: "5", img: "../img/eukaadulto.jpg", idCat: "1"},
{nombre: "Eukanuba Perro Cachorro", precio: 500, id: "6", img: "../img/eukacachorro.jpg", idCat: "1"},
{nombre: "Royal Gato", precio: 600, id: "7", img: "../img/royalcontrol.jpg", idCat: "2"},
{nombre: "Royal Gato Kitten ", precio: 600, id: "8", img: "../img/royalkitten.jpg", idCat: "2"},
{nombre: "Performance Gato Adulto", precio: 400, id: "9", img: "../img/perforadultogato", idCat: "2"},
{nombre: "Performance Gato Kitten", precio: 400, id: "10", img: "../img/perforkitten", idCat: "2"},
{nombre: "Eukanuba Gato Adulto", precio: 500, id: "11", img: "../img/eukaadultogato", idCat: "2"},
{nombre: "Eukanuba Gato kitten", precio: 500, id: "12", img: "../img/eukakitten", idCat: "2"}
]

export const getProductos = () => {
    return new Promise((resolve) =>{
setTimeout(() => {
    resolve(productos)
}, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 2000)
    })
}