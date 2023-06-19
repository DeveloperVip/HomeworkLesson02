let order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ],
  customer: "Name",
  address: "12 Giai Phong Street",
};
//* 	Please use only reduce method, and only one time, and return 2 variables:
//* totalOfMoney = 1870000, totalOfAmount = 14;

const { cart } = order;
let total = cart.reduce(
  (variable, cart) => {
    return [variable[0] + cart.amount * cart.price, variable[1] + cart.amount];
  },
  [0, 0]
);
console.log(total);
