const FPSDemo = "https://www.youtube.com/embed/Ca3wOfvwKpA";
const TankDemo = "https://www.youtube.com/embed/bl45NCqkt3U"
const DungeonDemo = "https://www.youtube.com/embed/w6QSgaJhm4g"

const FPSDescription = "Emerce yourself in a Sci-Fi themed First Person Shooter game packed with action and intense music. Hone your aiming skills and take down the enemies, but be aware - they will search and chase after you with all their might! (Full Controller Support.)"
const TankDescription = "Control a mighty toon tank and challenge yourself to beat the many enemies wired to destroy you when you get too close. Warning: the battle will be so intense the ground will start shaking, so hold onto your hats!"
const DungeonDescription = "Hop into the shoes of a professional thief and sneak into the gruesome dungeon and steal the golden statue. There will be many puzzles along the way to stop you in your tracks. But nothing's stopping that big brain of yours!"

export const UnrealProjects = [
	{
		isFlipped: false,
		vidSrc: FPSDemo, 
		title: "Sci-Fi Shooter", 
		gitLink: "https://github.com/CelineZhou99/SciFiShooter-UE5", 
		engine: "Unreal Engine 5", 
		description: FPSDescription, 
		number: "01"
	},
	{
		isFlipped: true,
		vidSrc: TankDemo, 
		title: "ToonTanks", 
		gitLink: "https://github.com/CelineZhou99/Tanks-UE5", 
		engine: "Unreal Engine 5", 
		description: TankDescription, 
		number: "02"
	},
	{
		isFlipped: false,
		vidSrc: DungeonDemo, 
		title: "Dungeon Raider", 
		gitLink: "https://github.com/CelineZhou99/DungeonRaider-UE5", 
		engine: "Unreal Engine 5", 
		description: DungeonDescription, 
		number: "03"
	},
];

