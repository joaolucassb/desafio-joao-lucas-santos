import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

const caixaDaLanchonete = new CaixaDaLanchonete();
const resultaddo = caixaDaLanchonete.calcularValorDaCompra('dinheiro', ['cafe,1','chantily,1']);
console.log(resultaddo);
