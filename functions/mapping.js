const YAML = require("js-yaml");
const fs = require("fs");

const path = "./";

module.exports = () => {
  let functions = "";
  let files = fs.readdirSync(path);

  files.forEach(function (file) {
    if (file.match(".yml")) {
      functions += fs.readFileSync(path + file);
    }
  }, this);

  return YAML.safeLoad(functions, "utf8");
};
