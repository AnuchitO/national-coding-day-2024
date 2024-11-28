import { subtotalPrice } from "./cart";

/* console.log(subtotalPrice(999.99, 3).toFixed(2) === "2999.97") */
/* console.log(subtotalPrice(999.99, 2).toFixed(2) === "1999.98") */
/* console.log(subtotalPrice(999.99, 1).toFixed(2) === "999.99") */


// true, true, true. it works! but could be better for readability
// let's refactor the console log to print ✅ PASS or ❌ FAIL instead of true or false

/* console.log(subtotalPrice(999.99, 3).toFixed(2) === "2999.97" ? "✅ PASS" : "❌ FAIL") */
/* console.log(subtotalPrice(999.99, 2).toFixed(2) === "1999.98" ? "✅ PASS" : "❌ FAIL") */
/* console.log(subtotalPrice(999.99, 1).toFixed(2) === "999.99" ? "✅ PASS" : "❌ FAIL") */

// I want to call it like expect(..).toEqual(..)

function expect(actual: any) {
  return {
    toEqual: (expected: any) => {
      if (actual === expected) {
        console.log(" ✅ PASS")
      } else {
        console.log(` ❌ FAIL: want ${expected} but got ${actual}`)
      }
    }
  }
}
