import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import joiStick from "../Asesst/Images/joy_stick 1.png";

function HeroBanner() {
  const lineHeight = {
    lineHeight: "1.7",
  };

  return (
    <div>
      <Container>
        <Row className="d-flex align-items-center">
          <Col className="mt-5 pt-5">
            <h5 className="text-danger">Proved By prodesigner</h5>
            <h2 style={lineHeight} className="fw-bolder">
              Work that we
              <br />
              produce for our
              <br />
              clients
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry. Lorem Ipsum has been the industry's <br />
              standard.
            </p>
            <Button variant="warning" className="text-white rounded-5">
              Get more details
            </Button>
          </Col>
          <Col className="w-100 d-none d-lg-block">
            <img
              src={joiStick}
              alt="Joy Stick"
              className="w-100"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroBanner;
