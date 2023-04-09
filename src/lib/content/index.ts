const anakinContent: { voice: string; text: string }[] = [
	{
		voice: 'anakin/enter-my-pod.mp3',
		text: '```> you could enter my pod. you could make him think it was yours, and get him to let me pilot it for you.```',
	},
	{ voice: 'anakin/this-is-tense.mp3', text: '```> this is tense!```' },
	{ voice: 'anakin/cold-sir.mp3', text: '```> how feel you?\n> cold sir.```' },
	{ voice: 'anakin/angel.mp3', text: '```> are you an angel?```' },
	{ voice: 'anakin/podracing.mp3', text: '```> now this is podracing!```' },
	{
		voice: 'anakin/spinning.mp3',
		text: "```> i'll try spinning, that's a good trick! ahhhhh```",
	},
	{
		voice: 'anakin/so-wizard.mp3',
		text: "```> that's so wizard, ani! i'm sure you'll do it this time...```",
	},
	{
		voice: 'anakin/pilot.mp3',
		text: "```> i'm a pilot, ya know, and some day i'm gonna fly away from this planet.\n> you're a pilot?\n> mhm, all my life.```",
	},
	{
		voice: 'anakin/person.mp3',
		text: "```> i'm a person and my name is anakin.```",
	},
	{
		voice: 'anakin/against-me.mp3',
		text: '```> you turned her against me!\n> you have done that yourself.```',
	},
	{
		voice: 'anakin/bad-feeling.mp3',
		text: "```> i've got a bad feeling about this...```",
	},
	{ voice: 'anakin/buzz-droids.mp3', text: '```> buzz droids```' },
	{ voice: 'anakin/destroyers.mp3', text: '```> destroyers!```' },
	{
		voice: 'anakin/fun-begins.mp3',
		text: '```> this is where the fun begins!```',
	},
	{ voice: 'anakin/i-hate-you.mp3', text: '```> i hate you!```' },
	{
		voice: 'anakin/i-killed-them.mp3',
		text: "```> i killed them. i killed them all. they're dead, every single one of them. and not just the men, but the women and the children, too. they're like animals, and i slaughtered them like animals. i hate them.```",
	},
	{
		voice: 'anakin/intoxicating.mp3',
		text: "```> i'd much rather dream about padme. just being around her again is... intoxicating.```",
	},
	{
		voice: 'anakin/its-working.mp3',
		text: "```> it's working, it's working!```",
	},
	{
		voice: 'anakin/jealous.mp3',
		text: "```> it's all obi-won's fault. he's jealous. he's holding me back!```",
	},
	{ voice: 'anakin/kill-you.mp3', text: "```> don't make me kill you...```" },
	{ voice: 'anakin/liar.mp3', text: '```> liar!```' },
	{
		voice: 'anakin/new-powers.mp3',
		text: '```> anakin, all i want is your love.\n> love won\t save you, padme. only my new powers can do that.```',
	},
	{ voice: 'anakin/no.mp3', text: '```> nooooooooooo!```' },
	{ voice: 'anakin/not-fair.mp3', text: "```> it's not fair!```" },
	{
		voice: 'anakin/pledge-myself.mp3',
		text: '```> i pledge myself... to your teachings```',
	},
	{
		voice: 'anakin/sand.mp3',
		text: "```> i don't like sand. it's coarse, and rough, and irritating. and it gets everywhere.```",
	},
	{
		voice: 'anakin/so-beautiful.mp3',
		text: '```> you are so... beautiful.```',
	},
	{
		voice: 'anakin/speeder.mp3',
		text: '```> what took you so long?\n> oh, you know, master. i could find a speeder that i really liked.```',
	},
	{ voice: 'anakin/stand-trial.mp3', text: '```> he must stand trial!```' },
	{
		voice: 'anakin/take-her-from-me.mp3',
		text: '```> you will not take her from me!```',
	},
	{
		voice: 'anakin/too-many.mp3',
		text: '```> master skywalker, there are too many of them. what are we going to do?> **oof**```',
	},
	{
		voice: 'anakin/unfair.mp3',
		text: "```> you're on this council, but we do not grant you the rank of master.\n> what? how can you do this? it's outrageous. it's unfair. how can you be on the council, and not be a master?```",
	},
	{ voice: 'anakin/you-will-try.mp3', text: '```> you will try. **oof**```' },
	{ voice: 'anakin/what-have-i-done.mp3', text: '```> what have i done?```' },
	{
		voice: 'obi-won/underestimate-my-power.mp3',
		text: '```> you underestimate my power!```',
	},
];

