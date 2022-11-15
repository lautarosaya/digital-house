const autos = require("./etapa1");
const autosImportados = require("./etapa1");

const concesionaria = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    for (let i = 0; i < this.autos.length; i++) {
      const miAuto = this.autos[i];
      if (patente == miAuto.patente) {
        return miAuto;
      }
    }
    return null;
  },
  venderAuto: function (patente) {
    let autoVenta = this.buscarAuto(patente);
    if (autoVenta != null) {
      autoVenta.vendido = true;
      return autoVenta;
    } else {
      return null;
    }
  },
  autosParaLaVenta: function () {
    let autosParaLaVenta = this.autos.filter(function (vendido) {
      return !vendido.vendido;
    });
    return autosParaLaVenta;
  },
  autosNuevos: function () {
    let autoNuevo = this.autosParaLaVenta();
  },
};
console.log(concesionaria.autosNuevos());
