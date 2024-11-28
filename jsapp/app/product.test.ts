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


// Dummy: just make the code compile
test("error when product name or product id is missing", () => {
  const dummy = {
    search: null
  }

  try {
    getProductPrice(dummy, "", "")
  } catch (error) {
    expect(error.message).toEqual("Product name and product id are required")
  }
})
