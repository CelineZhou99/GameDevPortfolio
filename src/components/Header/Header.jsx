import { Container, RowParent, RowChild, LinkText, MobileParent } from "./HeaderCss";

function Header() {
	return (
		<Container>
			<RowParent>
				<LinkText notLink>Celine Zhou</LinkText>
				<RowChild>
					<LinkText href="#Profile_ID">Profile</LinkText>
					<LinkText href="#Unreal_ID">Unreal</LinkText>
					<LinkText href="#Unity_ID">Unity</LinkText>
					<LinkText href="#Contacts_ID">Contact</LinkText>
				</RowChild>
			</RowParent>
			<MobileParent>
				<LinkText notLink>Celine Zhou</LinkText>
			</MobileParent>
		</Container>
	);
}

export default Header;
