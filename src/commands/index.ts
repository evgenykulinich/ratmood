import { Bot } from 'grammy'

import { commands } from '../constants/commands'

import { startCommand } from './start'

export function registerCommands(bot: Bot) {
  bot.api.setMyCommands([
    {
      command: commands.start.cmd,
      description: commands.start.description
    }
  ])

  bot.command(commands.start.cmd, startCommand)
}
