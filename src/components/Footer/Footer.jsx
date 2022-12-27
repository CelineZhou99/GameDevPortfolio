import { FooterContainer, Text, IconContainer, IconLink, Icon } from "./FooterCss";

const Footer = (props) => {
	const { email, github, linkedin } = props;
	return (
		<FooterContainer>
			<Text>{email}</Text>
			<IconContainer>
				<IconLink id="Contacts_ID" href={linkedin} target="_blank" rel="noreferrer">
					<Icon src="./Linkedin.png" alt="linkedin icon" />
				</IconLink>
				<IconLink href={github} target="_blank" rel="noreferrer">
					<Icon src="./Github.png" alt="github icon" />
				</IconLink>
			</IconContainer>
		</FooterContainer>
	);
};

export default Footer;
