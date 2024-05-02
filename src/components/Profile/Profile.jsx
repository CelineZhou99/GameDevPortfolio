import {
	Container,
	PictureContainer,
	StatsContainer,
	HobbiesContainer,
	HobbiesItemsContainer,
	Picture,
	NameTag,
	StatsItemsContainer,
	HobbiesItem,
} from "./ProfileCss";

function Profile() {
	return (
		<Container>
			<PictureContainer>
				<Picture src="./pxArt.png" alt="profile picture" />
				<NameTag>Celine Zhou</NameTag>
			</PictureContainer>
			<StatsContainer>
				<StatsItemsContainer>
					<p>Game Developer Exp: 1 Full-time</p>
				</StatsItemsContainer>
				<StatsItemsContainer>
					<p>Type: Game Developer</p>
				</StatsItemsContainer>
				<StatsItemsContainer>
					<p>Weapon: Unreal Engine 5</p>
				</StatsItemsContainer>
				<StatsItemsContainer>
					<p>Status: Looking for experiences</p>
				</StatsItemsContainer>
			</StatsContainer>
			<HobbiesContainer>
				<HobbiesItemsContainer>
					<NameTag>Interests</NameTag>
				</HobbiesItemsContainer>
				<HobbiesItemsContainer>
					<HobbiesItem src="./Cat.svg" alt="Cat" />
					<HobbiesItem src="./Games.svg" alt="Games" />
					<HobbiesItem src="./Travel.svg" alt="Travel" />
				</HobbiesItemsContainer>
				<HobbiesItemsContainer>
					<HobbiesItem src="./Cooking.svg" alt="Cooking" />
					<HobbiesItem src="./Dancing.svg" alt="Dancing" />
					<HobbiesItem src="./Anime.svg" alt="Anime" />
				</HobbiesItemsContainer>
			</HobbiesContainer>
		</Container>
	);
}

export default Profile;
