const yodaNutGif = "https://tenor.com/view/nutted-sucking-yoda-star-wars-gif-4955543";
const yodaGifs = ["https://tenor.com/view/yoda-suisidesquad-gif-5970653", "https://tenor.com/view/yoda-gif-11875428", "https://tenor.com/view/yoda-star-wars-gif-11754851", "https://tenor.com/view/yoda-what-you-say-are-you-serious-are-you-stupid-are-you-dumb-gif-5892155", "https://tenor.com/view/chile-yoda-creepy-weird-luke-skywalker-gif-8844889"]
const palpGifs = ["https://tenor.com/view/star-wars-emperor-chancellor-palpatine-gif-8128416", "https://tenor.com/view/palpatine-gif-13095906", "https://tenor.com/view/sheev-palpatine-emperor-chancellor-kill-him-now-gif-14424446", "https://tenor.com/view/good-palpatine-gif-8789828", "https://tenor.com/view/no-emperor-palpatine-gif-13110787", "https://tenor.com/view/star-wars-palpatine-senate-gif-13095904"]
const aniGifs = ["https://tenor.com/view/star-wars-anakin-skywalker-what-have-idone-confused-sad-gif-3575836", "https://tenor.com/view/sw-starwars-anakin-anakinskywalker-stunning-gif-4830485", "https://tenor.com/view/anakin-star-wars-fun-begin-smile-gif-7220749", "https://tenor.com/view/hate-you-anakin-gif-5247878", "https://tenor.com/search/starwars-gifs", "https://tenor.com/view/star-wars-ihate-them-mad-angry-anakin-skywalker-gif-3580805"]
    function randomItem (gifArray) {
   return gifArray[Math.floor(Math.random()*gifArray.length)];
}
module.exports = {yodaNutGif, yodaGifs, randomItem, palpGifs, aniGifs};