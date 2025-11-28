# Trabajo Práctico IV – TypeScript  


# Glosario de TypeScript

# 1. Tipos básicos

Definición:
Son los tipos de datos más simples de TypeScript, como string, number y boolean. Sirven para declarar variables con un tipo claro y evitar errores.

Ejemplo:

let productName: string = "Monitor";
let productPrice: number = 120000;
let inStock: boolean = true;

# 2. Tipo Unión (Union Type)

Definición:
Permite que una variable pueda tomar valores de más de un tipo, usando el operador |. Es útil cuando un dato puede representarse de diferentes formas.

Ejemplo:

let productId: string | number;

productId = "COD-001";
productId = 500;

# 3. Interface

Definición:
Una interface define la forma de un objeto: qué propiedades tiene y de qué tipo son. Ayuda a que el código sea más claro y consistente, y a evitar errores cuando trabajamos con muchos objetos similares.

Ejemplo:

interface Product {
  name: string;
  price: number;
}

const teclado: Product = {
  name: "Teclado mecánico",
  price: 25000,
};

# 4. Función tipada

Definición:
Función donde los parámetros y el valor de retorno tienen tipos definidos. Permite detectar errores antes de ejecutar el código y hace más claro qué espera y qué devuelve la función.

Ejemplo:

function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

const nuevoStock = updateStock(10, 5);

# 5. Tipo literal

Definición:
Tipo que restringe una variable a un conjunto de valores exactos (literales). Es muy útil para representar estados fijos o opciones limitadas.

Ejemplo:

type OrderStatus = "pending" | "shipped" | "delivered";

let status: OrderStatus = "pending";
status = "shipped";
// status = "cancelled"; // Esto daría error

# 6. Enum

Definición:
Conjunto de valores con nombre. Sirve para representar opciones posibles de forma clara, en vez de usar números o strings sueltos. Mejora la legibilidad del código.

Ejemplo:

enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

function logMessage(level: LogLevel, message: string): void {
  console.log(`[${level}] ${message}`);
}

logMessage(LogLevel.Info, "Aplicación iniciada");

# 7. Type Assertion (Aserción de tipo)

Definición:
Forma de indicarle al compilador que trate un valor como si fuera de un tipo específico. No cambia el valor en tiempo de ejecución, solo afecta al chequeo de tipos y al autocompletado.

Ejemplo:

const input = document.getElementById("price") as HTMLInputElement;
input.value = "9999";