let productName: string = "Teclado mecánico RGB";
let productPrice: number = 25999.99;

let productId: string | number;

productId = "PROD-001";
console.log("productId como string:", productId, "- typeof:", typeof productId);

productId = 1001;
console.log("productId como number:", productId, "- typeof:", typeof productId);

interface Product {
  name: string;
  price: number;
}

const myProduct: Product = {
  name: "Mouse gamer inalámbrico",
  price: 18999.5,
};

console.log("productName:", productName);
console.log("productPrice:", productPrice);
console.log("myProduct:", myProduct);
