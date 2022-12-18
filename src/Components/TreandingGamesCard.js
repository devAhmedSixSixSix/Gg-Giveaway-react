import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
function TreandingGamesCard({ item }) {
  return (
    <div className="">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-100 rounded-3 mb-2"
        loading="lazy"
      />
      <p>{item.platforms}</p>
      <h6>
        {item.title.length > 22 ? item.title.slice(0, 22) + "..." : item.title}
      </h6>
      <p>{item && item.worth === "N/A" ? "For free" : item.worth}</p>
      <Link to={`/singleproduct/${item.id}`}>
        <Button variant="warning" className="w-100 mb-5 text-white rounded-5">
          View Game
        </Button>
      </Link>
    </div>
  );
}

export default TreandingGamesCard;
