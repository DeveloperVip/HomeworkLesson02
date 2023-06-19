const deps = {
  data01: [1, 2, 3, [12, 323]],
  data02: [5, 8, 12],
  data03: [5, 14, 79],
  data04: [3, 64, 105],
};
let myfunc = (deep) => {
  let newArray = [];
  for (let item of Object.values(deep)) {
    for (let element of item) {
      if (Array.isArray(element)) {
        newArray.concat(element);
      } else if (!newArray.includes(element)) {
        newArray.push(element);
      }
    }
  }
  console.log(newArray);
};
myfunc(deps);
