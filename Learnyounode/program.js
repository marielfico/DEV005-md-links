
// const arrayNum=process.argv;
// let sum=0;
// for(let i=2; i<arrayNum.length; i++){
//     sum += Number(arrayNum[i]) ;
// }
// console.log(sum);

//EJERCICIO #3
const fs = require('fs');
const texto=fs.readFileSync(process.argv[2]).toString().split('\n').length-1;
console.log(texto);

//EJERCICIO #4


