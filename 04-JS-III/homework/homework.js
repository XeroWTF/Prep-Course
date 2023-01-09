// No cambies los nombres de las funciones.

  function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    
    return array [0]
  }
  devolverPrimerElemento ([10, 20, 30])

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
    return array[array.length -1]
}
devolverUltimoElemento ([10, 20, 30])

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}
obtenerLargoDelArray ([10 ,50, 20])

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (i = 0; i < array.length ; i++ ) { array [i] += 1 }

    return array
}
incrementarPorUno ([23, 33, 44])

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push (elemento);

return array
}
agregarItemAlFinalDelArray ([10, 20, 30], 45)

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift (elemento)
  return array
}
agregarItemAlComienzoDelArray ([10, 20, 30], 45)

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
return palabras.join (" ");
}
dePalabrasAFrase (["Hola", "como", "estas", "?"])

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (i=0 ; i < array.length; i++) 
    if (array [i] === elemento) {return true};
      return false
}
arrayContiene ([10, 30, 50], 30)

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  total = 0;
  for (i=0 ; i < numeros.length; i++) {
      numero = numeros [i];
      total += numero;
  }
      return total 
}
agregarNumeros ([1,2,3,4])

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  total = 0;
  for (i=0 ; i < resultadosTest.length; i++) {
      numero = resultadosTest [i];
      total += numero;
  }
  total = total / resultadosTest.length 
   return total
}
promedioResultadosTest ([2, 5, 3, 5])

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max (...numeros) 
}
numeroMasGrande ([10, 300 , 2, 4000])

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length == 0) {return 0}
  let total = 1
  for (i = 0; i < arguments.length; i++) { 
      numero = arguments [i];
      total = total * numero;
  }
  return  total
}
multiplicarArgumentos (2, 3, 4)

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
cantidad = 0
  for (i = 0; i < arreglo.length; i++) {
    let numero = arreglo [i]
      if (numero > 18) {cantidad++;} 
  }
  return cantidad
}
cuentoElementos ([2,4,18,5,23,100,14,19])

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
    if (numeroDeDia === 1 || numeroDeDia === 7)     
   return "Es fin de semana";
      else  return "Es dia Laboral"
 
} 
diaDeLaSemana (1)

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí  
  let m = String (n)
    if (m[0] === "9") {return true}
        else {return false}
  
}
empiezaConNueve (89)

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  return new Set (arreglo).size == 1

} 
todosIguales ([10 , 20 , 30])

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var m = new Array
  for (i = 0 ; i < array.length ; i++)
{
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") { m.push (array[i])}
}   
    if (m.includes ("Enero") && m.includes ("Marzo") && m.includes("Noviembre")) {return m} 
      else return "No se encontraron los meses pedidos" 
     
}
mesesDelAño (["Julio","Marzo","Enero","Febrero","Noviembre","Diciembre"])

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let m = new Array
  for (i = 0 ; i < array.length ; i++)
    if (array[i] > 100)  {m.push (array [i])}

    return m

}
mayorACien ([10, 20 , 50 , 100, 110, 150, 180, 190])

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
    i = new Array
  count = 1
   
  while (count <= 10) {
    if (count === numero) {
      break;
    }
    numero += 2;
    count++;
    i.push(numero);
  }
  if (i.length < 10) {return "Se interrumpió la ejecución"}
  return i
}  
  breakStatement (4)

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  i = new Array
  count = 1
   
  while (count <= 10) {
    if (count === 6) {
      count++
      continue;
    }
    numero += 2;
    count++;
    i.push(numero);
  }
  
  return i
}
continueStatement (4)


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
