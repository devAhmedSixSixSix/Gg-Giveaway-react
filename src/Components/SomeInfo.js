import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../Asesst/Images/someInfo.png";
import Container from "react-bootstrap/esm/Container";

function SomeInfo() {
  return (
    <div className="bg-dark my-5">
      <Container>
        <Row className="d-flex align-items-center">
          <Col sm={12} md={6}>
            <img
              src={img}
              alt="info"
              className="ms-0 mt-0 ms-lg-5 mt-lg-5 w-75"
              loading="lazy"
            />
          </Col>
          <Col sm={12} md={6}>
            <p>Lorem Ipsum</p>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SomeInfo;
