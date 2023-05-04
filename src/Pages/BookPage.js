import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const BookPage = () => {
  const data = {
    bookId: "4",
    title: "The Haunting of Hill House",
    bookAuthor: "The Haunting of Hill House",
    price: 678,
    bookRating: 4,
    bookCover: "/assets/CategoryCover/Horror.jpg",
    description:
      "The Haunting of Hill House is a 1959 gothic horror novel by American author Shirley Jackson. A finalist for the National Book Award and considered one of the best literary ghost stories published during the 20th century, it has been made into two feature films and a play, and is the basis of a Netflix series. ",
  };
  return (
    <>
      <Navbar />
      <Box>
        <Grid
          container
          style={{
            minHeight: "500px",
            margin: "50px auto",
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
            display="flex"
            justifyContent="center"
            sx={{
              alignItems: "center",
            }}
          >
            <img
              src={data.bookCover}
              alt={data.title}
              style={{ aspectRatio: 2 / 3 }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            display="flex"
            justifyContent="center"
            sx={{
              flexDirection: "column",
            }}
          >
            <Box sx={{ m: "auto", py: 3, px: 6 }}>
              <Typography
                variant="h4"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "800",
                  fontSize: "36px",
                  lineHeight: "44px",
                  color: "black",
                  marginBottom: "10px",
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="h3"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "25px",
                  lineHeight: "44px",
                  color: "black",
                }}
              >
                Price : ₹{data.price}
              </Typography>
              <Typography
                variant="h4"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "44px",
                  color: "black",
                }}
              >
                Description:
              </Typography>
              <Typography
                variant="h4"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "44px",
                  color: "black",
                  textAlign: "justify",
                  marginBottom: "10px",
                }}
              >
                {data.description}
              </Typography>
              <Button variant="contained" endIcon={<ShoppingCartIcon />}>
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BookPage;
