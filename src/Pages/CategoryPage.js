import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Container,
  LinearProgress,
  Rating,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import bookData from "../bookData";
import Card from "../Components/Card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addBooks } from "../Redux/Actions/books";

const CategoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { categoryId, categoryName } = useParams();
  const { pathname } = useLocation();
  const books = useSelector((state) => state.books.books);
  const [loading, setLoading] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (categoryId) {
      const fetchBooks = async () => {
        setLoading(true);
        await axios
          .get(
            `https://localhost:7250/api/Books/api/books/category/${categoryId}`
          )
          .then((response) => {
            console.log(response.data);
            dispatch(addBooks(response.data));
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      };
      fetchBooks();
    }
  }, []);
  return (
    <>
      <Navbar />
      {loading ? (
        <LinearProgress />
      ) : (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              mb: 4,
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
          <Grid container spacing={5} sx={{ mb: 3 }}>
            {books?.map((book) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                key={book.bookID}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  bookId={book.bookID}
                  title={book.title}
                  price={book.price}
                  bookCover={book.bookImage}
                  bookRating={book.rating}
                  bookAuthor={book.authorName}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default CategoryPage;
