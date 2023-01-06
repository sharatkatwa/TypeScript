function addTwo(num: number): number {
  return num + 2
  // return 'hello' --> cannot do this because this function returns only number
}
function getUpper(val: string) {
  return val.toUpperCase()
}

function signupUser(name: string, phno: number, pass: string) {
  return `signup successful with ${name}`
}
let loginUser = (name: string, pass: string, isPaid: boolean = false) => {
  return `login successful with ${name}`
}

// function getValue(myval: number): string{
//   if(myval > 5) return true

//   return 'STATUS OK'
// }

const getHello = (s: string): string => {
  return 'hello'
}

const heros = ['thor', 'spiderman', 'ironman']
// const heros = [1, 2, 3]

heros.map((hero): string => {
  return `hero is ${hero}`
})

function consoleError(errmsg: string): never {
  throw new Error(errmsg)
}

addTwo(4)
getUpper("ds")
signupUser('sj', 324, 'sjpass')
loginUser('h', 'hpass')

export { }