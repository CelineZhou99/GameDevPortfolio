import { 
    Container, 
    PictureContainer, 
    StatsContainer, 
    HobbiesContainer, 
    HobbiesItemsContainer, 
    Picture,
    NameTag, 
    StatsItemsContainer,
    StatsLevel,
    HobbiesItem,
} from "./ProfileCss";

function Profile() {
  return (
    <Container>
        <PictureContainer>
            <Picture src="./selfie.jpg" alt="profile picture" />
            <NameTag>Celine Zhou</NameTag>
        </PictureContainer>
        <StatsContainer>
            <StatsItemsContainer>
                <p>Work Exp:</p>
                <StatsLevel src="./LevelFour.svg" alt="level 4" />
            </StatsItemsContainer>
            <StatsItemsContainer>
                <p>Type: Game Developer</p>
            </StatsItemsContainer>
            <StatsItemsContainer>
                <p>Weapon of Choice: Unreal Engine</p>
            </StatsItemsContainer>
            <StatsItemsContainer>
                <p>Game Dev Exp:</p>
                <StatsLevel src="./LevelFive.svg" alt="level 5" />
            </StatsItemsContainer>
        </StatsContainer>
        <HobbiesContainer>
            <HobbiesItemsContainer>
                <HobbiesItem src="./Likes.svg" alt="Likes" />
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