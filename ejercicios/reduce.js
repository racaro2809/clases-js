const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const valorInicial = 0;
const sumatoria = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  valorInicial
);

console.log(sumatoria);