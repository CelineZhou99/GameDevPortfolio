import {
	Container,
	VideoContainer,
	Iframe,
	TitleContainer,
	TitleText,
	BodyText,
	DescriptionContainer,
	GitLink,
	GitIcon,
} from "./ProjectCss";
import ProjectAccordion from "./ProjectAccordion";

const Project = (props) => {
	const { isFlipped, vidSrc, title, gitLink, engine, description, technicals, challenges } = props;
	return (
		<Container>
			{!isFlipped && (
				<>
					<VideoContainer flexSide="flex-start">
						<Iframe src={vidSrc} allowFullScreen />
					</VideoContainer>
					<DescriptionContainer>
						<TitleContainer>
							<TitleText>{title}</TitleText>
							<GitLink href={gitLink} target="_blank" rel="noreferrer">
								<GitIcon src="./Github.png" alt="github icon" />
							</GitLink>
						</TitleContainer>
						<BodyText>{engine}</BodyText>
						<BodyText>{description}</BodyText>
						<ProjectAccordion id={title} title="Technical Aspects" body={{ items: technicals }} />
						<ProjectAccordion id={title} title="Challenges Faced" body={{ items: challenges }} />
					</DescriptionContainer>
				</>
			)}
			{isFlipped && (
				<>
					<DescriptionContainer>
						<TitleContainer>
							<TitleText>{title}</TitleText>
							<GitLink href={gitLink} target="_blank" rel="noreferrer">
								<GitIcon src="./Github.png" alt="github icon" />
							</GitLink>
						</TitleContainer>
						<BodyText>{engine}</BodyText>
						<BodyText>{description}</BodyText>
						<ProjectAccordion id={title} title="Technical Aspects" body={{ items: technicals }} />
						<ProjectAccordion id={title} title="Challenges Faced" body={{ items: challenges }} />
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
