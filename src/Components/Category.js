import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";

const BookCard = ({ categoryId, categoryName, categoryImage }) => {
  return (
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
    >
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 400 }}
          image={categoryImage}
          title={categoryName}
          style={{ cursor: "pointer" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {categoryName}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default function Category() {
  const categoryData = [
    {
      categoryId: "2",
      categoryName: "Classics",
      categoryImage: "/assets/CategoryCover/Classics.jpg",
    },
    {
      categoryId: "1",
      categoryName: "Comic Book",
      categoryImage: "/assets/CategoryCover/ComicBook.jpg",
    },
    {
      categoryId: "3",
      categoryName: "Detective and Mystery",
      categoryImage: "/assets/CategoryCover/Mystery.jpg",
    },
    {
      categoryId: "4",
      categoryName: "Fantasy",
      categoryImage: "/assets/CategoryCover/Fantasy.jpg",
    },
    {
      categoryId: "5",
      categoryName: "Historical Fiction",
      categoryImage: "/assets/CategoryCover/HistoricalFiction.jpg",
    },
    {
      categoryId: "6",
      categoryName: "Horror",
      categoryImage: "/assets/CategoryCover/Horror.jpg",
    },
  ];
  return (
    <>
      <Box
        sx={{
          my: 4,
          p: 2,
        }}
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <Grid container spacing={2}>
          {categoryData.map((category, index) => (
            <BookCard
              categoryId={category.categoryId}
              categoryImage={category.categoryImage}
              categoryName={category.categoryName}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
}
