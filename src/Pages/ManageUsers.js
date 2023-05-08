import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import UsersManageTable from "../Components/UsersManageTable";

const ManageUsers = () => {
  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Navbar />
      </Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            mb: 4,
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
            Manage Users
          </Typography>
        </Box>
        <UsersManageTable />
      </Container>
    </>
  );
};

export default ManageUsers;
