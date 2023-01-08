interface user {
  name:string
  email: string
  normalUser: boolean
  
}
 interface admin {
  name:string
  email:string
  isAdmin: boolean
 }

 function AdminAccount(account: user | admin) {
    if("isAdmin" in account){
      return account.isAdmin
    }
    return account.normalUser
 }

 function getDateOrString(bot: Date | string){
  if(bot instanceof Date) return bot
  return 'this is not a date'
 }

 type Fish = {swim: ()=>void}
 type Bird = {fly: ()=>void}

 function isFish(pet: Fish | Bird): pet is Fish{
  return (pet as Fish).swim !== undefined
 }

 function getFood(pet: Fish | Bird){
  if(isFish(pet)){
    pet
    return 'fish food'
  }
  pet
  return 'bird food'
 }


 interface Circle {
  kind: 'circle'
  radius: number
 }
 interface Square {
   kind: 'square'
   side: number
 }
 interface Rectangle {
  kind: 'rectangle'
  length: number
  width: number
 }

 type shape = Circle | Square | Rectangle

 function getRectangleRadius(shape: shape){
  if(shape.kind === 'rectangle'){
    return shape.length * shape.width 
  }
  return 'this is not a rectangle'
 }

 function getAria(shape: shape){
   switch(shape.kind){
    case 'circle': return Math.PI * shape.radius * 2
    
    case 'square': return shape.side * shape.side
    
    case 'rectangle': return shape.length * shape.width
    
    default: const _defaultShape: never = shape
      return _defaultShape
  
  }
 }