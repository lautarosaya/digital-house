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
  totalDeVentas: function () {
    let listaVentas = this.listaDeVentas().reduce(function (acum, num) {
      return acum + num;
    }, 0);
    return listaVentas;
  },
  puedeComprar: function (auto, persona) {
    let precioDeCuotas = auto.precio / auto.cuotas;
    return (
      persona.capacidadDePagoEnCuotas >= precioDeCuotas &&
      persona.capacidadDePagoTotal >= auto.precio
    );
  },
  autosQuePuedeComprar: function (persona) {
    let autosParaLaVenta = this.autosParaLaVenta();
    let puedeComprar = this.puedeComprar;
    let autosPuedeComprar = autosParaLaVenta.filter(function (auto) {
      return puedeComprar(auto, persona);
    });
    return autosPuedeComprar;
  },
};

console.log(
  concesionaria.autosQuePuedeComprar({
    nombre: "Juan",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000,
  })
);
