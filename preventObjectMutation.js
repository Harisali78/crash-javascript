function freezeObj() {
  "use strict";
  const Math_CONSTANT = {
    PI: 3.14,
  };
  Object.freeze(Math_CONSTANT);
  try {
    Math_CONSTANT.PI = 99;
  } catch (exception) {
    console.log(exception);
  }
  return Math_CONSTANT.PI;
}
const PI = freezeObj();
console.log(PI);
// to prevent this PI from mutation, use Object freeze method
