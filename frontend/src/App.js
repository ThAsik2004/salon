import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyBookings from "./pages/MyBookings";
import Account from "./pages/Account";

import "./Navbar.css";

function App() {

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">

          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/services" className="nav-link">SERVICES</Link>

          {token ? (
            <>
              <Link to="/bookings" className="nav-link">MY BOOKINGS</Link>
              <Link to="/account" className="nav-link">ACCOUNT</Link>

              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={logout}
              >
                LOGOUT
              </span>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">LOGIN</Link>
              <Link to="/register" className="nav-link">REGISTER</Link>
            </>
          )}

        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/account" element={<Account />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
