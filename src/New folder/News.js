import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewsCard from "../Components/NewsCard";
import NewsLitter from "../Components/NewsLitter";

function News() {
  return (
    <div>
      <div className="text-center py-5">
        <h2 className="pb-3">
          Lorem Ipsum is simply dummy text of the printing and.
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <Row>
        <Col lg={9}>
          <NewsCard />
        </Col>
        <Col lg={3}>
          <NewsCard />
        </Col>
      </Row>
      <NewsLitter />
    </div>
  );
}

export default News;
