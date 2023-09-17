console.log(`Exporting...`);

const shoppingCart = 20;
const Cart = [];

export const addToCart = function (product, quantity) {
  Cart.push({ product, quantity });
  console.log(`${quantity} ${product} Was Added To The Cart`);
};

export { Cart, shoppingCart };
