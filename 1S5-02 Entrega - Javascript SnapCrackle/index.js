function snapCrackle(maxValue) {
  let listaNumeros = [];
  let multiploDe5 = "Crackle";
  let numerosImpares = "Snap";
  let imparesMultiplos = "SnapCrackle";
  for (let i = 1; i <= maxValue; i++) {
    if (i % 2 !== 0 && i % 5 === 0) {
      listaNumeros.push(imparesMultiplos);
    } else if (i % 5 === 0) {
      listaNumeros.push(multiploDe5);
    } else if (i % 2 !== 0) {
      listaNumeros.push(numerosImpares);
    } else {
      listaNumeros.push(i);
    }
  }
  return listaNumeros.join(", ");
}
console.log(snapCrackle(29));
