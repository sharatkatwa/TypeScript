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