const DungeonDemo = "https://www.youtube.com/embed/pJBToJ641Vw"
const PlatformDemo = "https://www.youtube.com/embed/yyqeJFFex2A"

const DungeonDescription = "You've transformed into a 2D explorer brave enough to set foot into the dungeon to look for treasure. There are many slimy enemies on your way, but at least you have great music to accompany you and characters with a great sense of humour to meet. Warning: try not to get scammed by a mysterious merchant!"
const PlatformDescription = "The furry in you has awakened. You switched souls with a fox on a journey to collect a bunch of cherries. You've also gained the ability to jump from platform to platform. You can also somehow jump on top of frogs and eagles to make them explode. Remember that famous quote: 'Diamonds are a fox's best friend'. You are going to need it!"

export const UnityProjects = [
	{
		isFlipped: false,
		vidSrc: DungeonDemo, 
		title: "DunDun Dungeon", 
		gitLink: "https://github.com/CelineZhou99/DunDunDungeon", 
		engine: "Unity", 
		description: DungeonDescription,
		technicals: [
			"Menu options including music volume",
			"Character movement, attacking, collecting coins", 
			"Camera movement",
			"Level design and building using the tilemap system",
			"Interactable friendly NPCs that walk within their boundaries, talks to player when interacted with", 
			"Enemy AI will roam around the level in a random direction, damage players when in coming in contact with them, become stronger as the game progresses, have a chance of dropping a coin upon death",
			"Animations using blend tree and state machine",
			"Damage, health, level up system", 
			"HUD display for player health, player level, coins collected",
			"When player dies, a lose screen UI is shown with options to restart or quit",
			"8 bit background music and sound effects for the perfect immersion",
			"And finally, a great sense of humour"
		],
		challenges: [
			"I was stuck on a bug for a few hours and couldn't figure out the solution. Turns out I was looking at the wrong place the entire time. The bug was not in the code it was within the engine itself. From this experience, I learnt to always check both the code and the engine settings when debugging."
		]
	},
	{
		isFlipped: true,
		vidSrc: PlatformDemo, 
		title: "Sunny Land", 
		gitLink: "https://github.com/CelineZhou99/SunnyLand", 
		engine: "Unity", 
		description: PlatformDescription,
		technicals: [
			"Character movement, collecting cherries (currency)",
			"Camera movement",
			"Level design and building using the tilemap system",
			"Player dies when they fall out of the map, the level resets when the player dies",
			"Both stationary and moving enemies damage players when coming in contact with them, die when jumped on by player",
			"Animations using blend tree and state machine",
			"Damage and health system",
			"HUD display for player health, cherries collected",
			"Level complete screen UI is shown in between levels",
			"Sound effects for walking, jumping, attacking, getting hurt, completing levels"
		],
		challenges: [
			"This was my first ever game project! It took me a long time to learn the ins and outs of Unity and how to make a game. I took my time, revisited many concepts to ensure I understood them, and ended up having so much fun while doing so."
		]
	}
];

