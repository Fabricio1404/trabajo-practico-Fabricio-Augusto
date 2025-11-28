function updateStock(currentStock: number, quantityChange: number): number {
  const newStock = currentStock + quantityChange;
  return newStock;
}

const stockInicial: number = 20;

const cantidadIngresada: number = 15;
const stockDespuesDeIngreso = updateStock(stockInicial, cantidadIngresada);
console.log("Stock inicial:", stockInicial);
console.log("Ingreso de productos:", cantidadIngresada);
console.log("Stock luego del ingreso:", stockDespuesDeIngreso);

const cantidadVendida: number = -7;
const stockFinal = updateStock(stockDespuesDeIngreso, cantidadVendida);
console.log("Venta de productos:", -cantidadVendida);
console.log("Stock final:", stockFinal);
