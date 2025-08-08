// FUNCION PARA CALCULAR CONSUMO KWH
function ConsumoKWH(){
    const consumoKWH = 410;
    return consumoKWH;
}
// FUNCION PARA CALCULAR TARIFA BASE
function TarifaBase(){
    const tarifaBase = 620;
    return tarifaBase; 
}
// FUNCION PARA CALCULAR CARGO FIJO
const CargoFijo = function(){
    const cargoFijo = 3500;
    return cargoFijo;
}
// FUNCION PARA CALCULAR IVA    
const Iva = function(){
    const iva = 0.19;
    return iva;
}
// FUNCION PARA CALCULAR SUBTOTAL
const SupTotal  = () => {
    const SupTotal = (ConsumoKWH() * TarifaBase()) ;
    return SupTotal;
}
// FUNCION PARA CALCULAR VALOR IVA
const ValorIva = () => {
    const valorIva = (SupTotal() * Iva());
    return valorIva;
}
// FUNCION PARA CALCULAR TOTAL A PAGAR
const Total = () => {
    const total = (SupTotal() + ValorIva() + CargoFijo());
    return total;
}
// FUNCION PARA IMPRIMIR FACTURA
function ImprimirFactura() {
    console.log( `********** FACTURA **********`)
    console.log( `Consumo KWH: ${ConsumoKWH()}`)
    console.log( `Tarifa Base: ${TarifaBase()}`)
    console.log( `Cargo Fijo: ${CargoFijo()}`)      
    console.log( `Subtotal: ${SupTotal()}`)
    console.log( `IVA: ${ValorIva()}`)  
    console.log( `Total: ${Total()}`)  
    return `Factura impresa correctamente`;
}
// IMPRIMIR FACTURA
ImprimirFactura();
