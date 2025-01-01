console.log("¡Hola Mundo!");

// Pedir al usuario que elija un número entre 1 y 10
let numero = parseInt(prompt("Elige un número del 1 al 10:"));

// Crear un objeto con los números en inglés
const numerosEnIngles = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "eleven"
};

// Verificar si el número está entre 1 y 10
if (numero >= 1 && numero <= 10) {
  // Mostrar el número en inglés
  console.log("El número en inglés es: " + numerosEnIngles[numero]);
} else {
  // Mensaje en caso de que el número no esté entre 1 y 10
  console.log("Por favor, elige un número válido entre 1 y 10.");
}