import React from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const PublishBook = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box sx={{ my: 6 }}>
          <Typography
            variant="h6"
            textTransform="capitalize"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "17px",
              color: "#858585",
              my: 4,
            }}
          >
            Publish Book
          </Typography>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="outlined-basic"
            label="Author Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">₹</InputAdornment>
              }
              label="Price"
            />
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            id="outlined-basic"
            label="Rating"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            margin="normal"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="ISBN Number"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel id="demo-simple-select-label">Category Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={age}
              label="Category Name"
              //   onChange={handleChange}
            >
              <MenuItem value="classics">Classics</MenuItem>
              <MenuItem value="comic-book">Comic Book</MenuItem>
              <MenuItem value="detective-and-mystery">
                Detective and Mystery
              </MenuItem>
              <MenuItem value="fantasy">Fantasy</MenuItem>
              <MenuItem value="historical-fiction">Historical Fiction</MenuItem>
              <MenuItem value="horror">Horror</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
    </>
  );
};

export default PublishBook;
