import { platform } from "os"

//Interface
interface Game {
  title: string
  description?: string
  readonly genre: string
  platform: string[]
  getSimilar: (title: string) => void
}

const myGame: Game = {
  title: 'Spider Solitaire',
  description: 'A card game',
  genre: 'paciente',
  platform: ['web', 'windows'],
  getSimilar: (title: string) => {
    console.log(`Similar game to ${title}: Solitaire, `)
  }
}

console.log(myGame.title)
myGame.getSimilar(myGame.title)

interface DLC extends Game {
  originalGame: Game,
  newContent: string[]
}

const myGameSpecial: DLC = {
  title: 'Spider Solitaire - Special Edition',
  genre: 'solitaire',
  platform: ['web', 'windows', 'mobile'],
  newContent: ['Special cards', 'Optional backgrounds'],
  originalGame: myGame
}

console.log(myGameSpecial.title)