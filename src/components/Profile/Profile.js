import { 
    Container, 
    PictureContainer, 
    StatsContainer, 
    HobbiesContainer, 
    HobbiesItemsContainer, 
    Picture,
    NameTag, 
} from "./ProfileCss";

function Profile() {
  return (
    <Container>
        <PictureContainer>
            <Picture src="./selfie.jpg" alt="profile picture" />
            <NameTag>Celine Zhou</NameTag>
        </PictureContainer>
        <StatsContainer>
            stats
        </StatsContainer>
        <HobbiesContainer>
            <HobbiesItemsContainer>
                item
            </HobbiesItemsContainer>
            <HobbiesItemsContainer>
                item
            </HobbiesItemsContainer>
            <HobbiesItemsContainer>
                item
            </HobbiesItemsContainer>
        </HobbiesContainer>
    </Container>
  );
}

export default Profile;