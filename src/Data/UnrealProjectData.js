const ShooterDemo = "https://www.youtube.com/embed/Ca3wOfvwKpA";
const TankDemo = "https://www.youtube.com/embed/bl45NCqkt3U"
const DungeonDemo = "https://www.youtube.com/embed/w6QSgaJhm4g"

const ShooterDescription = "Emerce yourself in a Sci-Fi themed Third Person Shooter game packed with action and intense music. Hone your aiming skills and take down the enemies, but be aware - they will search and chase after you with all their might!"
const TankDescription = "Control a mighty toon tank and challenge yourself to beat the many enemies wired to destroy you when you get too close. Warning: the battle will be so intense the ground will start shaking, so hold onto your hats!"
const DungeonDescription = "Hop into the shoes of a professional thief and sneak into the gruesome dungeon and steal the golden statue. There will be many puzzles along the way to stop you in your tracks. But nothing's stopping that big brain of yours!"

export const UnrealProjects = [
	{
		isFlipped: false,
		vidSrc: ShooterDemo, 
		title: "Sci-Fi Shooter", 
		gitLink: "https://github.com/CelineZhou99/SciFiShooter-UE5", 
		engine: "Unreal Engine 5", 
		description: ShooterDescription,
		technicals: [
			"Controller supported",
            "Character movement, aiming, shooting", 
            "Camera movement",
            "Intelligent enemy AI coded using behaviour tree, blackboard, custom tasks and services written in C++", 
            "Enemy AI will chase the player when in sight, shoot the player every few seconds when in range, search for the player within their boundaries when the player is out of sight (during the chase), return to their original post when the search fails", 
            "Animations made using blend space and state machine",
            "Damage and health system",
            "Game mode - eliminate all enemies", 
            "HUD display for player health",
            "Win/Lose screen UI",
            "Ending architecture implemented to allow for different game modes",
            "Visual effects for muzzle flash and bullet impact using the particle system",
            "Randomised sound effects for shooting and bullet impact", 
            "Background music",
		],
		challenges: [
			"Adding the animations was tricky as switching between blend space, event graph, and state machine got a little confusing", 
            "Writing the enemy AI was complicated as I was new to many new concepts like behaviour trees and custom tasks. Hence I took my time in this section",
            "Making a shooter game was a lot more complicated than I expected. I sectioned the work evenly and took my time to not feel overwhelmed"
		]
	},
	{
		isFlipped: true,
		vidSrc: TankDemo, 
		title: "ToonTanks", 
		gitLink: "https://github.com/CelineZhou99/Tanks-UE5", 
		engine: "Unreal Engine 5", 
		description: TankDescription,
		technicals: [
			"Tank movement, aiming, shooting",
            "Bullet projectile",
            "Camera movement and camera shake when shooting projectile and projectile impact",
            "Enemy AI written in C++",
            "Enemy AI are stationary but will focus on the player when they are in range, shoot the player every few seconds when in range",
            "Damage and health system",
            "Game mode - eliminate all enemies",
            "Win/Lose screen UI",
            "Visual effects for projectile launching and hitting a target using the particle system",
            "Sound effects for shooting and projectile impact",
		],
		challenges: [
			"I was introduced to many new functions in Unreal's library as it was my first time handling projectiles and AI. The sheer amount of functions available was a little overwhelming"
		]
	},
	{
		isFlipped: false,
		vidSrc: DungeonDemo, 
		title: "Dungeon Raider", 
		gitLink: "https://github.com/CelineZhou99/DungeonRaider-UE5", 
		engine: "Unreal Engine 5", 
		description: DungeonDescription,
		technicals: [
			"Character moving, looking around", 
            "Picking up game objects and applying physics",
            "Camera movement",
            "Modular level building",
            "Designing puzzles that players have to solve to progress the game",
            "Lumin lighting"
		],
		challenges: [
			"The modular level building was a long and tedious experience, but at the same time I found it very fun to design and decorate the level", 
			"Trying to prevent light bleeding was surprisingly tedious"
		]
	},
];

