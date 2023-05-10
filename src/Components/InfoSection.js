import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Container, Grid } from "@mui/material";

const data = [
  {
    title: "Free Shipping",
    desc: "Free Delivery on all orders",
    cardImage: "/assets/Capture.png",
  },
  {
    title: "Money Guarantee",
    desc: "30 days money back",
    cardImage: "/assets/Capture1.png",
  },
  {
    title: "24/7 Support",
    desc: "Friendly 24/7 support",
    cardImage: "/assets/Capture2.png",
  },
  {
    title: "Secure Payment",
    desc: "All cards accepted",
    cardImage: "/assets/Capture3.png",
  },
];

const SmallCard = ({ title, desc, cardImage }) => {
  return (
    <Card sx={{ display: "flex", boxShadow: 0 }}>
      <CardMedia
        component="img"
        sx={{ width: 90, objectFit: "contain" }}
        image={cardImage}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              fontFamily: "Montserrat",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              fontFamily: "Montserrat",
            }}
            color="#858585"
            component="div"
          >
            {desc}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default function InfoSection() {
  const theme = useTheme();

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={0}>
        {data.map((icons, index) => (
          <Grid key={index} item md={3}>
            <SmallCard {...icons} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
