import { Bot, GrammyError, HttpError } from 'grammy'

import { registerCommands } from './commands'
import { registerHandlers } from './handlers'
import { config } from './utils'

const botToken = config.BOT_API_TOKEN
if (!botToken) throw new Error('BOT_API_TOKEN is not defined')

const bot = new Bot(botToken, {
  client: { canUseWebhookReply: method => method === 'sendChatAction' }
})

registerCommands(bot)
registerHandlers(bot)

bot.catch(error => {
  const ctx = error.ctx
  console.error(`Error while handling update ${ctx.update.update_id}`)

  const err = error.error
  if (err instanceof GrammyError) {
    console.error('Error in request: ', err.description)
  } else if (err instanceof HttpError) {
    console.error('Could not contact Telegram: ', err)
  } else {
    console.error('Unknown error: ', err)
  }
})

bot.start()
