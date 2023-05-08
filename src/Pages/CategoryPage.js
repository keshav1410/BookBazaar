import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Box, Rating, Typography } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import bookData from "../bookData";
import Card from "../Components/Card";

const CategoryPage = () => {
  const navigate = useNavigate();
  let { categoryId, categoryName } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //   useEffect(() => {
  // axios
  //   .get("", categoryId)
  //   .then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  //   }, []);
  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Navbar />
      </Box>
      <Box sx={{ mx: 20, mb: 5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            mb: 7,
          }}
        >
          <ArrowBackIcon
            fontSize="large"
            sx={{ cursor: "pointer", mr: 1, color: "#858585" }}
            onClick={() => navigate(-1)}
          />
          <Typography
            variant="h5"
            textTransform="capitalize"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: "700",
              fontSize: "25px",
              lineHeight: "17px",
              color: "#858585",
            }}
          >
            Category : {categoryName}
          </Typography>
        </Box>
        <Grid container spacing={5}>
          {bookData.map((book) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={book.bookId}>
              <Card
                bookId={book.bookId}
                title={book.title}
                price={book.price}
                bookCover={book.bookCover}
                bookRating={book.bookRating}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CategoryPage;
