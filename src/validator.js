const validator = {
  isValid(numeroCorrecto){
   
    const numeroCorrectoReverse = numeroCorrecto.split("").reverse();
    for (let i = 0; i < numeroCorrectoReverse.length; i++) {
      if (i % 2 !== 0) { 
        numeroCorrectoReverse[i] = parseInt(numeroCorrectoReverse[i]) * 2;
      }
    }
    
    
    for (let i = 0; i < numeroCorrectoReverse.length; i++) {
      if (numeroCorrectoReverse[i] >= 10) {
        const suma = Math.floor(numeroCorrectoReverse[i] / 10) + (numeroCorrectoReverse[i] % 10);
        numeroCorrectoReverse[i] = suma;
      }
    }
    
    let sumaTodo = 0;
    for( let i = 0; i < numeroCorrectoReverse.length; i++) {
      sumaTodo += parseInt(numeroCorrectoReverse[i]);
    }
    if (sumaTodo % 10 === 0) {
      /* console.log(true); */
      return true;
    } else {
      /*  console.log(false); */
      return false;  
    }
  },

  maskify(numTarjeta) {
    const nuevoNumero = numTarjeta.toString();
    if (nuevoNumero.length === 1) {
      return nuevoNumero.toString();
    }
    const numeroModificado = '#'.repeat(nuevoNumero.length - 4);
    const numeroGato = numeroModificado + nuevoNumero.slice(-4);
    return numeroGato;
  }  
};

export default validator;
