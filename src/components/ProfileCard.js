import React from "react";

const ProfileCard = ({ candidate }) => (
  <div className="profile-card">
    <h2>{candidate.name}</h2>
    <p>Role: {candidate.role}</p>
    <p>Skills: {candidate.skills.join(", ")}</p>
  </div>
);

const ProfileList = ({ candidates }) => (
  <div className="profile-list">
    {candidates.map((candidate) => (
      <ProfileCard key={candidate.id} candidate={candidate} />
    ))}
  </div>
);

const ProfileListContainer = ({ candidates }) => (
  <div className="profile-list-container">
    <ProfileList candidates={candidates} />
  </div>
);

const ProfileCardContainer = ({ candidates }) => (
  <div className="profile-card-container">
    <ProfileListContainer candidates={candidates} />
  </div>
);

const ProfileCardContainerContainer = ({ candidates }) => (
  <div className="profile-card-container-container">
    <ProfileCardContainer candidates={candidates} />
  </div>
);

export default ProfileCard;
