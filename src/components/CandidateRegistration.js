import React, { useState, useEffect } from 'react';

// Base styles for the component
const alertMessage = {
  marginTop: '5px'
}

const highlight = {
  border: '2px solid red',
  backgroundColor: 'red'
}


const centerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  textAlign: 'center',
};

const addSkillButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  color: 'white',
  borderRadius: '5px',
  marginLeft: '10px',
  cursor: 'pointer',
};

const formBoxStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  backgroundColor: '#f5f5f5',
};

const formGroupStyle = {
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
};

const sharpEdgeButtonStyle = {
  backgroundColor: '#525252',
  border: '1px solid #333',
  padding: '10px 20px',
  color: 'white',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const skillTagStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '0',
  padding: '5px 10px',
  margin: '0 5px',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

/**
 * Renders a form for registering candidates.
 * @returns {JSX.Element} The CandidateRegistration component.
 */
function CandidateRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skill: '',
    skills: [],
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [candidateCount, setCandidateCount] = useState(0); // New state variable
  const highlightInput = true;

  /**
   * Validates the name field.
   * @param {string} name - The name value to validate.
   * @returns {boolean} True if the name is valid, false otherwise.
   */
  const validateName = (name) => /^[a-zA-Z0-9\s]+$/.test(name);

  /**
   * Validates the role field.
   * @param {string} role - The role value to validate.
   * @returns {boolean} True if the role is valid, false otherwise.
   */
  const validateRole = (role) => /^[a-zA-Z0-9\s]+$/.test(role);

  /**
   * Validates the email field.
   * @param {string} email - The email value to validate.
   * @returns {boolean} True if the email is valid, false otherwise.
   */
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /**
   * Validates the skills field.
   * @param {Array} skills - The skills value to validate.
   * @returns {boolean} True if the skills are valid, false otherwise.
   */
  const validateSkills = (skills) => skills.length > 0;

  /**
   * Handles the skill input change event.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleSkillChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      skill: e.target.value,
    }));
  };

  /**
   * Handles adding a skill to the skills list.
   */
  const handleAddSkill = () => {
    setFormData((prevFormData) => {
      const { skill, skills } = prevFormData;
      if (skill.trim() !== '') {
        return {
          ...prevFormData,
          skill: '',
          skills: [...skills, skill],
        };
      }
      return prevFormData;
    });
  };

  /**
   * Handles the form submission event.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission action here
    setCandidateCount(candidateCount + 1);
    
    // Check if the email already exists
  const emailExists = candidates.some(
    (candidate) => candidate.email === formData.email
  );


  if (emailExists) {
    setRegistrationStatus('Email Already Exist');
    return;
  }

    // Create a new candidate object
    const newCandidate = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
      skills: formData.skills,
    };

    // Add the new candidate to the list
    setCandidates([...candidates, newCandidate]);
    
    // Validate form data
    if (
      !validateName(formData.name) ||
      !validateEmail(formData.email) ||
      !validateRole(formData.role) ||
      !validateSkills(formData.skills)
    ) {
      setRegistrationStatus('error');
      return;
    }

    // Reset the form
    setFormData({
      name: '',
      email: '',
      role: '',
      skill: '',
      skills: [],
    });

    setRegistrationStatus('success');
  };

  useEffect(() => {
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
    } else {
      setCandidates([]);
    }

    return () => {
      localStorage.removeItem('candidates');
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('candidates', JSON.stringify(candidates));

    return () => {
      localStorage.removeItem('candidates');
    };
  }, [candidates]);

  return (
    <div style={centerContainerStyle}>
      <h1>Candidate List Count: {candidateCount}</h1>
      <div style={formBoxStyle}>
        <div data-testid="registration-component" style={formBoxStyle}>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                style={inputStyle}
                data-testid="form-input-name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                data-testid="form-input-email"
                required
                style={{
                  ...inputStyle,
                  ...(highlightInput ? highlight : {}),
                }}
                value={formData.email}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                type="text"
                name="role"
                placeholder="Role"
                required
                style={inputStyle}
                value={formData.role}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    role: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input
                data-testid="form-input-skill"
                type="text"
                name="skill"
                placeholder="Skill"
                style={inputStyle}
                value={formData.skill}
                onChange={handleSkillChange}
              />
              <button
                type="button"
                data-testid="add-btn"
                style={addSkillButtonStyle}
                onClick={handleAddSkill}
              >
                Add Skill
              </button>
            </div>
            <div>
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  data-testid="skill-tag"
                  style={skillTagStyle}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div style={buttonGroupStyle}>
              <button
                data-testid="submit-btn"
                type="submit"
                style={sharpEdgeButtonStyle}
              >
                Register
              </button>
              <button
                data-testid="reset-btn"
                style={sharpEdgeButtonStyle}
                onClick={() =>
                  setFormData({
                    name: '',
                    email: '',
                    role: '',
                    skill: '',
                    skills: [],
                  })
                }
              >
                Reset
              </button>
            </div>
            {registrationStatus === 'Email Already Exists' && (
              <p>
                <b>Email already exists!</b>
              </p>
            )}

            {registrationStatus === 'success' && (
      <p> <b> Candidate profile created!</b> </p>
    )}

          </form>
        </div>
      </div>
    </div>
  );
}

export default CandidateRegistration;

