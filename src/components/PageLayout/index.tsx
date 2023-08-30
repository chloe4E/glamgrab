import { ReactNode } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { MarginLargePx, MarginSmallPx } from "../../utils/styles";

interface TitleForContainerProps {
  title: string;
  elementsRightOfTitle?: ReactNode;
  elementsOppositeToTitle?: ReactNode;
}

interface ContainerWithTitleProps extends TitleForContainerProps {
  children: ReactNode;
}

const Container = ({ children }: { children: ReactNode }) => (
  <Grid
    style={{
      padding: `${MarginLargePx} ${MarginLargePx} 0`,
    }}
  >
    {children}
  </Grid>
);

const Title = ({
  title,
  elementsRightOfTitle,
  elementsOppositeToTitle,
}: TitleForContainerProps) => (
  <Box
    style={{
      marginBottom: MarginLargePx,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        gap: MarginSmallPx,
      }}
    >
      <Typography variant="h3">{title}</Typography>
      {elementsRightOfTitle}
    </Box>

    {elementsOppositeToTitle}
  </Box>
);

const ContainerWithTitle = ({
  title,
  children,
  elementsRightOfTitle,
  elementsOppositeToTitle,
}: ContainerWithTitleProps) => (
  <Container>
    <Title
      title={title}
      elementsOppositeToTitle={elementsOppositeToTitle}
      elementsRightOfTitle={elementsRightOfTitle}
    />
    {children}
  </Container>
);

export { ContainerWithTitle, Container };
