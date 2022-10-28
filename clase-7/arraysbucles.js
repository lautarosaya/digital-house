/* const gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];

function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre[1] +
        unSemestre[2] + unSemestre[3] +
        unSemestre[4] + unSemestre[5];
}
console.log(sumatoriaGananciasSemestre(1));
console.log(sumatoriaGananciasSemestre(2));
console.log(sumatoriaGananciasSemestre(4)); */

/* function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}

console.log(gananciaTotal([20, 25, 56,87])); */

//*Conteos
/* function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length;i++) {
       element = unPeriodo[i];
          if (element > 0) {
              cantidad++
          }
    }
    return cantidad;
  } */

//*Filtrados 
/* const saldosDeMesesConGanancia = unPeriodo => {
    let gananciaArray = [];
    for (let i = 0; i < unPeriodo.length;i++) {
       ganancia = unPeriodo[i];
          if (ganancia > 0) {
            gananciaArray.push(ganancia);            
          }
    }
    return gananciaArray;
}

console.log(saldosDeMesesConGanancia([100, 20, 0, -10, 10])); */

//*Mas conteos
/* const cantidadDeMesesConPerdida = (unPeriodo) => {
    let cantidad = 0;
    let valor = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        valor = unPeriodo[i];
        if (valor < 0) {
            cantidad++
        }
    }
    return cantidad;
}
console.log(cantidadDeMesesConPerdida([100, 20, 0, -10, 10])); */

//*Numeros Impares

/* const numerosImpares = () => {
    let cantidad = 0;
    let num = 1;
    while (cantidad < 20) {
        if (num%2 != 0) {
            console.log(num);
            cantidad++
        }
        num++
    }
}
console.log(numerosImpares()); */
