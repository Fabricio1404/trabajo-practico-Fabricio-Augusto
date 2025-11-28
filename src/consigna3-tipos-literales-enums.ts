type OrderStatus = "pending" | "shipped" | "delivered";

let orderStatus: OrderStatus = "pending";
console.log("Estado inicial de la orden:", orderStatus);

orderStatus = "shipped";
console.log("Estado actualizado de la orden:", orderStatus);

orderStatus = "delivered";
console.log("Estado final de la orden:", orderStatus);

enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

function logMessage(level: LogLevel, message: string): void {
  const output = `[${level}] ${message}`;
  console.log(output);
}

logMessage(LogLevel.Info, "El sistema se inició correctamente.");
logMessage(LogLevel.Warning, "El stock está por debajo del mínimo recomendado.");
logMessage(LogLevel.Error, "Error al conectar con la base de datos.");
