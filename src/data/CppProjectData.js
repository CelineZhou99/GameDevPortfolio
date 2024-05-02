const EscapeDemo = "https://www.youtube.com/embed/kVNCzy1JQgI";

const EscapeDescription = "Want to jump in Bob's shoes and experience a dungeon escape? Say no more. This 2D-pixel dungeon puzzle game will have you navigate through classic Sokoban-style puzzles with tons of enemies on the way. Make sure to watch out for that suspicious looking gummy bear on the floor...";

export const CppProjects = [
	{
		isFlipped: true,
		vidSrc: EscapeDemo,
		title: "Bob's Great Escape",
		gitLink: "https://github.com/CelineZhou99/TheEscape", 
		engine: "Pure C++",
		description: EscapeDescription,
		technicals: [
			"Keyboard support", 
            "Character movement (up, down, left, right)", 
            "Scene transition", 
            "Combat system - able to shoot in 4 directions",
            "Enemy AI uses a behaviour tree to move around the map and avoid obstacles", 
            "Sokoban puzzles",
            "Goals for dungeon rooms that can permanently unlock doors and drop loot when achieved",
            "Collectable items such as keys that can unlock doors and gummy bears that can unlock the ability to shoot", 
            "Animations of player and enemy", 
            "Damage and health system",
            "UI that displays player health, collected items, and win/lose screens", 
            "Background music and SFX",
            "Optimised code",
            "Functionalities were mostly made from scratch, only a barebone API was provided",
		],
		challenges: [
			"It took me a while to get used to correctly using pointers and references in C++ as it was my first time learning about things like shared and unique pointers and when to use pointers vs references. As the project grew in size, the structure of the code started to get messy. I found myself going back and correcting code put in place in order to make something work. Learning how to create a behaviour tree and blackboard from scratch took quite some time. It took plenty of retries to get it right! It was also my first time using templates in C++, it was difficult to wrap my head around how to correctly use it in different use cases."
		]
	},
];

