const fs = require("fs");
const path = require("path");
function importBicis() {
  let archivoJSON = fs.readFileSync(
    path.join(__dirname, "bicicletas.json"),
    "utf-8"
  );
  const bicicletas = JSON.parse(archivoJSON);
  return bicicletas;
}
module.exports = importBicis;
