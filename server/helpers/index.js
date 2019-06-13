const isInObject = (obj, arr) => {
  for (let u = 0; u < arr.length; u++) {
    const element = arr[u];
    if (!obj.hasOwnProperty(element)) return element;
  }
  return true;
};

module.exports = {
  isInObject
};
