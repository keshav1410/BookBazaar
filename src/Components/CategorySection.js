import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const BookCard = ({ categoryId, categoryName }) => {
  const navigate = useNavigate();
  return (
    <Paper
      elevation={4}
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        height: "100px",
        width: "400px",
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "17px",
        color: "#858585",
      }}
      onClick={() => navigate(`/category/${categoryId}`)}
    >
      {categoryName}
    </Paper>
  );
};

export default function CategorySection() {
  const categoryData = [
    {
      categoryId: "2",
      categoryName: "Classics",
    },
    {
      categoryId: "1",
      categoryName: "Comic Book",
    },
    {
      categoryId: "3",
      categoryName: "Detective and Mystery",
    },
    {
      categoryId: "4",
      categoryName: "Fantasy",
    },
    {
      categoryId: "5",
      categoryName: "Historical Fiction",
    },
    {
      categoryId: "6",
      categoryName: "Horror",
    },
  ];
  return (
    <>
      <Box
        sx={{
          p: 5,
        }}
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontFamily: "Montserrat",
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "17px",
            color: "#858585",
          }}
          mb={6}
        >
          Book Categories
        </Typography>
        <Box sx={{ mx: 6 }}>
          <Grid container spacing={5}>
            {categoryData.map((category, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={index}
              >
                <BookCard
                  categoryId={category.categoryId}
                  categoryImage={category.categoryImage}
                  categoryName={category.categoryName}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
