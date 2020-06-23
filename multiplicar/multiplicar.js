const fs = require("fs");

let base = 5;
let crearArchivo = (base) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido [ ${base} ] No es numero`);
      return;
    }
    let data = "";
    for (let i = 1; i <= 10; i++) {
      data += ` ${base} x ${i} = ${base * i} \n  `;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) rejects(err);
      else resolve(`tabla-${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
};
