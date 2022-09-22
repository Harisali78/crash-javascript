const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  //   s = [2, 7, 5]; // it is not possible to mutate array declared with const
  s[0] = 5;
  s[1] = 7;
  s[2] = 2;
}
editInPlace();
console.log(s);
