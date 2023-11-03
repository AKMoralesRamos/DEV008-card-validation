import validator from "./validator.js";

document.getElementById("botonValidar").addEventListener('click', validarNumero)

function validarNumero () {
  const obtenerNumero = document.getElementById("numero").value;
  if (obtenerNumero.length === "1") {
    return false  
  } else { 
    const tarjetaValida = validator.isValid(obtenerNumero);
    if (tarjetaValida) {
      alert ("Procesando pago, por favor espere...");
      const nuevoNumero = validator.maskify(obtenerNumero);
      document.getElementById("numero").value = nuevoNumero;
    } else {
      alert ("Ingrese un número de tarjeta válido");
    }
  }
} 