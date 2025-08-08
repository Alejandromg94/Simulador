function ConsumoKWH(){
    const consumoKWH = 410;
    return consumoKWH;
}

function TarifaBase(){
    const tarifaBase = 620;
    return tarifaBase; 
}
const CargoFijo = function(){
    const cargoFijo = 3500;
    return cargoFijo;
}
const Iva = function(){
    const iva = 0.19;
    return iva;
}

const SupTotal  = () => {
    const SupTotal = (ConsumoKWH() * TarifaBase()) ;
    return SupTotal;
}

const ValorIva = () => {
    const valorIva = (SupTotal() * Iva());
    return valorIva;
}

const Total = () => {
    const total = (SupTotal() + ValorIva() + CargoFijo());
    return total;
}

function ImprimirFactura() {
    console.log( `Consumo KWH: ${ConsumoKWH()}`)
    console.log( `Tarifa Base: ${TarifaBase()}`)
    console.log( `Cargo Fijo: ${CargoFijo()}`)      
    console.log( `Subtotal: ${SupTotal()}`)
    console.log( `IVA: ${ValorIva()}`)  
    console.log( `Total: ${Total()}`)   
    return `Factura impresa correctamente`;

}

ImprimirFactura();
