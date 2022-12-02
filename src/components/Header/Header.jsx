import { Container, RowParent, RowChild, LinkText } from './HeaderCss';

function Header() {
  return (
    <Container>
		<RowParent>
			<LinkText>Celine Zhou</LinkText>
			<RowChild>
				<LinkText id="profile">Profile</LinkText>
				<LinkText id="unreal">Unreal</LinkText>
				<LinkText id="unity">Unity</LinkText>
				<LinkText id="contacts">Contacts</LinkText>
			</RowChild>
		</RowParent>
    </Container>
  );
}

export default Header;