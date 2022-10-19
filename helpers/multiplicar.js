const fs = require("fs");
var colors = require("colors");

/*ASYNC REGRESA UNA PROMESA POR DEFECTO, CUALQUIER FUNCION QUE TENGA ESTO. */

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  //el igual dentro del parámetro es un valor default.

  try {
    let salida = '';
    let consola = '';
    for (let index = 1; index <= hasta; index++) {
      salida += `${base} x ${index} = ${base * index} \n`;

      consola += `${base} ${"x".blue} ${index} ${"=".blue} ${colors.yellow.bold(
        base * index
      )} \n`;
    }

    if (listar) {
      console.log("============".rainbow);
      console.log("Tabla del ".green.bold, base);
      console.log("============".rainbow);
      console.log(`${consola}`);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base} creado`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
