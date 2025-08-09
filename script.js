// FUNCIÓN PARA CALCULAR CONSUMO KWH
function consumoKwh() {
    const consumoKwh = 410;
    return consumoKwh;
}

// FUNCIÓN PARA CALCULAR TARIFA BASE
function tarifaBase() {
    const tarifaBase = 620;
    return tarifaBase;
}

// FUNCIÓN PARA CALCULAR CARGO FIJO
const cargoFijo = function() {
    const cargoFijo = 3500;
    return cargoFijo;
}

// FUNCIÓN PARA CALCULAR IVA    
const iva = function() {
    const iva = 0.19;
    return iva;
}

// FUNCIÓN PARA CALCULAR SUBTOTAL
const subtotal = () => {
    const subtotal = (consumoKwh() * tarifaBase());
    return subtotal;
}

// FUNCIÓN PARA CALCULAR VALOR IVA
const valorIva = () => {
    const valorIva = (subtotal() * iva());
    return valorIva;
}

// FUNCIÓN PARA CALCULAR TOTAL A PAGAR
const total = () => {
    const total = (subtotal() + valorIva() + cargoFijo());
    return total;
}

// FUNCIÓN PARA IMPRIMIR FACTURA
function imprimirFactura() {
    console.log(`********** FACTURA **********`);
    console.log(`Consumo KWH: ${consumoKwh()}`);
    console.log(`Tarifa Base: ${tarifaBase()}`);
    console.log(`Cargo Fijo: ${cargoFijo()}`);      
    console.log(`Subtotal: ${subtotal()}`);
    console.log(`IVA: ${valorIva()}`);  
    console.log(`Total: ${total()}`);  
    return "Factura impresa correctamente";
}

// IMPRIMIR FACTURA
imprimirFactura();