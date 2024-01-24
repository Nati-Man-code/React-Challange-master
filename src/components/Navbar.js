import React from "react";
import { Link, useLocation } from "react-router-dom";

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  backgroundColor: "#525252",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "10px",
};

const centerHeadingStyle = {
  marginLeft: "625px",
  flex: "1",
};

function Navbar({ candidateCount }) {
  const location = useLocation();
  const [currentPage, setCurrentPage] = React.useState(location.pathname);

  React.useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  return (
    <div style={navbarStyle}>
      <div style={centerHeadingStyle}>
        <h1 className="header-title" data-testid="header-title">
          Job Portal
        </h1>
      </div>
      <div>
        {location.pathname !== "/" && (
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        )}
        {location.pathname !== "/candidate/registration" && (
          <Link to="/candidate/registration" style={linkStyle}>
            Candidate Registration
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;