import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const BookCard = ({ categoryId, categoryName, routeName }) => {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        height: "100px",
        width: "400px",
        fontFamily: "Montserrat",
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "17px",
        transition: "all 0.3s",
        border: "1px solid rgb(224 224 224)",
        borderRadius: "2px",
        color: "#6e6c6c",
      }}
      sx={{
        p: 2,
        ":hover": {
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        },
      }}
      onClick={() => navigate(`/${routeName}/${categoryId}`)}
    >
      {categoryName}
    </Box>
  );
};

export default function CategorySection() {
  const categoryData = [
    {
      categoryId: "693942EC-0F2D-4E22-BB9E-1BDD6786DA73",
      categoryName: "Classics",
      routeName: "classics",
    },
    {
      categoryId: "12FB4864-A627-4663-BD73-8301C620D04F",
      categoryName: "Comic Book",
      routeName: "comic-book",
    },
    {
      categoryId: "11637C8C-2B50-4505-AD59-3022B7C44545",
      categoryName: "Detective and Mystery",
      routeName: "detective-and-mystery",
    },
    {
      categoryId: "FD7753AB-4E4E-42F6-9136-906D6D3BBB13",
      categoryName: "Fantasy",
      routeName: "fantasy",
    },
    {
      categoryId: "0EC64D9E-C34A-4481-80D0-7C2FA3B0869B",
      categoryName: "Historical Fiction",
      routeName: "historical-fiction",
    },
    {
      categoryId: "BE9E68D3-1724-4F49-A0A3-08075288A94E",
      categoryName: "Horror",
      routeName: "horror",
    },
  ];
  return (
    <>
      <Box sx={{ p: 5 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontFamily: "Montserrat",
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "17px",
            color: "#858585",
            background: "#fff",
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
