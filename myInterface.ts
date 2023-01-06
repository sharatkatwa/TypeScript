interface User {
  name: string,
  id: number,
  readonly dbId: number
  googleId?: number
  // startTrail: () => string
  startTrail(): string
  getCoupon?(couponname:string, value: number): number
}

interface User{
  githubToken: string
}

interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const Sharat: Admin = { name: "sharat", id: 203, dbId: 943, startTrail:() =>{
  return "string"
},
getCoupon: (name: "sharat10", off: 10) => {
  return 10
},
githubToken: 'github',
role: 'admin'


}



export {}