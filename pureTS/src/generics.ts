const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: string): string {
  return val
}

function identityTwo(val: any): any {
  return val
}

function identityThree<Type>(val: Type): Type {
  return val
}

function identityFour<T>(val: T): T{
  return val
}

interface botle {
  name: string
  type: string
  quantity: number
}

const newBotle = identityFour<botle>({ name: 'ehl', type: 'botle', quantity: 22})
const userIdentity = identityThree<number>(324)

function getSearchProducts<T>(products: T[]): T{
  return products[1]
}

const getMoreSearchProducts = <T,>(products: T[]): T =>{
  return products[1]
}


interface user {
  name: string
  userId: number
}

function identityFive<T, U extends user>(val1: T, val2: U): object {
  return {val1, val2}
}

// identityFive('benki', {name: 'benki', userId: 243})

interface Course {
  name: string
  author: string
  price: number
}
interface Quiz {
  name: string
  type: string
}

class sellItems<T>{
  public cart: T[] = []

  addToCart(product: T, price: number){
    this.cart.push(product)
  }
}