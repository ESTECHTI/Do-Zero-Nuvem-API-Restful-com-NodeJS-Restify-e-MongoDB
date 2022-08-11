"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
const argv = require('yargs').demandOption('num').argv;
console.log("n-fatorial");
// console.log(`Executando o script a partir do diretório ${process.cwd()}`)
// process.on('exit', () => {
//   console.log('script está preste a terminar')
// })
const num = argv.num;
console.log(`O fatorial de ${num} é igual a ${fatorial_1.fatorial(num)}`);
//# sourceMappingURL=main.js.map