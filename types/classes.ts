class UserAccount {
  readonly name: string;
  private age: number;

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
  private nickname: string
  readonly level: number

  constructor(nickname: string, level: number, name: string, age: number) {
    super(name, age)
    this.nickname = nickname
    this.level = level
  }

  logLevel(): void {
    console.log(`This player are ${this.nickname} and have ${this.level} xp  - ${this.age} - ${this.name}`)
  }
}

const hoffmann = new CharAccount('GabiHoffmann', 1000, 'Gabi', 29)
console.log(hoffmann)
console.log(hoffmann.nickname)
console.log(hoffmann.level)
hoffmann.level = 2000
hoffmann.logDetails()
hoffmann.logLevel()