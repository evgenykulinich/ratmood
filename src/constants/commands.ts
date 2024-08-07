type Command = {
  cmd: string
  description: string
}

type CommandList = {
  [key: string]: Command
}

export const commands: CommandList = {
  start: {
    cmd: 'start',
    description: 'Приветствие'
  }
}
