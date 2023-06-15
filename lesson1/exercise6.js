const arr1 = [1, 2, 3, 4, 2, 3, 5, 3, 1, 1, 5, 2, 3];
const myFunc = (array) => {
  let arr3 = new Set();
  for (let i = 0; i < array.length; i++) {
    arr3.add(array[i]);
  }
  return arr3;
};
const arr2 = [...myFunc(arr1)];
console.log(arr2);
