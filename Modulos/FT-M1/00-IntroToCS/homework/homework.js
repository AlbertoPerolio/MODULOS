function BinarioADecimal(num) {
  //tu codigo aca

  let resultado = 0;

  for (let i = 0; i < num.length; i++) {
    resultado = resultado * 2 + Number(num[i]);
  }

  return resultado;
}
function DecimalABinario(num) {
  // tu codigo aca
  let resultado = "";

  while (num > 0) {
    resultado = (num % 2) + resultado;
    num = Math.floor(num / 2);
  }

  return resultado;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
