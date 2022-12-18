import React from "react";
import Button from "react-bootstrap/Button";
import Img from "../Asesst/Images/Rectangle 4.png";

function NewsCard() {
  return (
    <div>
      <img src={Img} alt="issss" className="w-100" />
      <h4 className="py-2 m-0">Lorem Ipsum is simply dummy text dummy text </h4>
      <p>Posted 5 min ago</p>
      <Button variant="warning" className="text-white">
        Read more
      </Button>
    </div>
  );
}

export default NewsCard;
