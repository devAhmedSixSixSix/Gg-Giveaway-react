import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

function SomeNewsCard({ newsdata }) {
  return (
    <div>
      <img src={newsdata.main_image} alt="issss" className="w-100" />
      <h6>{newsdata.title}</h6>
      <p>{newsdata.short_description}</p>
      <Link to={`/singlenews/${newsdata && newsdata.id}`}>
        <Button>read More</Button>
      </Link>
    </div>
  );
}

export default SomeNewsCard;
