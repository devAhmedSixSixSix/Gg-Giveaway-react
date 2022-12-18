import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsArrowRightShort } from "react-icons/bs";
import aboutUsHeroBanner from "../Asesst/Images/aboutUsHeroBanner.png";
import Container from "react-bootstrap/esm/Container";

function AboutHeroBanner() {
  const fontheight = {
    lineHeight: "1.7",
  };
  const roundedCornerImage = {
    borderRadius: "100px 0 0 0",
  };
  return (
    <div>
      <Container fluid>
        <Row className="d-flex align-items-center">
          <Col className="mt-5 pt-5 ms-lg-5">
            <h2 style={fontheight}>
              Lorem Ipsum is simply
              <br /> dummy text of the printing
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the <br />
              industry's standard dummy text ever since the 1500s.
            </p>
            <Button variant="warning" className="rounded-5 text-white">
              Get in touch <BsArrowRightShort size={32} />
            </Button>
          </Col>
          <Col className="p-0 d-none d-lg-block">
            <img
              src={aboutUsHeroBanner}
              style={roundedCornerImage}
              alt="about Hero Banner"
              className="w-100"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutHeroBanner;
