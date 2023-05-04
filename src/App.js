import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ForgotPassword from "./Pages/ForgetPassword";
import Home from "./Pages/Home";
import CategoryPage from "./Pages/CategoryPage";
import BookPage from "./Pages/BookPage";
import PublishBook from "./Pages/PublishBook";

const App = () => {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route
              path="/:categoryName/:categoryId"
              element={<CategoryPage />}
            />
            <Route path="/book/:id" element={<BookPage />} />
            <Route path="/profile/:userId" element={<BookPage />} />
            <Route path="/settings" element={<BookPage />} />
            <Route path="/publish" element={<PublishBook />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
