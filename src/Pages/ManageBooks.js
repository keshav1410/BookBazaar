import { Box, Container, LinearProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import ManageBooksTable from "../Components/ManageBooksTable";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const showBooks = async () => {
    setLoading(true);
    await axios
      .get(
        "https://localhost:7250/api/Vendor/8126999A-F96D-49ED-B355-BC95D738BD4B/GetVendor_Published_Books"
      )
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    showBooks();
  }, []);

  return (
    <>
      <Box>
        <Navbar />
      </Box>
      {loading ? (
        <LinearProgress />
      ) : (
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              mb: 4,
              mt: 5,
            }}
          >
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
              Manage Books
            </Typography>
          </Box>
          <ManageBooksTable books={books} showBooks={showBooks} />
        </Container>
      )}
    </>
  );
};

export default ManageBooks;
