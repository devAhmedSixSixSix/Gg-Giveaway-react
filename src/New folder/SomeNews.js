import React, { useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SomeNewsCard from "./SomeNewsCard";

import { SendNewsData } from "../App";

function SomeNews() {
  const newsdata = useContext(SendNewsData);

  return (
    <div className="my-5">
      <Container>
        <h2>Treanding News</h2>
        <Row>
          <Col>
            <SomeNewsCard newsdata={newsdata[7]} />
          </Col>
        </Row>
        <Row>
          {newsdata.slice(0, 4).map((item) => (
            <Col>
              <SomeNewsCard newsdata={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SomeNews;
