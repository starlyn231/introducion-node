// Load the full build.
var _ = require("lodash");
//importar yargs
const argv = require("yargs");

console.log(argv.argv);
//let argv2 = process.argv[2];

if (argv.usuario === "MitoCode") {
  let x = { nombre: "starlyn" };
  let y = { apodo: "Taly" };
  let z = [
    { nombre: "Starlyn", apellido: "Fernandez", edad: 32 },
    { nombre: "Marcos", apellido: "Marte", edad: 25 },
  ];

  //let resultado = _.assign(x, y);
  //console.log(resultado);

  //si quieres respetir una funciona N cantidad de veces, con LODASH lo puedes hacer

  //_.times(5, () => console.log("En esta vuelta aprendemos NODE JS"));

  let resultado = _.find(z, { nombre: "Starlyn" });
  console.log(resultado);
  //console.log(argv2);
} else {
  console.log("Usuario Invalido");
}
