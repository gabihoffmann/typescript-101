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