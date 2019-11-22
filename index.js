const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("config");
const botToken = config.get("botToken");
const {
  yodaNutGif,
  yodaGifs,
  randomItem,
  palpGifs,
  aniGifs,
  randomNut,
  jarJarGifs
} = require("./gifs");
const express = require("express");
const app = express();
const ffmpeg = require("ffmpeg");

app.get("/", function(req, res) {
  res.send(
    "Hope u like memes: https://discordapp.com/oauth2/authorize?&client_id=641348914343051282&scope=bot&permissions=66078976"
  );
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//gif response to keywords
client.on("message", msg => {
  if (msg.author == client.user) return;
  let reply = "";
  let msgLowercase = msg.content.toLowerCase();
  console.log(msgLowercase);
  if (msgLowercase.includes("anakin nut")) {
    reply = "https://i.redd.it/apzz3qxbpf801.jpg";
  }
  if (
    msgLowercase.includes("palpatine nut") ||
    msgLowercase.includes("sucking")
  ) {
    reply = "https://youtu.be/GV42DORXpM4?t=47";
  } else if (msgLowercase.includes("jar") || msgLowercase.includes("binks")) {
    reply = randomItem(jarJarGifs);
  } else if (msgLowercase.includes("yoda nut")) {
    reply = yodaNutGif;
  } else if (
    msgLowercase.includes("wise") ||
    msgLowercase.includes("tragedy")
  ) {
    reply = "https://media.giphy.com/media/xTiIzxQye2bRk11qdG/giphy.gif";
  } else if (msgLowercase.includes("good")) {
    reply = "https://media.giphy.com/media/xTiIzL9Btjx9hegHT2/giphy.gif";
  } else if (msgLowercase.includes("try it")) {
    reply = "https://media.giphy.com/media/pHB2cl3wCGlKU/giphy.gif";
  } else if (msgLowercase.includes("i love you")) {
    reply = "https://i.redd.it/3dmk63noigj11.gif";
  } else if (msgLowercase.includes("nut")) {
    reply = randomItem(randomNut);
  } else if (msgLowercase.includes("wizard")) {
    reply = "https://media.giphy.com/media/26wBbEx3MpDeDZcZ2/giphy.gif";
  } else if (msgLowercase.includes("yoda")) {
    reply = randomItem(yodaGifs);
  } else if (
    msgLowercase.includes("kill") ||
    msgLowercase.includes("power") ||
    msgLowercase.includes("palp")
  ) {
    reply = randomItem(palpGifs);
  } else if (msgLowercase.includes("sand")) {
    reply =
      "https://tenor.com/view/anakin-sand-skywalker-anakin-skywalker-star-wars-gif-13723718";
  } else if (
    msgLowercase.includes("mace") ||
    msg.msgLowercase.includes("windu")
  ) {
    reply =
      "https://youtu.be/JNGH-LYEBMo?t=2";
  } else if (msgLowercase.includes("work")) {
    reply = "https://tenor.com/view/working-anakin-starwars-gif-4653092";
  } else if (msgLowercase.includes("landing")) {
    reply =
      "https://66.media.tumblr.com/750f96e135b0ce28a872efaaa2d4e88f/tumblr_inline_p6j4k3djkp1v75jbp_540.gif";
  } else if (msgLowercase.includes("liar")) {
    reply = "https://tenor.com/view/anakin-liar-starwars-gif-8634649";
  } else if (msgLowercase.includes("animal")) {
    reply = "https://youtu.be/pfevBIsVG1o?t=5";
  } else if (msgLowercase.includes("hate")) {
    reply = "https://tenor.com/view/hate-you-anakin-gif-5247878";
  } else if (msgLowercase.includes("ana") || msgLowercase.includes("ani")) {
    reply = randomItem(aniGifs);
  } else if (msgLowercase.includes("fair")) {
    reply = "https://media.giphy.com/media/3ohuAsQcmrk3c8XgMU/giphy.gif";
  } else if (msgLowercase.includes("high")) {
    reply = "https://media2.giphy.com/media/j0IAyUkwpEQg0/giphy.gif";
  } else if (msgLowercase.includes("good")) {
    reply =
      "https://tenor.com/view/good-evil-starwars-emporerpalpatine-darkside-gif-4624104";
  } else if (msgLowercase.includes("cold")) {
    reply = "https://media.giphy.com/media/HUVhRiUpOre6I/giphy.gif";
  } else if (msgLowercase.includes("do it")) {
    reply = "https://tenor.com/view/palpatine-do-it-gif-5599869";
  } else if (msgLowercase.includes("weak")) {
    reply =
      "https://tenor.com/view/sheev-palpatine-star-wars-icant-hold-it-any-longer-gif-14622258";
  } else if (msgLowercase.includes("back")) {
    reply =
      "https://tenor.com/view/mesa-back-jar-jar-binks-star-wars-funny-the-phantom-gif-14345561";
  } else if (msgLowercase.includes("hello there")) {
    reply = "http://giphygifs.s3.amazonaws.com/media/KOVlHmbBA09XO/giphy.gif";
  } else if (msgLowercase.includes("ok") || msgLowercase.includes("okay")) {
    reply = "https://media.giphy.com/media/181OUQHOCfde0/giphy.gif";
  } else if (
    msgLowercase.includes("hello") ||
    msgLowercase.includes("hey") ||
    msgLowercase == "hi"
  ) {
    reply =
      "https://tenor.com/view/star-wars-jarjar-binks-hello-boyos-hi-gif-11857957";
  }
  //send msg in discord
  if (reply !== "") return msg.reply(reply);
  //   else if (msgLowercase == "psb") {
  //     var VC = msg.member.voiceChannel;
  //     if (!VC) return msg.reply("give me the prompt, master jedi");
  //     // VC.join()
  //     //     .then(connection => {
  //     //         const dispatcher = connection.playFile(horn);
  //     //         dispatcher.on("end", end => {VC.leave()});
  //     // })
  //   }
});

//logs the bot into discord
client.login(botToken);

//provides the bot a port
app.listen(process.env.PORT || 5000);

//pings the server every 5 minutes to keep the bot awake
var https = require("https");
setInterval(function() {
  https.get("https://star-wars-meme-droid.herokuapp.com/");
}, 300000);
