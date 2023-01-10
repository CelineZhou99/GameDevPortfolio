import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProjectAccordion = (props) => {
	const { id, title, body } = props;
	return (
		<Accordion sx={{ width: "100%", marginBottom: "15px" }}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls={id + " " + title}
				id={id + " " + title}
				sx={{ backgroundColor: "#B8620E" }}
			>
				<Typography sx={{ fontFamily: "PixelRegular" }}>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails sx={{ backgroundColor: "#FED283" }}>
				<ul>
					{body.items.map((item, index) => (
						<Typography sx={{ fontFamily: "PixelRegular", color: "#531403" }}>
							<li key={index}>{item}</li>
						</Typography>
					))}
				</ul>
			</AccordionDetails>
		</Accordion>
	);
};

export default ProjectAccordion;
