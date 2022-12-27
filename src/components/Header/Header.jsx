import { Container, RowParent, RowChild, LinkText } from "./HeaderCss";

function Header() {
	return (
		<Container>
			<RowParent>
				<LinkText notLink>Celine Zhou</LinkText>
				<RowChild>
					<LinkText href="#Profile_ID">Profile</LinkText>
					<LinkText href="#Unreal_ID">Unreal</LinkText>
					<LinkText href="#Unity_ID">Unity</LinkText>
					<LinkText href="#Contacts_ID">Contacts</LinkText>
				</RowChild>
			</RowParent>
		</Container>
	);
}

export default Header;
