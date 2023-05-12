import Navbar from "../Components/Navbar";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import FormHelperText from "@mui/material/FormHelperText";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";

const PublishBook = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [categoryID, setCategoryID] = useState("");
  const [loading2, setLoading2] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      authorName: "",
      price: "",
      quantity: "",
      isbn: "",
      categoryID: "",
      rating: "",
    },
  });

  const handleButtonClick = async () => {
    const userId = "8126999A-F96D-49ED-B355-BC95D738BD4B";
    const formData = new FormData();
    formData.append("file", image);
    if (!loading && image) {
      setSuccess(false);
      setLoading(true);
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/Vendor/UploadFile?userId=${userId}`,
          formData
        )
        .then((response) => {
          setSuccess(true);
          setLoading(false);
          console.log(response);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  };

  const onSubmit = (data) => {
    const userId = "8126999A-F96D-49ED-B355-BC95D738BD4B";
    setLoading2(true);
    data["price"] = Number(data.price);
    data["quantity"] = Number(data.quantity);
    data["rating"] = Number(data.rating);
    console.log(data);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/Vendor/${userId}/PublishBook`,
        data
      )
      .then((response) => {
        console.log(response.data);
        reset();
        setMessage("Book Published successfully");
        setLoading2(false);
        setSeverity("success");
        setOpen(true);
      })
      .catch((error) => {
        console.log(error);
        setMessage("Error while Publishing book");
        setLoading2(false);
        setSeverity("error");
        setOpen(true);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      <Navbar />
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, my: 4 }}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography
              variant="h6"
              textTransform="capitalize"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: "40px",
                lineHeight: "17px",
                color: "#3e3c3c",
                mb: 4,
              }}
            >
              Publish Book
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Book Title"
                  name="title"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={errors.title ? true : false}
                  helperText={
                    errors.title?.type === "required" &&
                    "Book Title is required"
                  }
                  {...register("title", { required: true })}
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Author Name"
                  variant="outlined"
                  name="authorName"
                  fullWidth
                  margin="normal"
                  error={errors.authorName ? true : false}
                  helperText={
                    errors.authorName?.type === "required" &&
                    "Author Name is required"
                  }
                  {...register("authorName", { required: true })}
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <FormControl fullWidth sx={{ my: 2 }}>
                  <InputLabel
                    htmlFor="outlined-adornment-amount"
                    error={errors.price ? true : false}
                  >
                    Price
                  </InputLabel>
                  <OutlinedInput
                    type="number"
                    name="price"
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">₹</InputAdornment>
                    }
                    label="Price"
                    error={errors.price ? true : false}
                    {...register("price", { required: true })}
                  />
                  <FormHelperText error={errors.price ? true : false}>
                    {errors.price?.type === "required" && "Price is required"}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Quantity"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="number"
                  name="quantity"
                  error={errors.quantity ? true : false}
                  helperText={
                    errors.quantity?.type === "required" &&
                    "Quantity is required"
                  }
                  {...register("quantity", { required: true })}
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Rating"
                  variant="outlined"
                  name="rating"
                  fullWidth
                  margin="normal"
                  type="number"
                  error={errors.rating ? true : false}
                  helperText={
                    (errors.rating?.type === "required" &&
                      "Rating is required") ||
                    (errors.rating?.type === "pattern" &&
                      "Ratings should range from 1 to 5 with up to one decimal point")
                  }
                  {...register("rating", {
                    required: true,
                    pattern: /^[1-5](\.[0-9])?$/,
                  })}
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="ISBN Number"
                  name="isbn"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={errors.isbn ? true : false}
                  helperText={
                    errors.isbn?.type === "required" &&
                    "ISBN Number is required"
                  }
                  {...register("isbn", { required: true })}
                />
              </Grid>
            </Grid>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              name="description"
              multiline
              rows={4}
              margin="normal"
              fullWidth
              error={errors.description ? true : false}
              helperText={
                errors.description?.type === "required" &&
                "Description is required"
              }
              {...register("description", { required: true })}
            />

            <FormControl
              fullWidth
              sx={{ my: 2 }}
              error={errors.categoryID ? true : false}
            >
              <InputLabel id="demo-simple-select-label">
                Category Name
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={categoryID}
                label="Category Name"
                // onChange={handleCategoryChange}
                name="categoryID"
                {...register("categoryID", { required: true })}
              >
                <MenuItem value="693942EC-0F2D-4E22-BB9E-1BDD6786DA73">
                  Classics
                </MenuItem>
                <MenuItem value="12FB4864-A627-4663-BD73-8301C620D04F">
                  Comic Book
                </MenuItem>
                <MenuItem value="11637C8C-2B50-4505-AD59-3022B7C44545">
                  Detective and Mystery
                </MenuItem>
                <MenuItem value="FD7753AB-4E4E-42F6-9136-906D6D3BBB13">
                  Fantasy
                </MenuItem>
                <MenuItem value="0EC64D9E-C34A-4481-80D0-7C2FA3B0869B">
                  Historical Fiction
                </MenuItem>
                <MenuItem value="BE9E68D3-1724-4F49-A0A3-08075288A94E">
                  Horror
                </MenuItem>
              </Select>
              <FormHelperText>
                {errors.categoryID?.type === "required" &&
                  "Category Name is required"}
              </FormHelperText>
            </FormControl>
            <Box display="flex" alignItems="center">
              <Typography
                variant="h6"
                textTransform="capitalize"
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "17px",
                  color: "#3e3c3c",
                  mr: 2,
                }}
              >
                Select Book Cover :
              </Typography>
              <Button variant="contained" component="label">
                Select file
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleChange}
                />
              </Button>
              <Box sx={{ mx: 2 }}>
                {image ? image.name : "No File Selected"}
              </Box>
              <Box sx={{ m: 1, position: "relative" }}>
                <Button
                  variant="contained"
                  sx={buttonSx}
                  disabled={loading || image ? false : true}
                  onClick={handleButtonClick}
                >
                  {!success ? "Upload file" : "file uploaded"}
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-12px",
                      marginLeft: "-12px",
                    }}
                  />
                )}
              </Box>
            </Box>
            <LoadingButton
              type="submit"
              fullWidth
              loading={loading2}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Publish Book
            </LoadingButton>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default PublishBook;
