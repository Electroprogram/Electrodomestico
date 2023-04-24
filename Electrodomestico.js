var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(paramnombre, parampPrecioBase, paramColor, ParamConsumoEnergetico, ParamPeso) {
        this.nombre = paramnombre;
        this.precioBase = parampPrecioBase;
        this.color = paramColor;
        this.consumoEnergetico = ParamConsumoEnergetico;
        this.peso = ParamPeso;
    }
    Electrodomestico.prototype.setNombre = function (paramnombre) {
        this.nombre = paramnombre;
    };
    Electrodomestico.prototype.getNombre = function () {
        return this.nombre;
    };
    Electrodomestico.prototype.setPrecioBase = function (paramPrecioBase) {
        this.PrecioBase = paramPrecioBase;
    };
    Electrodomestico.prototype.getPrecioBase = function () {
        return this.PrecioBase;
    };
    Electrodomestico.prototype.setColor = function (paramColor) {
        this.PrecioColor = paramColor;
    };
    Electrodomestico.prototype.getColor = function () {
        return this.Color;
    };
    Electrodomestico.prototype.setPeso = function (paramPeso) {
        this.PrecioColor = paramPeso;
    };
    Electrodomestico.prototype.getPeso = function () {
        return this.Peso;
    };
    Electrodomestico.prototype.setConsumoEnergetico = function (paramConsumoEnergetico) {
        this.ConsumoEnergetico = paramConsumoEnergetico;
    };
    Electrodomestico.prototype.getConsumoEnergetico = function () {
        return this.ConsumoEnergetico;
    };
    Electrodomestico.prototype.esBajoConsumo = function () {
        var consumo = false;
        if (this.ConsumoEnergetico > 100) {
            consumo = false;
        }
        else {
            consumo = true;
        }
        return consumo;
    };
    Electrodomestico.prototype.calcularBalance = function () {
        var balance = this.precioBase / this.peso;
        return balance;
    };
    Electrodomestico.prototype.esDeAltaGama = function () {
        var altaGama = false;
        if (this.calcularBalance() > 3) {
            altaGama = true;
        }
        return altaGama;
    };
    return Electrodomestico;
}());
var Electrodomestico1 = new Electrodomestico("Heladera", 80000, 'Gris', 80, 80);
var Electrodomestico2 = new Electrodomestico("Multiprocesadora", 15000, 'Negro', 3, 15);
var Electrodomestico3 = new Electrodomestico("cafetera", 15000, 'Blanca', 8, 5);
//Electrodomestico1
console.log(Electrodomestico1);
console.log(Electrodomestico1.esBajoConsumo()); //nombre de la instancia.funcionabilidad para ver la funcionabilidad que queramos de la instancia
console.log(Electrodomestico1.calcularBalance());
console.log(Electrodomestico1.esDeAltaGama());
var Consumo1 = Electrodomestico1.getConsumoEnergetico();
console.log(Consumo1);
var Precio = Electrodomestico1.getPrecioBase();
console.log(Precio);
//Electrodomestico2
console.log(Electrodomestico2);
console.log(Electrodomestico2.esBajoConsumo());
console.log(Electrodomestico2.CalcularBalance());
console.log(Electrodomestico2.esDeAltaGama());
var bajoConsumo2 = Electrodomestico2.getConsumoEnergetico();
console.log(bajoConsumo2);
var precio2 = Electrodomestico2.getPrecioBase();
console.log(precio2);
//Electrodomestico3
console.log(Electrodomestico3);
console.log(Electrodomestico3.Color());
console.log(Electrodomestico3.Peso());
console.log(Electrodomestico3.esDeAltaGama());
var Color = Electrodomestico3.getColor();
console.log(Color);
var Peso = Electrodomestico3.getPeso();
console.log(Peso);
var gamma = Electrodomestico3.getConsumoEnergetico();
