let resultado = 0;
let numero1 = NaN;
let numero2 = NaN;

while (isNaN(numero1)) {
  numero1 = parseInt(prompt("Ingrese por favor el numero 1?"));
}

while (isNaN(numero2)) {
  numero2 = parseInt(prompt("Ingrese por favor el numero 2?"));
}

let operacion = prompt("Ingrese la operacion que desea realizar:");

function calcular(numero1, numero2, operacion) {
  switch (operacion) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
    default:
      console.log("Operacion invalida");
      break;
  }
}

function mostrar(resultado) {
  alert("El resultado de la operacion requerida es: " + resultado);
}

calcular(numero1, numero2, operacion);
mostrar(resultado);
