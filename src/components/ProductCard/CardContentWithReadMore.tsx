import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MarginMediumPx } from "../../utils/styles";

interface CardContentWithReadMoreProps {
  text: string;
}

const CardContentWithReadMore: React.FC<CardContentWithReadMoreProps> = ({
  text,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion sx={{ marginTop: MarginMediumPx }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        onClick={toggleExpanded}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "bold" }}
        >
          Product Details: <br />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CardContentWithReadMore;
