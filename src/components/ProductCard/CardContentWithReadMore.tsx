import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface CardContentWithReadMoreProps {
  text: string;
}

const CardContentWithReadMore: React.FC<CardContentWithReadMoreProps> = ({
  text,
}) => {
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    // <>
    //   <Typography
    //     variant="body2"
    //     noWrap={!expanded}
    //     style={{ lineHeight: "1.2em" }}
    //   >
    //     {text}
    //   </Typography>
    //   {!expanded && (
    //     <Typography variant="body2">
    //       <Button color="primary" onClick={toggleExpanded}>
    //         Read More
    //       </Button>
    //     </Typography>
    //   )}
    // </>

    <Typography
      variant="body2"
      color="text.secondary"
      style={{ lineHeight: "1.5em" }}
    >
      Product details: <br />
      {expanded ? text : text.slice(0, 50)}
      {!expanded && (
        <Button size="small" onClick={toggleExpanded}>
          Read More
        </Button>
      )}
    </Typography>
  );
};

export default CardContentWithReadMore;
