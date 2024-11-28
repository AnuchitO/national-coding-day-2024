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

// Stub: return a canned value
test("error product not found", () => {
  const stub = {
    search: (productName: string, productId: string) => {
      return null
    }
  }

  try {
    getProductPrice(stub, "Laptop", "LAPTOP-123")
  } catch (error) {
    expect(error.message).toEqual("Product not found")
  }
})

// Stub: return a canned value not null
test("get product price", () => {
  const product: Product = {
    productName: "Laptop",
    productId: "LAPTOP-123",
    price: 999.99
  }

  const stub = {
    search: (productName: string, productId: string) => {
      return product
    }
  }

  const actual = getProductPrice(stub, "Laptop", "LAPTOP-123")
  expect(actual).toEqual(999.99)
})
