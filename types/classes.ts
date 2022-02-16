class UserAccount {
  readonly name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get getName() {
    console.log('---GET---')
    return this.name
  }

  logDetails(): void {
    console.log(`The use ${this.name} are ${this.age} years old. `)
  }

}

const gabi = new UserAccount('Gabi', 29)
console.log(gabi)
console.log(gabi.name)
// console.log(gabi.age)
gabi.logDetails()

console.log((gabi.getName))

class CharAccount extends UserAccount {
  public nickname: string
  readonly level: number

  constructor(nickname: string, level: number, name: string, age: number) {
    super(name, age)
    this.nickname = nickname
    this.level = level
  }

  set setNickname(newNickname: string) {
    this.nickname = newNickname
  }

  logLevel(): void {
    console.log(`This player are ${this.nickname} and have ${this.level} xp  - ${this.age} - ${this.name}`)
  }
}

const hoffmann = new CharAccount('GabiHoffmann', 1000, 'Gabi', 29)
console.log(hoffmann)
console.log(hoffmann.nickname)
console.log(hoffmann.level)
// hoffmann.level = 2000
hoffmann.logDetails()
hoffmann.logLevel()
hoffmann.setNickname = 'HoffmannGabi'
console.log(hoffmann.nickname)


abstract class Persona {
  readonly id: number
  name: string
  age: number

  constructor(i: number, n: string, a: number) {
    this.id = i
    this.name = n
    this.age = a
  }

  showName(): void {
    console.log(`Hello ${this.name}`)
  }
}

// const persona = new Persona //Cannot create a instance of an abstract class

class Student extends Persona {
  classroom: string

  constructor(id: number, name: string, age: number, c: string) {
    super(id, name, age);
    this.classroom = c
  }
}

const Joseph = new Student(1, 'Joseph', 22, '22-B')
Joseph.showName()