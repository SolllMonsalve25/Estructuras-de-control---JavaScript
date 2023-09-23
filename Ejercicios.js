/*EJERCICIO 1: 
Programa que dada la edad de una persona indique si es mayor o menor de edad

var edad = prompt("Escribe tu edad");
edad = parseInt(edad);
if (edad >=18) {
    alert("Eres mayor de edad");
}
else{
    alert("Eres menor de edad");
} */

/*EJERCICIO 2: Dadas las 3 calificaciones el estudiante obtuvo en un curso:
A. Determinar su promedio
B. Indicar si el estudiante aprobo o no el curso

var calificacion1 = prompt("Ingrese la primera calificacion:");
var calificacion2 = prompt("Ingrese la segunda calificacion");
var calificacion3 = prompt("Ingrese la tercera calificacion");
calificacion1 = parseFloat(calificacion1);
calificacion2 = parseFloat(calificacion2);
calificacion3 = parseFloat(calificacion3);
if (calificacion1 >= 1 && calificacion1 <= 10 &&
    calificacion2 >= 1 && calificacion2 <= 10 &&
    calificacion3 >= 1 && calificacion3 <= 10)
    {
        var promedio = (calificacion1 + calificacion2 + calificacion3) / 3;
        if (promedio > 6) {
            alert("El estudiante aprobo con un promedio de " + promedio.toFixed(1));
        }
        else {
            alert("El estudiante no aprobo con un promedio de " + promedio.toFixed(1));
        }
    }
    else{
        alert("Por favor ingrese el valor de las calificaciones");
    }
    */

/*EJERCICIO 3: Dados 2 numeros A y B, determinar si A es mayor, menor o igual que B*/





 /*EJERCICIO 4: Que lea dos numeros y los imprima en forma ascendente

    var numero1 = parseFloat(prompt("Ingrese el primer numero:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo numero"));
    var numeros = [numero1, numero2];
    numeros.sort(function(a, b) {
        return a - b;
    });
    alert("los numeros en orden ascendente son: " + numeros[0] + "y" + numeros[1]);*/



/*EJERCICIO 5: Dado el peso de una persona:
    A. Si es peso es menor o igual a 40 y logramos que muestre el mensaje "Persona baja de peso"
    B. Si el peso es entre 41kg  y 70kg, muestre el mensaje "Persona en peso promedio"
    C. Si el peso es mayor a 71kg. muestre el mensaje "Persona con sobrepeso"

    var peso = parseInt(prompt("Ingrese su peso en Kg"));
    if (peso <= 40) {
        alert("Persona baja de peso.");
    }
    else if(peso >= 41 && peso <= 70) {
        alert("persona peso promedio");
    }
    else if(peso > 70) {
        alert("Persona con sobrepeso.");
    }
    else{
        alert("Valor ingresado no valido");
    }
    */

 /*EJERCICIO 6:

    var numero = parseInt(prompt("Por favor ingrese un numero del 1 al 7"));
    var diasSemanas = ["Lunes", "Martes", "MIercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    var dia = diasSemanas[numero - 1];
    alert("El dia correspondiente al numero " + numero + " es " + dia + " . ");
    */

/*EJERCICIO 7:*/

var compra = parseInt(prompt("ingrese el valor de la compra"));
if (compra >1000) {
    alert("La persona recibira un descuento del 20% por su compra");
}
else if(compra < 1000) {
    alert("La persona recibira un 5% de descuento por su compra.");
}
else{
    alert("Valor ingresado no valido");
}