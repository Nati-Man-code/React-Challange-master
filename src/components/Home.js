import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const homeStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "30vh",
  textAlign: "center",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "500px",
  margin: "20px",
};

const buttonStyle = {
  textDecoration: "none",
  color: "#fff",
  backgroundColor: "#525252",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "10px",
};

/**
 * Renders a home page with two buttons.
 * The current page is tracked and updated whenever a new route is accessed.
 */
function Home() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const homeStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "30vh",
    textAlign: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "500px",
    margin: "20px",
  };

  const buttonStyle = {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#525252",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  };

  return (
    <div data-testid="home-component" style={homeStyle}>
      <div style={buttonContainerStyle}>
        <button data-testid="register-button" style={buttonStyle}>
          <Link to="/candidate/registration" style={buttonStyle}>
            Register Candidate
          </Link>
        </button>
        <button data-testid="list-button" style={buttonStyle}>
          <Link to="/candidate/list" style={buttonStyle}>
            List Candidate
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;