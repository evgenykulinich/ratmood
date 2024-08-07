import { Bot } from 'grammy'

import { handlers } from '../constants/handlers'

export function registerHandlers(bot: Bot) {
  bot.hears(handlers.test.handler, async ctx => {
    await ctx.reply(handlers.test.response, {
      reply_parameters: {
        message_id: ctx.msg.message_id
      }
    })
  })
}
