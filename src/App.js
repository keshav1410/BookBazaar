import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import UserSignUp from "./Pages/UserSignUp";
import SignIn from "./Pages/SignIn";
import ForgotPassword from "./Pages/ForgetPassword";
import VendorSignUp from "./Pages/VendorSignUp";
import Home from "./Pages/Home";

const App = () => {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/usersignup" element={<UserSignUp />} />
            <Route path="/vendorsignup" element={<VendorSignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
