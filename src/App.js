import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import User from "./Components/User";

function App() {
  return (
    <BrowserRouter>
       <nav
      style={{
        backgroundColor: "indigo",
        padding: "20px",
        fontFamily: "sans-serif",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left: Logo */}
      <div style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>
        REACT REDUX
      </div>

      {/* Right: Navigation Links */}
      <div>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            marginLeft: "20px",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>

        <Link
          to="/user"
          style={{
            color: "white",
            textDecoration: "none",
            marginLeft: "20px",
            fontWeight: "bold",
          }}
        >
          User
        </Link>

        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none",
            marginLeft: "20px",
            fontWeight: "bold",
          }}
        >
          About
        </Link>

        <Link
          to="/contact"
          style={{
            color: "white",
            textDecoration: "none",
            marginLeft: "20px",
            fontWeight: "bold",
          }}
        >
          Contact
        </Link>
      </div>
    </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
