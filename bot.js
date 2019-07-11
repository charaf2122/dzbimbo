const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("598874210236104704")
setInterval(function() {
channel.send(`charaf charaf charaf charaf charaf charaf`);
}, 30)
})

client.login(process.env.BOT_TOKEN);