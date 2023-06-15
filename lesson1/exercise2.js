let arr1 = [1, 7, 9, 2, 5, 3, 8],
  arr2 = [0, 0];
let sumMax = 0;
for (let i = 0; i < arr1.length - 1; i++) {
  for (let j = i + 1; j < arr1.length; j++) {
    let sum = arr1[i] + arr1[j];
    if (sum > sumMax) {
      sumMax = sum;
      arr2[0] = arr1[i];
      arr2[1] = arr1[j];
    }
  }
}
console.log(arr2);
