const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("config");
const botToken = config.get("botToken");
const express = require("express");
const app = express();
const { content } = require("./content");

app.get("/", (req, res) => {
  res.send(
    "Hope u like memes: https://discordapp.com/oauth2/authorize?&client_id=641348914343051282&scope=bot&permissions=66078976"
  );
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let isReady = true;

client.on("message", msg => {
  if (msg.author == client.user) return;
  let match = content.filter(
    obj =>
      obj.keyword === msg.content.toLowerCase() ||
      msg.content.toLowerCase().includes(obj.keyword)
  );
  const randomNoRepeats = mediaType => {
    let copyArray = [...mediaType];
    return function() {
      if (copyArray.length < 1) {
        copyArray = category.slice(0);
      }
      let index = Math.floor(Math.random() * copyArray.length);
      let item = copyArray[index];
      copyArray.splice(index, 1);
      return item;
    };
  };

  let voiceLineChooser = randomNoRepeats(match.voiceLine);
  let gifChooser = randomNoRepeats(match.gif);
  let reply = "";

  if (isReady && match !== null) {
    if (match.voiceLine === "null") {
      reply = gifChooser();
    } else {
      isReady = false;
      let voiceChannel = msg.member.voice.channel;
      voiceChannel
        .join()
        .then(connection => {
          const dispatcher = connection.play(voiceLineChooser());
          dispatcher.on("end", end => {
            setTimeout(function() {
              voiceChannel.leave();
            }, 500);
            isReady = true;
          });
        })
        .catch(err => console.log(err));
    }
  }
  if (reply !== "") return msg.reply(reply);
});

//logs the bot into discord
client.login(botToken);

//provides the bot a port
app.listen(process.env.PORT || 5000);
