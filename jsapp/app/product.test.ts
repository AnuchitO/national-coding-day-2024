import { getProductPrice, Product } from "./product";

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

function test(title: string, callback: () => void) {
  console.group(title);
  callback();
  console.groupEnd();
}
