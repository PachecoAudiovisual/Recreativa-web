

function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var email = document.querySelector("#email").value;
  var telefono = document.querySelector("#telefono").value;
  var telefono = telefono[0] + "xxxx";
  var bienvenida = document.querySelector("#bienvenida");

  bienvenida.innerHTML =
    "<h3>hola " +
    nombre[0] +
    " tu telefono es " +
    telefono +
    " gracias por tu inscripción</h3>";
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);

var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

console.log(arr[3][0]);

const myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);

const myNuevaArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myNuevaArray.pop();
console.log(removedFromMyArray);

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // quita el primer valor "Stimpson"
ourArray.unshift("Happy"); //agrega este valos al comienzo del arry ['Happy', 'J', 'cat']

console.log(ourArray);

reusableFunction();
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
//llamo a la funcion dentro de la consola

function testFun(hola) {
  console.log(hola);
}

testFun("hola");

function functionWithArgs(one, two) {
  console.log(1 + 2);
  console.log(7 + 9);
}

functionWithArgs();

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);

