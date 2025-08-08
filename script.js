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
    const subtotal = (ConsumoKWH() * TarifaBase()) ;
    return SupTotal;
}

const ValorIva = () => {
    const valorIva = (SupTotal() * Iva());
    return valorIva;
}