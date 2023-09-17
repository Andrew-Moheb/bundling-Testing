import '/exportApi.js';

console.log(`Importing...`);

import * as mainObj from '/exportApi.js';

mainObj.addToCart('andrew', 20);
const a = mainObj.Cart;
//
console.log(a);

import sum from 'lodash-es/sum.js';

const array = [10, 10, 10];
console.log(sum(array));

// if (module.hot) {
//   module.hot.accept();
// }
