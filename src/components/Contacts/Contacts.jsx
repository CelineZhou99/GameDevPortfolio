import { Container, ContactsItemContainer, Icon, ContactItemText, ContactItemLink } from "./ContactsCss";

function Contacts() {
	return (  
		<Container>
            <ContactsItemContainer>
                <Icon />
                <ContactItemText>celine.zhou.99@outlook.com</ContactItemText>
            </ContactsItemContainer>
            <ContactsItemContainer>
                <Icon />
                <ContactItemLink>LinkedIn</ContactItemLink>
            </ContactsItemContainer>
            <ContactsItemContainer>
                <Icon />
                <ContactItemLink>Github</ContactItemLink>
            </ContactsItemContainer>
		</Container>
	);
}

export default Contacts;