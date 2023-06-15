const arr1 = [
  { make: "audi", model: "r8", year: "2012" },
  { make: "audi", model: "rs5", year: "2013" },
  { make: "ford", model: "mustang", year: "2012" },
  { make: "ford", model: "fusion", year: "2015" },
  { make: "kia", model: "optima", year: "2012" },
];
let arr2 = {};
for (const infor of arr1) {
  let makes = infor.make;
  if (arr2[makes]) {
    arr2[makes].push(infor);
  } else {
    arr2[makes] = [infor];
  }
}
console.log(arr2);