const yodaContent = [
	{
		voice: 'yoda/suffering.mp3',
		text: '```> fear is the path to the dark side. fear leads to anger. anger leads to hate. hate leads to suffering.```',
	},
	{ voice: 'yoda/death-sound.mp3', text: '```> **lizard noises**```' },
	{ voice: 'yoda/very-good.mp3', text: '```> very good. very good.```' },
];

const palpatineContent = [
	{
		voice: 'palpatine/deformed.mp3',
		text: '```> the attempt on my life has left me scarred and deformed, but i assure you - my resolve has never been stronger!```',
	},
	{
		voice: 'palpatine/do-it.mp3',
		text: '```> do it.```',
	},
	{
		voice: 'palpatine/feel-your-anger.mp3',
		text: '```> i can feel your anger...```',
	},
	{
		voice: 'palpatine/good.mp3',
		text: '```> goooooood.```',
	},
	{
		voice: 'palpatine/grunt.mp3',
		text: '```> **bad boy sounds**```',
	},
	{
		voice: 'palpatine/i-am-the-senate.mp3',
		text: '```> are you threatening me, master jedi?\n> the senate will decide your fate.\n> i am the senate.```',
	},
	{
		voice: 'palpatine/ironic.mp3',
		text: '```> ironic. he could save others from death, but not himself.```',
	},
	{
		voice: 'palpatine/kill-him.mp3',
		text: '```> good anakin, good. kill him. kill him now.```',
	},
	{
		voice: 'palpatine/kill-me.mp3',
		text: "```> don't let him kill me!```",
	},
	{
		voice: 'palpatine/no-no.mp3',
		text: '```> no, no, no... you will die!```',
	},
	{
		voice: 'palpatine/not-from-a-jedi.mp3',
		text: '```> is it possible to learn this power?\n> not from a jedi...```',
	},
	{
		voice: 'palpatine/once-more.mp3',
		text: '```> once more the sith will rule the galaxy. and we shall have peace.```',
	},
	{
		voice: 'palpatine/only-natural.mp3',
		text: "```> it is only natural. he cut off your arm, and you wanted revenge. it's not the first time, anakin... remember what you told me about your mother and the sand people?```",
	},
	{
		voice: 'palpatine/order.mp3',
		text: '```> execute order 66.```',
	},
	{
		voice: 'palpatine/taking-over.mp3',
		text: '```> the jedi are taking over!```',
	},
	{
		voice: 'palpatine/too-weak.mp3',
		text: "```> i - i - i - can't. i'm too weak.```",
	},
	{
		voice: 'palpatine/too-weak-1.mp3',
		text: "```> i'm too weak!```",
	},
	{
		voice: 'palpatine/tragedy.mp3',
		text: "```> did you ever hear the tragedy of darth plagueis the wise?\n> no.\n> i thought not. it's not a story the jedi would tell you.```",
	},
	{
		voice: 'palpatine/treason.mp3',
		text: "```> it's treason, then.```",
	},
	{
		voice: 'palpatine/unlimited-power.mp3',
		text: '```> ahhhhhhh unlimited powerrrrr!```',
	},
];

const padmeContent = [
	{
		voice: 'padme/suffer-and-die.mp3',
		text: '```> i was not elected to watch my people suffer and die while you discuss this invasion in a committee.```',
	},
	{
		voice: 'padme/breaking-my-heart.mp3',
		text: "```> anakin, you're breaking my heart.```",
	},
	{
		voice: 'padme/liberty-dies.mp3',
		text: '```> so this is how liberty dies, by thunderous applause.```',
	},
	{
		voice: 'padme/youve-grown.mp3',
		text: "```> my goodness, you've grown!```",
	},
];

