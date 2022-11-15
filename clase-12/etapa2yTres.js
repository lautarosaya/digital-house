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
    const prueba = autoNuevo.filter(function (kilometros) {
      return kilometros.km < 100;
    });
    return prueba;
  },
  listaDeVentas: function () {
    let autosVendidos = this.autos.filter(function (vendidos) {
      return vendidos.vendido == true;
    });
    let listaVendidos = autosVendidos.map(function (precio) {
      return precio.precio;
    });
    return listaVendidos;
  },
};
console.log(concesionaria.listaDeVentas());
