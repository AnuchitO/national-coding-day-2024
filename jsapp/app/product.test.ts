import { getProductPrice, Product } from "./product";

function expect(actual: any) {
  return {
    toEqual: (expected: any) => {
      if (JSON.stringify(actual) === JSON.stringify(expected)) {
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

// Fake: simplified version of the real implementation
const fakeFinder = {
  search: (productName: string, productId: string) => {
    if (productName === "Laptop" && productId === "LAPTOP-123") {
      return {
        productName: "Laptop",
        productId: "LAPTOP-123",
        price: 999.99
      }
    }

    return null
  }
}

test("get product price", () => {
  const actual = getProductPrice(fakeFinder, "Laptop", "LAPTOP-123")

  expect(actual).toEqual(999.99)
})


test("demo fake: get product not found", () => {
  try {
    getProductPrice(fakeFinder, "Laptop", "LAPTOP-321")
  } catch (error) {
    expect(error.message).toEqual("Product not found")
  }
})


// Spy: keep track of the calls made to the function
it("search should have been called once", () => {
  let spyCount = 0
  const stub = {
    search: (productName: string, productId: string) => {
      spyCount++
      return { productName, productId, price: 999.99 }
    }
  }

  const actual = getProductPrice(stub, "Laptop", "LAPTOP-123")

  expect(actual).toEqual(999.99)
  expect(spyCount).toEqual(1)
})

it("should call search with productName and productId", () => {
  let spyArgs: any = []
  const stub = {
    search: (productName: string, productId: string) => {
      spyArgs = [productName, productId]
      return { productName, productId, price: 999.99 }
    }
  }

  const actual = getProductPrice(stub, "Laptop", "LAPTOP-123")

  expect(actual).toEqual(999.99)
  expect(spyArgs).toEqual(["Laptop", "LAPTOP-123"])
})


// Challange: how to make spy more fancy?
// - expect(spy).toHaveBeenCalled()
// - expect(spy).toHaveBeenCalledWith("Laptop", "LAPTOP-123")