const maceContent = [
	{
		voice: 'mace-windu/party-over.mp3',
		text: "```> this party's over.```",
	},
	{
		voice: 'mace-windu/sith-lord.mp3',
		text: "```> i've just learned a terrible truth. i think chancellor palpatine is a sith lord.\n> a sith lord?```",
	},
	{
		voice: 'mace-windu/take-a-seat.mp3',
		text: '```> take a seat, young skywalker.```',
	},
	{
		voice: 'mace-windu/think-so.mp3',
		text: "```> i don't think so.```",
	},
	{
		voice: 'mace-windu/under-arrest.mp3',
		text: '```> you are under arrest, my lord.```',
	},
];

const dookuContent = [
	{
		voice: 'count-dooku/double-the-fall.mp3',
		text: '```> my powers have doubled since the last time we met, count.\n> good. twice the pride, double the fall.```',
	},
	{
		voice: 'count-dooku/great-fear.mp3',
		text: "```> i sense great fear in you, skywalker. you have hate, you have anger, but you don't use them.```",
	},
];

const grievousContent = [
	{
		voice: 'grievous/doomed.mp3',
		text: "```> armed or not, you must realize, you are doomed\n> oh i don't think so **tryhard sounds**```",
	},
	{
		voice: 'grievous/fine-addition.mp3',
		text: '```> **smoker lung sounds** your lightsabers will make a fine addition to my collection.```',
	},
	{
		voice: 'grievous/general-kenobi.mp3',
		text: '```> general kenobi! **evil cackles**```',
	},
	{
		voice: 'grievous/jedi-scum.mp3',
		text: '```> **smoker lung sounds** jedi scum!```',
	},
	{
		voice: 'grievous/negotiator.mp3',
		text: '```> ah, yes, the negotiator... general kenobi```',
	},
	{
		voice: 'grievous/ray-shields.mp3',
		text: '```> activate ray shields!```',
	},
	{
		voice: 'grievous/you-fool.mp3',
		text: "```> you fool! i've been trained in your jedi arts by count dooku.```",
	},
];

const obiwonContent = [
	{
		voice: 'obi-won/negotiations.mp3',
		text: '```> you were right about one thing, master. the negotiations were short```',
	},
	{
		voice: 'obi-won/absolutes.mp3',
		text: '```> only a sith deals in absolutes.```',
	},
	{
		voice: 'obi-won/always-on-the-move.mp3',
		text: '```> **dad sounds** always on the move.```',
	},
	{
		voice: 'obi-won/archives-are-incomplete.mp3',
		text: "```> i hate to say it, but perhaps the system you're searching for doesn't exist.\n> impossible, perhaps the archives are incomplete.```",
	},
	{
		voice: 'obi-won/bad-feeling-about-this.mp3',
		text: '```> oh i have a bad feeling about this!```',
	},
	{
		voice: 'obi-won/chosen-one.mp3',
		text: '```> you were the chosen one, it was said that you would destroy the sith, not join them!```',
	},
	{
		voice: 'obi-won/death-sticks.mp3',
		text: "```> you wanna buy some death sticks?\n> you don't want to sell me death sticks.\n> i don't wanna sell you death sticks.\n> you want to go home and rethink your life.\n> i wanna go home and rethink my life.```",
	},
	{
		voice: 'obi-won/easy.mp3',
		text: '```> oh i see it. oh, this is going to be easy!```',
	},
	{
		voice: 'obi-won/hate-it.mp3',
		text: '```> i hate it when he does that.```',
	},
	{
		voice: 'obi-won/hello-there.mp3',
		text: '```> hello there!```',
	},
	{
		voice: 'obi-won/high-ground.mp3',
		text: "```> it's over anakin, i have the high ground.```",
	},
	{
		voice: 'obi-won/like-it.mp3',
		text: "```> you know i don't like it when you do that.```",
	},
	{
		voice: 'obi-won/pull-up.mp3',
		text: '```> pull up, anakin. pull up!\n> **glee**```',
	},
	{
		voice: 'obi-won/sith-lords.mp3',
		text: "```> get help, you're no match for him - he's a sith lord.\n> chancellor palpatine, sith lords are my speciality.```",
	},
	{
		voice: 'obi-won/so-uncivilized.mp3',
		text: '```> so uncivilized!```',
	},
	{
		voice: 'obi-won/sweating.mp3',
		text: "```> **cackles** you're sweating!```",
	},
	{
		voice: 'obi-won/together.mp3',
		text: "```> this time, we'll do it together\n> i was about to say that.```",
	},
	{
		voice: 'obi-won/find-us.mp3',
		text: '```> if they find us, they will crush us, grind us into tiny pieces, and blast us into oblivion!```',
	},
	{
		voice: 'obi-won/good-job.mp3',
		text: '```> we decide to come and rescue you.\n> good job!```',
	},
	{
		voice: 'obi-won/another-happy-landing.mp3',
		text: '```> another happy landing```',
	},
];

