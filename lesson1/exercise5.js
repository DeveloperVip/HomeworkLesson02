const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];
let arr3 = new Set();
arr1.forEach((number) => {
  if (arr2.includes(number) == true) {
    arr3.add(number);
  }
});
console.log([...arr3]);
