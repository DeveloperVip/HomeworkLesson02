const arr1 = [1, 7, 9, 2, 5, 3, 8];
const sum = (a, b) => a + b;
for (let i = 0; i < arr1.length - 1; i++) {
  for (let j = i + 1; j < arr1.length; j++) {
    if (sum(arr1[i], arr1[j]) == 10) {
      console.log([arr1[i], arr1[j]]);
    }
  }
}
