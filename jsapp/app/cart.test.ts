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

/* expect(subtotalPrice(999.99, 3).toFixed(2)).toEqual("2999.97") */
/* expect(subtotalPrice(999.99, 2).toFixed(2)).toEqual("1999.98") */
/* expect(subtotalPrice(999.99, 1).toFixed(2)).toEqual("999.99") */

// can we add more context and groupping to the test?

function test(title: string, callback: () => void) {
  console.group(title);
  callback();
  console.groupEnd();
}

test("should calculate subtotal price correctly", () => {
  const want = "2999.97"

  const actual = subtotalPrice(999.99, 3).toFixed(2)

  expect(actual).toEqual(want)
})

// Challenge: write your own test with you own style for the following functions:
// 1. test discountedPrice function
// 2. products.ts getProductPrice function

// Optional Challenge: write tests for the following functions:
// - test totalPrice function
// - test totalProducts function
// - test totalItems function
