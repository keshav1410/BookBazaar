import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const BookCard = ({ categoryId, categoryName, routeName }) => {
  const navigate = useNavigate();
  return (
    <Paper
      elevation={0}
      variant="outlined"
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
        ":hover": {
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        },
      }}
      onClick={() => navigate(`/${routeName}/${categoryId}`)}
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
      routeName: "classics",
    },
    {
      categoryId: "1",
      categoryName: "Comic Book",
      routeName: "comic-book",
    },
    {
      categoryId: "3",
      categoryName: "Detective and Mystery",
      routeName: "detective-and-mystery",
    },
    {
      categoryId: "4",
      categoryName: "Fantasy",
      routeName: "fantasy",
    },
    {
      categoryId: "5",
      categoryName: "Historical Fiction",
      routeName: "historical-fiction",
    },
    {
      categoryId: "6",
      categoryName: "Horror",
      routeName: "horror",
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
                  routeName={category.routeName}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
