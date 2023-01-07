"use strict";
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
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = 'bangalore';
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    tokenDelete() {
        console.log('token deleted');
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const sharat = new User('sharat', 's@s.com');
// sharat.city
// sharat.tokenDelete()
