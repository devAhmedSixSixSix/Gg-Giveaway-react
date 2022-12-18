import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactInfoCard from "./ContactInfoCard";
import { TbPhoneCall } from "react-icons/tb";
import { MdMyLocation } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import Container from "react-bootstrap/esm/Container";

function ContactInfo() {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col sm={12} lg={4}>
            <ContactInfoCard
              icon={<BiSupport size={32} />}
              text="24/7 Support"
            />
          </Col>

          <Col sm={12} lg={4}>
            <ContactInfoCard
              icon={<MdMyLocation size={32} />}
              text="but also the leap into electronic typesetting"
            />
          </Col>

          <Col sm={12} lg={4}>
            <ContactInfoCard
              icon={<TbPhoneCall size={32} />}
              text="+94 4444 5555 6"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactInfo;
