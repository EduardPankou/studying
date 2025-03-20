type Product = {
  id?: number
  name?: string
  price: number
}

type DiscountedProduct = Product & {
  discount: number
}

type AvailableProduct = DiscountedProduct | Product

function getDiscountPrice(product: AvailableProduct): number {
  if ('discount' in product) {
    return product.price - product.discount
  }
  return product.price
}

console.log(getDiscountPrice({price: 5}))
console.log(getDiscountPrice({price: 5, discount: 2}))

interface User {
  id: number
  name: string
}
function addedDefaultValuesToUser(user: Partial<User>): User {
  const defaults = {
    id: 0,
    name: "Eduard",
  }
  return {
    ...defaults,
    ...user,
  }
}

type UserName = Pick<User, 'name'>

console.log()

console.log(addedDefaultValuesToUser({}))
console.log(addedDefaultValuesToUser({id: 1}))
console.log(addedDefaultValuesToUser({id: 1, name:'asd'}))
