const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('config');
const botToken = config.get('botToken');
const {yodaNutGif, yodaGifs, randomItem, palpGifs,aniGifs} = require("./gifs")
const express = require('express')
const app = express()
const ffmpeg = require('ffmpeg');
 
app.get('/', function (req, res) {
  res.send('Hope u like memes: https://discordapp.com/oauth2/authorize?&client_id=641348914343051282&scope=bot&permissions=66078976')
})

try {
	new ffmpeg('C:\Users\jacob\Downloads\dixie-horn_daniel-simion.mp3', function (err, horn) {
		if (!err) {
			console.log('its working, its working');
		} else {
			console.log('Error: ' + err);
		}
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//gif response to keywords
client.on('message', msg => {
    if (msg.author == client.user)
    return;
  let reply = "";
if (msg.content.includes("anakin") || (msg.content.includes("ani"))){
    reply = randomItem(aniGifs)
}else if (msg.content.includes("yoda nut")){
    reply = yodaNutGif
}else if (msg.content.includes("yoda")){
    reply = randomItem(yodaGifs)
}else if (msg.content.includes("kill") || (msg.content.includes("power"))){
    reply = randomItem(palpGifs)
}else if (msg.content.includes("sand")){
    reply = "https://tenor.com/view/anakin-sand-skywalker-anakin-skywalker-star-wars-gif-13723718"
}else if (msg.content.includes("work")){
    reply = "https://tenor.com/view/working-anakin-starwars-gif-4653092"
}else if (msg.content.includes("liar")){
    reply = "https://tenor.com/view/anakin-liar-starwars-gif-8634649"
}else if (msg.content.includes("hate")){
    reply = "https://tenor.com/view/hate-you-anakin-gif-5247878"
}else if (msg.content.includes("good")){
    reply = "https://tenor.com/view/good-evil-starwars-emporerpalpatine-darkside-gif-4624104"
}else if (msg.content.includes("do it")){
    reply = "https://tenor.com/view/palpatine-do-it-gif-5599869"
}else if (msg.content.includes("weak")){
    reply = "https://tenor.com/view/sheev-palpatine-star-wars-icant-hold-it-any-longer-gif-14622258"
}else if (msg.content.includes("back")){
    reply = "https://tenor.com/view/mesa-back-jar-jar-binks-star-wars-funny-the-phantom-gif-14345561"
}else if (msg.content.includes("hello") || msg.content.includes("hey") || msg.content == ("hi")){
    reply = "https://tenor.com/view/star-wars-jarjar-binks-hello-boyos-hi-gif-11857957"
}else if (msg.content == "psb") {
    var VC = msg.member.voiceChannel; 
    if (!VC)
        return msg.reply("give me the prompt, master jedi")
VC.join()
    .then(connection => {
        const dispatcher = connection.playFile(horn);
        dispatcher.on("end", end => {VC.leave()});
})
};
});

//logs the bot into discord
client.login(botToken);

//provides the bot a port
app.listen(process.env.PORT || 5000)

//pings the server every 5 minutes to keep the bot awake
var https = require("https");
setInterval(function() {
    https.get("https://star-wars-meme-droid.herokuapp.com/");
}, 300000);