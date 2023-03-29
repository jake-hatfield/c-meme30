const anakinVoiceLines = [
	'anakin/enter-my-pod.mp3',
	'anakin/this-is-tense.mp3',
	'anakin/cold-sir.mp3',
	'anakin/angel.mp3',
	'anakin/podracing.mp3',
	'anakin/spinning.mp3',
	'anakin/so-wizard.mp3',
	'anakin/pilot.mp3',
	'anakin/person.mp3',
	'anakin/against-me.mp3',
	'anakin/bad-feeling.mp3',
	'anakin/buzz-droids.mp3',
	'anakin/destroyers.mp3',
	'anakin/fun-begins.mp3',
	'anakin/i-hate-you.mp3',
	'anakin/i-killed-them.mp3',
	'anakin/intoxicating.mp3',
	'anakin/its-working.mp3',
	'anakin/jealous.mp3',
	'anakin/kill-you.mp3',
	'anakin/liar.mp3',
	'anakin/new-powers.mp3',
	'anakin/no.mp3',
	'anakin/not-fair.mp3',
	'anakin/pledge-myself.mp3',
	'anakin/sand.mp3',
	'anakin/so-beautiful.mp3',
	'anakin/speeder.mp3',
	'anakin/stand-trial.mp3',
	'anakin/take-her-from-me.mp3',
	'anakin/too-many.mp3',
	'anakin/unfair.mp3',
	'anakin/you-will-try.mp3',
	'anakin/what-have-i-done.mp3',
	'obi-won/underestimate-my-power.mp3',
];

const yodaVoiceLines = [
	'yoda/suffering.mp3',
	'yoda/death-sound.mp3',
	'yoda/very-good.mp3',
];

const palpatineVoiceLines = [
	'palpatine/deformed.mp3',
	'palpatine/do-it.mp3',
	'palpatine/feel-your-anger.mp3',
	'palpatine/good.mp3',
	'palpatine/grunt.mp3',
	'palpatine/i-am-the-senate.mp3',
	'palpatine/ironic.mp3',
	'palpatine/kill-him.mp3',
	'palpatine/kill-me.mp3',
	'palpatine/no-no.mp3',
	'palpatine/not-from-a-jedi.mp3',
	'palpatine/once-more.mp3',
	'palpatine/only-natural.mp3',
	'palpatine/order.mp3',
	'palpatine/taking-over.mp3',
	'palpatine/too-weak.mp3',
	'palpatine/too-weak-1.mp3',
	'palpatine/tragedy.mp3',
	'palpatine/treason.mp3',
	'palpatine/unlimited-power.mp3',
];

const padmeVoiceLines = [
	'padme/suffer-and-die.mp3',
	'padme/breaking-my-heart.mp3',
	'padme/liberty-dies.mp3',
	'padme/youve-grown.mp3',
];

const maceVoiceLines = [
	'mace-windu/party-over.mp3',
	'mace-windu/sith-lord.mp3',
	'mace-windu/take-a-seat.mp3',
	'mace-windu/think-so.mp3',
	'mace-windu/under-arrest.mp3',
];

const dookuVoiceLines = [
	'count-dooku/double-the-fall.mp3',
	'count-dooku/great-fear.mp3',
];

const grievousVoiceLines = [
	'grievous/doomed.mp3',
	'grievous/fine-addition.mp3',
	'grievous/general-kenobi.mp3',
	'grievous/jedi-scum.mp3',
	'grievous/negotiator.mp3',
	'grievous/ray-shields.mp3',
	'grievous/you-fool.mp3',
];

const obiwonVoiceLines = [
	'obi-won/negotiations.mp3',
	'obi-won/absolutes.mp3',
	'obi-won/always-on-the-move.mp3',
	'obi-won/archives-are-incomplete.mp3',
	'obi-won/bad-feeling-about-this.mp3',
	'obi-won/chosen-one.mp3',
	'obi-won/death-sticks.mp3',
	'obi-won/easy.mp3',
	'obi-won/hate-it.mp3',
	'obi-won/hello-there.mp3',
	'obi-won/high-ground.mp3',
	'obi-won/like-it.mp3',
	'obi-won/pull-up.mp3',
	'obi-won/sith-lords.mp3',
	'obi-won/so-uncivilized.mp3',
	'obi-won/sweating.mp3',
	'obi-won/together.mp3',
	'obi-won/find-us.mp3',
	'obi-won/good-job.mp3',
	'obi-won/another-happy-landing.mp3',
];

