class Electrodomestico{
[x: string]: any;
public nombre: string;
public precioBase: number;
public color: string;
public consumoEnergetico: number;
public peso:number;

constructor(paramnombre:string,parampPrecioBase,paramColor,ParamConsumoEnergetico,ParamPeso,){
    this. nombre = paramnombre
    this. precioBase = parampPrecioBase
    this. color = paramColor
    this. consumoEnergetico = ParamConsumoEnergetico
    this. peso = ParamPeso
}

public setNombre (paramnombre:string):void{
    this. nombre = paramnombre

}

public getNombre(): string{
    return  this. nombre
}


public setPrecioBase (paramPrecioBase:string):void{
    this. PrecioBase = paramPrecioBase
}

public getPrecioBase(): string{
    return  this. PrecioBase
}

public setColor (paramColor:string):void{
    this. PrecioColor = paramColor
}
public getColor(): string{
    return  this. Color
}

public setPeso (paramPeso:string):void{
    this. PrecioColor = paramPeso
}
public getPeso(): string{
    return  this. Peso
}

public setConsumoEnergetico (paramConsumoEnergetico:string):void{
    this. ConsumoEnergetico = paramConsumoEnergetico
}
public getConsumoEnergetico(): string{
    return  this.ConsumoEnergetico
}

public esBajoConsumo():boolean{
    let consumo:boolean = false;
    if (this. ConsumoEnergetico>100){
        consumo= false
        }else{
        consumo=true;
    }
    return consumo
    
}
public calcularBalance (): number{
    let balance:number = this.precioBase/this.peso
    return balance;

}
public esDeAltaGama():boolean{
    let altaGama:boolean=false;
    if (this.calcularBalance()>3){
        altaGama=true
    }
    return altaGama
}
}

let Electrodomestico1:Electrodomestico = new Electrodomestico ("Heladera",80000,'Gris',80,80)
let Electrodomestico2:Electrodomestico = new Electrodomestico ("Multiprocesadora",15000,'Negro',3,15)
let Electrodomestico3:Electrodomestico = new Electrodomestico ("cafetera",15000,'Blanca',8,5)

//Electrodomestico1
console.log (Electrodomestico1)


console.log (Electrodomestico1.esBajoConsumo());//nombre de la instancia.funcionabilidad para ver la funcionabilidad que queramos de la instancia
console.log (Electrodomestico1.calcularBalance());
console.log (Electrodomestico1.esDeAltaGama());

let Consumo1:string = Electrodomestico1.getConsumoEnergetico()
console.log (Consumo1);

let Precio :string = Electrodomestico1.getPrecioBase()
console.log (Precio)
//Electrodomestico2
console.log (Electrodomestico2)

console.log (Electrodomestico2.esBajoConsumo());
console.log (Electrodomestico2.CalcularBalance());
console.log (Electrodomestico2.esDeAltaGama());

let bajoConsumo2:string = Electrodomestico2.getConsumoEnergetico()
console.log (bajoConsumo2);

let precio2:string = Electrodomestico2.getPrecioBase()
console.log (precio2);

//Electrodomestico3

console.log(Electrodomestico3);

console.log (Electrodomestico3.Color());
console.log (Electrodomestico3.Peso());
console.log (Electrodomestico3.esDeAltaGama());

let Color:string =Electrodomestico3.getColor()
console.log (Color);

let Peso:string= Electrodomestico3.getPeso()
console.log(Peso);

let gamma: string = Electrodomestico3.getConsumoEnergetico()





