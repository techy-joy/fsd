import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Shelf from "./components/Shelf";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactUs from "./components/contactus";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/shelf" element={<Shelf />} />
      </Routes>

      {location.pathname === '/' && (
        <>
          <About />
          <ContactUs />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;
