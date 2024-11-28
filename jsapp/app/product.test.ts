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


test("error when product name or product id is missing", () => {
  const anything = {
    search: (productName: string, productId: string): Product | null => {
      return null
    }
  }

  try {
    getProductPrice(anything, "", "")
  } catch (error) {
    expect(error.message).toEqual("Product name and product id are required")
  }
})
