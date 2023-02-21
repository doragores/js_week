const User = require('/Users/doragores/Code/Makers/JS_week/Phase_1/User.js');
const user = new User('Uma');

class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map(user => user.getName());
  }

  getIntroductions() {
    return this.users.map(user => user.getIntroduction());
  }
}

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

const userBase = new UserBase(users);
console.log(userBase.count()); // Output: 3
console.log(userBase.getNames()); // Output: ["Uma", "Josh", "Ollie"]
console.log(userBase.getIntroductions()); // Output: ["Hi, my name is Uma", "Hi, my name is Josh", "Hi, my name is Ollie"]