const tradeVoiceLines = [
	'trade-federation/all-batteries-fire.mp3',
	'trade-federation/coming-through.mp3',
	'trade-federation/droidekas.mp3',
	'trade-federation/magnetize.mp3',
	'trade-federation/promised-peace.mp3',
	'trade-federation/shoot-her.mp3',
	'trade-federation/victory.mp3',
];

const jarJarVoiceLines = [
	'jar-jar/ah-hah.mp3',
	'jar-jar/big-goober-fish.mp3',
	'jar-jar/boom.mp3',
	'jar-jar/exqueeze-me.mp3',
	'jar-jar/hello-boyos.mp3',
	'jar-jar/how-wude.mp3',
	'jar-jar/i-spek.mp3',
	'jar-jar/jump-jar-jar.mp3',
	'jar-jar/maxi-big.mp3',
	'jar-jar/meesa-back.mp3',
	'jar-jar/meesa-jar-jar-binks.mp3',
	'jar-jar/messa-like-dis.mp3',
	'jar-jar/muy-muy.mp3',
	'jar-jar/my-give-up.mp3',
	'jar-jar/pee-yousa.mp3',
	'jar-jar/saved-my-again.mp3',
	'jar-jar/steady.mp3',
	'jar-jar/stinkywhiff.mp3',
	'jar-jar/very-bad.mp3',
	'jar-jar/whosa-are-yousa.mp3',
	'jar-jar/yelling.mp3',
	'jar-jar/your-honor.mp3',
	'jar-jar/bustin-with-happiness.mp3',
	'jar-jar/looky-looky.mp3',
	'jar-jar/so-smiling.mp3',
];

// TODO<Jake>: Refactor to import voice lines via file system

export default [
	{
		name: 'anakin',
		description: '🤬',
		voiceLines: anakinVoiceLines,
	},
	{
		name: 'yoda',
		description: '🐸',
		voiceLines: yodaVoiceLines,
	},
	{
		name: 'palpatine',
		description: '⚡',
		voiceLines: palpatineVoiceLines,
	},
	{
		name: 'padme',
		description: '🙆‍♀️',
		voiceLines: padmeVoiceLines,
	},
	{
		name: 'mace',
		description: '👨🏿‍🦲',
		voiceLines: maceVoiceLines,
	},
	{
		name: 'dooku',
		description: '🧓🏻',
		voiceLines: dookuVoiceLines,
	},
	{
		name: 'grievous',
		description: '🤖',
		voiceLines: grievousVoiceLines,
	},
	{
		name: 'obi-won',
		description: '👨🏻‍🦰',
		voiceLines: obiwonVoiceLines,
	},
	{
		name: 'trade',
		description: '🦎',
		voiceLines: tradeVoiceLines,
	},
	{
		name: 'jar-jar',
		description: '🔥',
		voiceLines: jarJarVoiceLines,
	},
	{
		name: 'working',
		description: '🏁',
		voiceLines: ['anakin/its-working.mp3'],
	},
	{
		name: 'die',
		description: '💀',
		voiceLines: ['palpatine/no-no.mp3'],
	},
	{
		name: 'good',
		description: '👌🏻',
		voiceLines: ['palpatine/good.mp3'],
	},
	{
		name: 'random',
		description: '🎲',
		voiceLines: [
			...anakinVoiceLines,
			...yodaVoiceLines,
			...palpatineVoiceLines,
			...padmeVoiceLines,
			...maceVoiceLines,
			...dookuVoiceLines,
			...grievousVoiceLines,
			...obiwonVoiceLines,
			...tradeVoiceLines,
			...jarJarVoiceLines,
		],
	},
];
