import React from "react";
import bgImg from "../Asesst/Images/Rectangle5.png";
import OurProductsCard from "./OurProductsCard";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { FaPlaystation } from "react-icons/fa";
import { RiXboxLine } from "react-icons/ri";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

function OurProducts() {
  const bg = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
  };
  return (
    <div style={bg} className="text-center my-5 py-5">
      <Container>
        <h2 className="pt-5 pb-3">
          Lorem Ipsum is simply dummy text of the printing
          <br /> and typesetting industry.
        </h2>
        <p className="pb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
          <br />
          industry's standard dummy text ever since the 1500s,
        </p>
        <Row className="d-flex justify-content-evenly pb-5">
          <Col sm={12} md={6} lg={3}>
            <OurProductsCard
              icon={<CiMobile1 size={64} />}
              title="Mobile Games "
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <OurProductsCard
              icon={<MdOutlinePersonalVideo size={64} />}
              title="PC Games"
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <OurProductsCard
              icon={<FaPlaystation size={64} />}
              title="Playstion Games "
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <OurProductsCard
              icon={<RiXboxLine size={64} />}
              title="Xbox Game "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurProducts;
