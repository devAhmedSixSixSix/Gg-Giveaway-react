import React from "react";
import { FiArrowRight } from "react-icons/fi";

function OurProductsCard({ icon, title }) {
  return (
    <div className="pt-5 ">
      <span>{icon}</span>
      <div className="d-flex align-items-center justify-content-center pt-3">
        <h3>{title}</h3>
        <FiArrowRight size={32} />
      </div>
    </div>
  );
}

export default OurProductsCard;
