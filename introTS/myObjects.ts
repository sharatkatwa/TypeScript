// const User = {
//   name: 'sharat',
//   email: 's@s.com',
//   isPaid: false
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: 'hitesh', isPaid: false, email: 's@s.com'}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//   return {name: 'react', price: 499}
// }

// type User = {
//   name: string
//   email: string
//   isActive: boolean
// }
// function createUser(user: User): User{
//   return {name: "", email: "", isActive: true}
// }
// createUser({name: "", email: "", isActive: false})

type User = {
  readonly _id: string | number
  name: string
  email: string
  isActive: boolean
  creditcardDetails?: number // here ? is set this property as optional
}

let newUser: User = {
  name: 'h',
  email: 'h@h.com',
  isActive: true,
  _id: 'xyzxyz'
}

type cardNumber = {
  cardnumber: number
}
type cardName = {
  cardname: string
}
type cardDate = {
  carddate: string
}

type cardDetails = cardNumber & cardName & cardDate & {
  cvv: number
}

newUser.name = 'sharat' // assignable
// newUser._id = 3429423 // not assignable because of readonly property


export {}