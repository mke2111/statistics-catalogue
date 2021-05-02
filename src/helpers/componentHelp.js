const getInputHints = (inputValue, objectList) => {
  let keysearch = [];
  if (inputValue.length < 2) { return []; }

  keysearch = objectList.map((obj, idpos) => ({ ...obj, idpos }))
    .filter((asset) => (
      asset.name
        .substr(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()))
    .map((obj) => ({ name: obj.name, idpage: (Math.trunc(obj.idpos / 5) + 1) }));
  return keysearch.slice(0, (keysearch.length >= 5 ? 4 : keysearch.length));
};

const getDate = (date) => `${date.slice(8, 10)
}/${date.slice(5, 7)
}/${date.slice(0, 4)}`;

const textToBigCurrency = (numberText) => {
  let y;
  if (Math.abs(numberText) >= 1.0e+9) {
    y = `${(Math.abs(numberText) / 1.0e+9).toFixed(2)} B`;
  } else if (Math.abs(numberText) >= 1.0e+6) {
    y = `${(Math.abs(numberText) / 1.0e+6).toFixed(2)} M`;
  } else if (Math.abs(numberText) >= 1.0e+3) {
    y = `${(Math.abs(numberText) / 1.0e+3).toFixed(2)} K`;
  } else {
    y = (Math.abs(numberText)).toFixed(2);
  }
  return y;
};

const apiToKey = (api, array) => {
  const result = array.filter((option) => {
    if (option.sort === api) {
      return true;
    }
    return 0;
  });
  if (result.length > 0) { return result[0].key; }
  return array;
};

const isEven = (value) => {
  if (value % 2 === 0) return true;
  return false;
};

export {
  getInputHints, getDate,
  textToBigCurrency,
  apiToKey, isEven,
};
