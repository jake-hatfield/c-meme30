const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./config/default.json");
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
  if (isReady && match[0] === undefined) {
    return;
  } else {
    const noRepeats = category => {
      let copyArray = [...category];
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

    let gifChooser = noRepeats(match[0].gif);
    let voiceLineChooser = noRepeats(match[0].voiceLine);

    if (isReady) {
      let reply = "";
      if (
        voiceLineChooser() === null ||
        msg.content.toLowerCase().includes("gif") === true
      ) {
        reply = gifChooser();
        console.log(reply);
        msg.reply(reply);
        if (reply !== "") return;
        return;
      } else {
        let voiceChannel = msg.member.voiceChannel;
        if (voiceChannel === undefined && match[0]) {
          reply =
            "I don't know where you get your delusions, laserbrain... join the voice channel.";
          msg.reply(reply);
          if (reply !== "") return;
          return;
        } else {
          isReady = false;
          voiceChannel
            .join()
            .then(connection => {
              const dispatcher = connection.playFile(voiceLineChooser());
              // console.log(voiceLineChooser());
              dispatcher.on("end", end => {
                isReady = true;
              });
            })
            .catch(err => console.log(err));
        }
      }
    }
  }
});

//logs the bot into discord
client.login(token);

//provides the bot a port
app.listen(process.env.PORT || 5000);

// if (msg.content.toLowerCase().includes("!stop")) {
// setTimeout(function() {
//   voiceChannel.leave();
// }, 500);
// isReady = true;
