const yodaNutGif =
	'https://tenor.com/view/nutted-sucking-yoda-star-wars-gif-4955543';
const yodaGifs = [
	'https://tenor.com/view/yoda-suisidesquad-gif-5970653',
	'https://tenor.com/view/yoda-gif-11875428',
	'https://tenor.com/view/yoda-star-wars-gif-11754851',
	'https://tenor.com/view/yoda-what-you-say-are-you-serious-are-you-stupid-are-you-dumb-gif-5892155',
	'https://tenor.com/view/chile-yoda-creepy-weird-luke-skywalker-gif-8844889'
];
const palpGifs = [
	'https://tenor.com/view/star-wars-emperor-chancellor-palpatine-gif-8128416',
	'https://tenor.com/view/palpatine-gif-13095906',
	'https://tenor.com/view/sheev-palpatine-emperor-chancellor-kill-him-now-gif-14424446',
	'https://tenor.com/view/good-palpatine-gif-8789828',
	'https://tenor.com/view/no-emperor-palpatine-gif-13110787',
	'https://tenor.com/view/star-wars-palpatine-senate-gif-13095904'
];
const aniGifs = [
	'https://tenor.com/view/star-wars-anakin-skywalker-what-have-idone-confused-sad-gif-3575836',
	'https://tenor.com/view/sw-starwars-anakin-anakinskywalker-stunning-gif-4830485',
	'https://tenor.com/view/anakin-star-wars-fun-begin-smile-gif-7220749',
	'https://tenor.com/view/hate-you-anakin-gif-5247878',
	'https://tenor.com/view/star-wars-ihate-them-mad-angry-anakin-skywalker-gif-3580805',
	'https://media.giphy.com/media/gtBDviunS4OCA/giphy.gif',
	'https://media.giphy.com/media/mE33kDd1A6LPW/giphy.gif',
	'https://media.giphy.com/media/3owzWn24wYQndbQmyY/giphy.gif'
];
const randomNut = [
	'https://media0.giphy.com/media/3o84sCIUu49AtNYkDK/giphy.gif',
	'https://i.redd.it/eymxksyn37f01.jpg',
	'https://youtu.be/GV42DORXpM4?t=47',
	'https://i.redd.it/apzz3qxbpf801.jpg',
	'https://tenor.com/view/nutted-sucking-yoda-star-wars-gif-4955543',
	'https://media3.giphy.com/media/5tRGwBkWx8Vt6/200.webp'
];
const OBWon = [
	'http://giphygifs.s3.amazonaws.com/media/KOVlHmbBA09XO/giphy.gif',
	'https://66.media.tumblr.com/750f96e135b0ce28a872efaaa2d4e88f/tumblr_inline_p6j4k3djkp1v75jbp_540.gif'
];
const jarJarGifs = [
	'https://i.gifer.com/FVtT.gif',
	'https://i.gifer.com/AeXc.gif',
	'https://i.gifer.com/1DvB.gif',
	'https://i.gifer.com/HoFv.gif',
	'https://i.gifer.com/A6A8.gif',
	'https://i.gifer.com/A6A6.gif',
	'https://i.gifer.com/FVtb.gif',
	'https://i.gifer.com/DIjo.gif',
	'https://media.giphy.com/media/3owzWdDuy7KiZLKpy0/giphy.gif',
	'https://media.giphy.com/media/3owzVXxFgjfDpQ3fPy/giphy.gif',
	'https://media.giphy.com/media/3owzVQch8fzfptlES4/giphy.gif'
];
function randomItem(gifArray) {
	return gifArray[Math.floor(Math.random() * gifArray.length)];
}
module.exports = {
	yodaNutGif,
	yodaGifs,
	randomItem,
	palpGifs,
	aniGifs,
	randomNut,
	jarJarGifs
};
