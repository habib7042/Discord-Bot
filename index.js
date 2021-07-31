const Discord = require('discord.js')
const dotenv =require('dotenv')

dotenv.config()
const client = new Discord.Client()

client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('Hello')
  }
  if (msg.content === 'how are you') {
    msg.reply('Fine, Thank yoy')
  }
})
client.login(process.env.BOT_TOKEN)