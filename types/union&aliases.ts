type ID = number | string
//A union is a type formed by two types or more
function printId(id: ID) {
  console.log(`Your ID is ${id}`)
}
printId(1)// Your ID is 1
printId('1')// Your ID is 1

//when use the same type more than once, use a refer by alias
function printInfo(id: ID, item: string) {
  console.log(`A product ${item} has ID: ${id}`)
}

type Platform = 'Windows' | 'Linux' | 'MacOS'

function renderPlatform(platform: Platform) {
  return platform
}

renderPlatform('Windows')

type AccountInfo = {
  id: number,
  name: string,
  email?: string
}
// A optional properties means the type can be undefined
const account: AccountInfo = {
  id: 123,
  name: "Gabriella"
}

type CharInfo = {
  nickname: string,
  level: number
}

type PlayerInfo = AccountInfo & CharInfo //intersection

const player: PlayerInfo = {
  name: 'Gabriella',
  nickname: 'Gabi',
  id: 123,
  level: 1000
}