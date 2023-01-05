let score: number | string = 22
score = "33"

type user= {
  name: string
  id: number
}
type admin = {
  adminName: string
  adminId: number
}
 
let ramesh: admin | user = {name: "ramesh", id: 230}
ramesh = {adminName: 'ramesh', adminId: 22}

// function getDbId(id: number | string){
//   // making some API calls
//   console.log(`DB id is: ${id}`)
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string){

  if(typeof id === 'string'){
    id.toLowerCase()
  }
  else id + 3

}

const data: (number | string)[] = ["1", 2, "3"]

let pi:3.14 = 3.14
pi = 3.14

