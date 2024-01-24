import React, { useState, useEffect } from "react";

// Base styles for the component
const searchContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "50vh",
  textAlign: "center",
};

const profileCardStyle = {
  backgroundColor: "#f0f0f0",
  padding: "10px",
  maxWidth: "600px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  marginBottom: "10px",
};

const searchBoxContainerStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
};

const skillsStyle = {
  backgroundColor: "#333",
  color: "white",
  borderRadius: "5px",
  padding: "5px 10px",
  margin: "5px",
};

const searchBoxStyle = {
  flex: "1",
  padding: "10px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  marginRight: "10px",
};

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "10px",
};

const searchButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#525252",
  color: "white",
  border: "none",
};

const listAllButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#525252",
  color: "white",
  border: "none",
};

/**
 * Displays a search box and a list of candidates based on the search criteria.
 */
function CandidateList() {
  const [searchText, setSearchText] = useState("");
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem("candidates");
    const storedSearchText = localStorage.getItem("searchText");
    const storedFilteredCandidates = localStorage.getItem("filteredCandidates");

    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
    } else {
      setCandidates([]);
    }

    if (storedSearchText) {
      setSearchText(storedSearchText);
    }

    if (storedFilteredCandidates) {
      setFilteredCandidates(JSON.parse(storedFilteredCandidates));
    }

    return () => {
      localStorage.removeItem("searchText");
      localStorage.removeItem("filteredCandidates");
      localStorage.removeItem("candidates");
    };
  }, []);

  const handleSearch = () => {
    console.log(`Searching for ${searchText}`);
    const filtered = candidates.filter((candidate) =>
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredCandidates(filtered);
    setSearchText("");
    console.log("Search clicked");
  };

  const handleReset = () => {
    setFilteredCandidates([]);
    setSearchText("");
    console.log("Reset clicked");
  };

  const handleListAll = () => {
    setFilteredCandidates(candidates);
    setSearchText("");
    console.log("List all");
  };
  const CandidateList = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredCandidates, setFilteredCandidates] = useState([]);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search skills"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleListAll}>List All</button>
      </div>
      {filteredCandidates.length === 0 ? (
        <div style={{ textAlign: "left", marginRight: "25rem" }}>
          <p>No candidates found</p>
        </div>
      ) : filteredCandidates.length === candidates.length ? (
        <div style={{ textAlign: "left", marginRight: "25rem" }}>
          <p>No candidates found</p>
        </div>
      ) : (
        filteredCandidates.map((candidate) => (
          <div
            key={candidate.id}
            style={{ textAlign: "left", marginRight: "200rem" }}
          >
            <h2 style={{ marginBottom: "10px" }}>Role: {candidate.role}</h2>
            <p>Name: {candidate.name}</p>
            <p>Email: {candidate.email}</p>
            <div>
              <p style={{ fontWeight: "bold" }}>Skills</p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {candidate.skills.map((skill, index) => (
                  <div key={skill}>{skill}</div>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CandidateList;
