// No cambies los nombres de las funciones.

const { add } = require("@11ty/eleventy/src/TemplateCache")

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:

  const gato = {
      meow: function () {
        return "Meow!"
      },
          }
          gato.nombre = nombre
          gato.edad = edad
          return gato
}
 crearGato ("Panchi", 2)

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
    
  objeto[property] = null;
  return objeto;
}

agregarPropiedad({}, "edad");

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código: 


    if (typeof objeto[metodo] === 'function') {
      objeto[metodo]();

}}
invocarMetodo ({}, "metalico")

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  objetoMisterioso.numeroMisterioso *= 5;
  return objetoMisterioso.numeroMisterioso


} 
multiplicarNumeroDesconocidoPorCinco ({})

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
    objeto[unaPropiedad] = "propiedad de prueba";

    delete objeto[unaPropiedad];

    return objeto;
}
    eliminarPropiedad ({}, "prop")

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
    const objeto = {};

    objeto["nombre"] = nombre;
    objeto["email"] = email;
    objeto["password"] = password;

    return objeto
    }
    nuevoUsuario ("Eugenio", "eugedsr@gmail.com", "asdasd")

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contrario, devuelve "false"
  // Tu código:
  
   
 return !!usuario.email ;

}
  tieneEmail({})

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) 
  // cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  if(!!objeto[propiedad]) {return true}
  else {return false}


}
    tienePropiedad ({}, "Prueba")

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:

       if (usuario.password === password) {return true}
          else {return false}
        }
verificarPassword ({}, "cascada")

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
    
    usuario.password = nuevaPassword
    return usuario
}
actualizarPassword ({}, "caramelo")

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  
  usuario["amigos"].push (nuevoAmigo);
      
     return usuario 
}
agregarAmigo ({"amigos": [1]}, "Damian" )

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  
  usuarios = [
    {esPremium: false},
    {esPremium: false},
    {esPremium: true},
    {esPremium: false},
    {esPremium: false}
  ]
  
  usuarios.forEach((usuario) =>{
    usuario.esPremium = true;})
 
    console.log (usuarios)
    return usuarios
}
pasarUsuarioAPremium ({})

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
 
    let total = 0;
    for (let post of usuario.posts) {
      total += post.likes;
    }
    return total;
      }


sumarLikesDeUsuario ( {posts: [{likes: 0} , {likes: 2}, {likes: 3}]})

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]")
  // y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
      
  producto.calcularPrecioDescuento = function () {
    return this.precio - (this.precio * this.porcentajeDeDescuento);
  };
  
  return producto;
      
     }
    agregarMetodoCalculoDescuento ({precio: 50, porcentajeDeDescuento: .2})


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
