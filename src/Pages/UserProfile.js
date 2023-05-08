import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Grid,
} from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const data = {
  firstName: "Aditya",
  lastName: "Goyal",
  email: "adityago563@gmail.com",
  password: "Aditya@123",
};

const UserProfile = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(true);
  };

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
            User Profile
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { lg: "row", xs: "column", md: "row" },
          }}
        >
          <Grid container spacing={4}>
            <Grid item md={4.5} xs={12}>
              <Paper
                elevation={2}
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  style={{ borderRadius: "50%", border: "1px solid #000" }}
                  src="/assets/avatar.jpg"
                  alt="User Profile Avatar"
                />
              </Paper>
            </Grid>
            <Grid item md={7} xs={12}>
              <Paper
                elevation={2}
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  width: "100%",
                  mt: { lg: 0, md: 0, xs: 3 },
                  mb: { lg: 0, md: 0, xs: 4 },
                  position: "relative",
                }}
              >
                <Grid
                  container
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Grid
                    item
                    md={5.5}
                    xs={12}
                    sx={{ mb: { lg: 4, md: 4, xs: 1 }, mt: 2 }}
                  >
                    <TextField
                      id="firstName"
                      label="First Name"
                      defaultValue={data.firstName}
                      sx={{ width: "100%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    md={5.5}
                    xs={12}
                    sx={{ mb: { lg: 0, md: 0, xs: 2 }, mt: 2 }}
                  >
                    <TextField
                      id="lastName"
                      label="Last Name"
                      sx={{ width: "100%" }}
                      defaultValue={data.lastName}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>

                  <Grid
                    item
                    md={11.5}
                    xs={12}
                    sx={{
                      mb: { lg: 9.5, md: 9.5, xs: 10 },
                      alignItems: "left",
                    }}
                  >
                    <TextField
                      id="email"
                      label="Email"
                      defaultValue={data.email}
                      sx={{ width: "100%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    background: "#DCDCDC",
                    padding: "5px",
                    paddingRight: "15px",
                    position: "absolute",
                    left: { lg: 35, md: 35, xs: 22 },
                    bottom: 20,
                    borderRadius: "10px",
                  }}
                >
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch checked={checked} onChange={handleChange} />
                      }
                      label="Want to be a Vendor ?"
                      labelPlacement="start"
                    />
                  </FormGroup>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default UserProfile;
