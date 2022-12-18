import React from "react";

function OurTeamCard({ img }) {
  return (
    <div className="bg-dark rounded-3 text-center p-5 m-3">
      <img
        src={img}
        alt="Team Member"
        width={100}
        height={100}
        loading="lazy"
      />
      <h6>John peter</h6>
      <p>CEO</p>
    </div>
  );
}

export default OurTeamCard;
