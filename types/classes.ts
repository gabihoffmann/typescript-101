class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The use ${this.name} are ${this.age} years old. `)
  }
}

const gabi = new UserAccount('Gabi', 29)
console.log(gabi)
console.log(gabi.name)
gabi.logDetails()

class CharAccount extends UserAccount {
  nickname: string
  level: number

  constructor(nickname: string, level: number, name: string, age: number) {
    super(name, age)
    this.nickname = nickname
    this.level = level
  }

  logLevel(): void {
    console.log(`This player are ${this.nickname} and have ${this.level} xp`)
  }
}

const hoffmann = new CharAccount('GabiHoffmann', 1000, 'Gabi', 29)
console.log(hoffmann)
console.log(hoffmann.nickname)
hoffmann.logDetails()
hoffmann.logLevel()