import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import UserSignUp from "./Pages/UserSignUp";
import SignIn from "./Pages/SignIn";
import ForgotPassword from "./Pages/ForgetPassword";
import Home from "./Pages/Home";
import Category from "./Components/Category";

const App = () => {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<UserSignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
