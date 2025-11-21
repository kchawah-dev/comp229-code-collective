import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // convert to true/false
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        Code Collective
      </Link>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>

        {isLoggedIn ? (
          <>
            <Link to="/projects" style={styles.link}>Projects</Link>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#222",
  padding: "10px 40px",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  },
  logo: {
    color: "white",
    fontSize: "20px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  button: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};