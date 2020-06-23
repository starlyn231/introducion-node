const argv = require("yargs").command(
  "Listar",
  "Imprime en consola la tabla de multiplicar",
  {
    base: {
      demamd: true,
      alias: "b",
    },
  }
).argv;

const { crearArchivo } = require("./multiplicar/multiplicar");
let base = 11;
let argv2 = process.argv;

console.log(argv.base);

/*
crearArchivo(base)
  .then((archivo) => console.log(`Archivo Creado ${archivo}`))
  .catch((e) => console.log(e));
*/
