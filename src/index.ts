import * as dotenv from 'dotenv'
import { Bot } from 'grammy'

dotenv.config()

const botApiKey = process.env.TEST_BOT_API_KEY
const bot = new Bot(botApiKey!)

bot.command('start', async ctx => {
  await ctx.reply('Hello, World!')
})

bot.on('message', async ctx => {
  await ctx.reply('Hello, World!')
})

bot.start()