const tradeContent = [
	{
		voice: 'trade-federation/all-batteries-fire.mp3',
		text: '```> all batteries fire! fire!```',
	},
	{
		voice: 'trade-federation/coming-through.mp3',
		text: '```> they are still coming through...\n> this is impossible!```',
	},
	{
		voice: 'trade-federation/droidekas.mp3',
		text: '```> where are those droidekas?```',
	},
	{
		voice: 'trade-federation/magnetize.mp3',
		text: '```> magnetize, magnetize!```',
	},
	{
		voice: 'trade-federation/promised-peace.mp3',
		text: '```> the war is over! lord sidious promised us peace!```',
	},
	{
		voice: 'trade-federation/shoot-her.mp3',
		text: "```> she can't do that. shoot her... or something!```",
	},
	{
		voice: 'trade-federation/victory.mp3',
		text: '```> viceroy, we have captured the queen.\n> ahh, victory!```',
	},
];

const jarJarContent = [
	{
		voice: 'jar-jar/ah-hah.mp3',
		text: '```> ah-hah!```',
	},
	{
		voice: 'jar-jar/big-goober-fish.mp3',
		text: '```> big goober fish! huge on teeth!```',
	},
	{
		voice: 'jar-jar/boom.mp3',
		text: '```> my no-no. my day started pretty oki-day with a brisky mornin lunchin then boom!```',
	},
	{
		voice: 'jar-jar/exqueeze-me.mp3',
		text: '```> exqueeze me!```',
	},
	{
		voice: 'jar-jar/hello-boyos.mp3',
		text: '```> hello boyos!```',
	},
	{
		voice: 'jar-jar/how-wude.mp3',
		text: '```> how wude!```',
	},
	{
		voice: 'jar-jar/i-spek.mp3',
		text: '```> you almost got us killed, are you brainless?\n> i spek!\n> the ability to speak does not make you intelligent.```',
	},
	{
		voice: 'jar-jar/jump-jar-jar.mp3',
		text: '```> jump jar-jar! jump jar-jar! jump!```',
	},
	{
		voice: 'jar-jar/maxi-big.mp3',
		text: '```> ohhhh maxi big the force.```',
	},
	{
		voice: 'jar-jar/meesa-back.mp3',
		text: '```> meesa back!```',
	},
	{
		voice: 'jar-jar/meesa-jar-jar-binks.mp3',
		text: "```> messa called jar-jar binks. meesa your humble servant!\n> that won't be necessary.\n> oh but it is! demanded by the gods it is!```",
	},
	{
		voice: 'jar-jar/meesa-like-dis.mp3',
		text: '```> ahhaaaaahaaaahaa yousa no thinking usa greater than the gungans! **monkey sounds** meesa like-a-dis!```',
	},
	{
		voice: 'jar-jar/muy-muy.mp3',
		text: '```> oh muy muy i love you!```',
	},
	{
		voice: 'jar-jar/my-give-up.mp3',
		text: '```> hands up!\n> my give up, myyy give up!```',
	},
	{
		voice: 'jar-jar/pee-yousa.mp3',
		text: '```> pee yousa!```',
	},
	{
		voice: 'jar-jar/saved-my-again.mp3',
		text: '```> you saved my again!```',
	},
	{
		voice: 'jar-jar/steady.mp3',
		text: '```> steady... steady.```',
	},
	{
		voice: 'jar-jar/stinkywhiff.mp3',
		text: '```> well that smells stinkywhiff!```',
	},
	{
		voice: 'jar-jar/very-bad.mp3',
		text: '```> this is very very bad... ohhhh icky icky goo!```',
	},
	{
		voice: 'jar-jar/whosa-are-yousa.mp3',
		text: '```> whosa are yousa?```',
	},
	{
		voice: 'jar-jar/yelling.mp3',
		text: '```> ahhhh monsters! **turkey sounds**```',
	},
	{
		voice: 'jar-jar/your-honor.mp3',
		text: '```> uhhh h-hello there mr boss big nass your honor.```',
	},
	{
		voice: 'jar-jar/bustin-with-happiness.mp3',
		text: '```> meesa bustin with happiness seein yousa gen, ani.```',
	},
	{
		voice: 'jar-jar/looky-looky.mp3',
		text: '```> looky looky senator, theesa jedi arrivin.```',
	},
	{
		voice: 'jar-jar/so-smiling.mp3',
		text: '```> meesa so smilin to seeing yousa```',
	},
];

