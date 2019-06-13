const bcrypt = require("bcrypt");

const isInObject = (obj, arr) => {
  for (let u = 0; u < arr.length; u++) {
    const element = arr[u];
    if (!obj.hasOwnProperty(element)) return element;
  }
  return true;
};

const Decrypt = async pass => await bcrypt.hashSync(pass, 10);

module.exports = {
  isInObject,
  Decrypt
};
