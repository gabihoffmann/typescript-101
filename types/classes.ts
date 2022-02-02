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