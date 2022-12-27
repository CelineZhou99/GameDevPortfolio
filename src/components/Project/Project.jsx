import {
	Container,
	VideoContainer,
	Iframe,
	TitleContainer,
	TitleText,
	BodyText,
	DescriptionContainer,
	Number,
	GitLink,
	GitIcon,
} from "./ProjectCss";

const Project = (props) => {
	const { isFlipped, vidSrc, title, gitLink, engine, description, number } = props;
	return (
		<Container>
			{!isFlipped && (
				<>
					<VideoContainer flexSide="flex-start">
						<Iframe src={vidSrc} allowFullScreen />
					</VideoContainer>
					<DescriptionContainer>
						<Number>{number}</Number>
						<TitleContainer>
							<TitleText>{title}</TitleText>
							<GitLink href={gitLink} target="_blank" rel="noreferrer">
								<GitIcon src="./Github.png" alt="github icon" />
							</GitLink>
						</TitleContainer>
						<BodyText>{engine}</BodyText>
						<BodyText>{description}</BodyText>
					</DescriptionContainer>
				</>
			)}
			{isFlipped && (
				<>
					<DescriptionContainer>
						<Number>{number}</Number>
						<TitleContainer>
							<TitleText>{title}</TitleText>
							<GitLink href={gitLink} target="_blank" rel="noreferrer">
								<GitIcon src="./Github.png" alt="github icon" />
							</GitLink>
						</TitleContainer>
						<BodyText>{engine}</BodyText>
						<BodyText>{description}</BodyText>
					</DescriptionContainer>
					<VideoContainer flexSide="flex-end">
						<Iframe src={vidSrc} />
					</VideoContainer>
				</>
			)}
		</Container>
	);
};

export default Project;
