// class User {
//   email: string
//   name: string
//   private readonly city: string = 'bangalore'
//   constructor(name: string, email: string){
//     this.email = email
//     this.name = name
//   }
// }

// const sharat = new User('sharat', 's@s.com')
// // sharat.city


class User {
  protected _courseCount = 1

  private readonly city: string = 'bangalore'
  constructor(public name: string, public email: string){
  }
  get getAppleEmail(): string {
    return `apple${this.email}`
  }

  private tokenDelete(){
    console.log('token deleted')
  }

  get courseCount(): number {
    return this._courseCount
  }

  set courseCount(courseNum){
    if(courseNum <= 1){
      throw new Error('Course count should be more than 1')
    }
    this._courseCount = courseNum
  }

}

class subUser extends User {
  isFamily: boolean = true
  changeCourseCount(){
    this._courseCount = 4
  }
}

const sharat = new User('sharat', 's@s.com')
// sharat.city
// sharat.tokenDelete()