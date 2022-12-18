import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import banner from "../Asesst/Images/hugeGlobal.png";

function ContactBanner() {
  return (
    <div className="d-flex justify-content-center">
      <Row className="w-100">
        <Col>
          <img src={banner} alt="Banner" className="w-100" loading="lazy" />
        </Col>
      </Row>
    </div>
  );
}

export default ContactBanner;
