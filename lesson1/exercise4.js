//way 1
let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];
const newArr = new Set();
arr.forEach((number) => {
  newArr.add(number);
});
console.log([...newArr]);
//way 2
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr.splice(j, 1);
    }
  }
}
console.log(arr);
