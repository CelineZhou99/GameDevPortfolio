import { 
	Container, 
	VideoContainer, 
	TitleContainer, 
	TitleText, 
	BodyText,
	NumberContainer,
	Number
} from "./ProjectCss";

const Project = props => {
	const {isFlipped, gifSrc, gifAlt, title, gitLink, engine, description, number} = props;
	return (  
		<Container>
			{!isFlipped && 
				<>
					<VideoContainer>
						<img src={gifSrc} alt={gifAlt} />
						<TitleContainer>
							<TitleText>{title}</TitleText>
							<TitleText>{gitLink}</TitleText>
						</TitleContainer>
						<BodyText>{engine}</BodyText>
						<BodyText>{description}</BodyText>
					</VideoContainer>
					<NumberContainer>
						<Number>{number}</Number>
					</NumberContainer>
				</>
			}
			{isFlipped && 
				<>
					<NumberContainer>
						<Number>{number}</Number>
					</NumberContainer>
					<VideoContainer>
						<img src={gifSrc} alt={gifAlt} />
						<TitleContainer>
							<TitleText>{title}</TitleText>
							<TitleText>{gitLink}</TitleText>
						</TitleContainer>
						<BodyText>{engine}</BodyText>
						<BodyText>{description}</BodyText>
					</VideoContainer>
				</>
			}
		</Container>
	);
}

export default Project;