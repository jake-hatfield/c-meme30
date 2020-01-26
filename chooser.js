const Discord = require("discord.js");
const client = new Discord.Client();
const { content } = require("./content");

client.on("message", msg => {
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

  module.exports = {
    match,
    voiceLineChooser,
    gifChooser
  };
});
