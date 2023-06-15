const order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ],
  customer: "Name",
  address: "12 Giai Phong Street",
};
let totalLyMoney = 0;
let totalOfAmount = 0;
let myFunc = (order) => {
  for (let keys in order) {
    if (keys == "cart") {
      for (let i = 0; i < order[keys].length; i++) {
        totalOfAmount += order[keys][i].amount;
        totalLyMoney += order[keys][i].price;
      }
    }
  }
  return [totalOfAmount, totalLyMoney];
};
