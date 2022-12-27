const SubText = "Phasellus dictum pretium ex in imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tincidunt, nunc sed commodo molestie, quam massa dignissim dolor, quis fermentum enim elit in urna. Donec varius pretium dui eget ultrices. Nam in enim eleifend, ultricies tortor nec, tempus quam. ";

const FPSDemo = "https://www.youtube.com/embed/Ca3wOfvwKpA";
const TankDemo = "https://www.youtube.com/embed/bl45NCqkt3U"
const DungeonDemo = "https://www.youtube.com/embed/w6QSgaJhm4g"

const FPSDescription = "A Sci-Fi themed third person shooter game. PC and Controller supported."

export const UnrealProjects = [
	{
		isFlipped: false,
		vidSrc: FPSDemo, 
		title: "Sci-Fi Shooter", 
		gitLink: "https://github.com/CelineZhou99/SciFiShooter-UE5", 
		engine: "Unreal Engine 5", 
		description: SubText, 
		number: "01"
	},
	{
		isFlipped: true,
		vidSrc: TankDemo, 
		title: "ToonTanks", 
		gitLink: "https://github.com/CelineZhou99/Tanks-UE5", 
		engine: "Unreal Engine 5", 
		description: SubText, 
		number: "02"
	},
	{
		isFlipped: false,
		vidSrc: DungeonDemo, 
		title: "Dungeon Raider", 
		gitLink: "https://github.com/CelineZhou99/DungeonRaider-UE5", 
		engine: "Unreal Engine 5", 
		description: SubText, 
		number: "03"
	},
];

