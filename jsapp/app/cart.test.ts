import { subtotalPrice } from "./cart";

console.log(subtotalPrice(999.99, 3).toFixed(2) === "2999.97")
console.log(subtotalPrice(999.99, 2).toFixed(2) === "1999.98")
console.log(subtotalPrice(999.99, 1).toFixed(2) === "999.99")