export default [
	{
		name: 'anakin',
		description: `🤬 (${anakinContent.length})`,
		content: anakinContent,
	},
	{
		name: 'yoda',
		description: `🐸 (${yodaContent.length})`,
		content: yodaContent,
	},
	{
		name: 'palpatine',
		description: `⚡ (${palpatineContent.length})`,
		content: palpatineContent,
	},
	{
		name: 'padme',
		description: `🙆‍♀️ (${padmeContent.length})`,
		content: padmeContent,
	},
	{
		name: 'mace',
		description: `👨🏿‍🦲 (${maceContent.length})`,
		content: maceContent,
	},
	{
		name: 'dooku',
		description: `🧓🏻 (${dookuContent.length})`,
		content: dookuContent,
	},
	{
		name: 'grievous',
		description: `🤖 (${grievousContent.length})`,
		content: grievousContent,
	},
	{
		name: 'obi-won',
		description: `👨🏻‍🦰 (${obiwonContent.length})`,
		content: obiwonContent,
	},
	{
		name: 'trade',
		description: `🦎 (${tradeContent.length})`,
		content: tradeContent,
	},
	{
		name: 'jar-jar',
		description: `🔥 (${jarJarContent.length})`,
		content: jarJarContent,
	},
	{
		name: 'working',
		description: `🏁 (1)`,
		content: [
			{
				voice: 'anakin/its-working.mp3',
				text: "```> it's working, it's working!```",
			},
		],
	},
	{
		name: 'die',
		description: `💀 (1)`,
		content: [
			{
				voice: 'palpatine/no-no.mp3',
				text: '```> no, no, no... you will die!```',
			},
		],
	},
	{
		name: 'good',
		description: `👌🏻 (1)`,
		content: [
			{
				voice: 'palpatine/good.mp3',
				text: '```> goooooood.```',
			},
		],
	},
	{
		name: 'random',
		description: `🎲 (${
			anakinContent.length +
			yodaContent.length +
			palpatineContent.length +
			padmeContent.length +
			maceContent.length +
			dookuContent.length +
			grievousContent.length +
			grievousContent.length +
			obiwonContent.length +
			tradeContent.length +
			jarJarContent.length
		})`,
		content: [
			...anakinContent,
			...yodaContent,
			...palpatineContent,
			...padmeContent,
			...maceContent,
			...dookuContent,
			...grievousContent,
			...obiwonContent,
			...tradeContent,
			...jarJarContent,
		],
	},
];
