import { Box, Container, LinearProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import UsersManageTable from "../Components/UsersManageTable";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const showUsers = async () => {
    setLoading(true);
    await axios
      .get("https://localhost:7250/api/Admin/GetUsers")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    showUsers();
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
              Manage Users
            </Typography>
          </Box>
          <UsersManageTable users={users} showUsers={showUsers} />
        </Container>
      )}
    </>
  );
};

export default ManageUsers;
