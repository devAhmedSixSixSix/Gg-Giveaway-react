import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WorkWithUsCard from "./WorkWithUsCard";
import Container from "react-bootstrap/esm/Container";

function WorkWithus() {
  return (
    <div className="my-5">
      <Container>
        <h3 className="mb-5">Why work with us</h3>
        <Row>
          <Col sm={12} lg={4}>
            <WorkWithUsCard />
          </Col>
          <Col>
            <WorkWithUsCard />
          </Col>
          <Col>
            <WorkWithUsCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WorkWithus;
