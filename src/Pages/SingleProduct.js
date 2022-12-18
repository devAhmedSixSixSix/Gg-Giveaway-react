import axios from "axios";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useParams } from "react-router-dom";
import TreandingGames from "../Components/TreandingGames";

function SingleProduct() {
  const id = useParams();
  const [productData, setProductData] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://gamerpower.p.rapidapi.com/api/giveaway?id=${id.id}`,
      headers: {
        "X-RapidAPI-Key": "877d367944msh58a352224a3aa72p14b78cjsn0973cb30f0c4",
        "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setProductData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="mt-5 pt-5">
      <Container>
        <Row>
          <Col sm={12} lg={5}>
            <img
              src={productData && productData.thumbnail}
              alt={productData && productData.title}
              className="w-100 h-100 rounded-1"
              loading="lazy"
            />
          </Col>
          <Col sm={12} lg={7}>
            <h3 className="mb-4">Name: {productData && productData.title}</h3>
            <p>Description: {productData && productData.description}</p>
            <p>Avilibal for: {productData && productData.platforms}</p>
            <p>
              Price:{" "}
              {productData && productData.worth === "N/A"
                ? "For free"
                : productData && productData.worth}
            </p>
            <a
              target="blank"
              className="rounded-5 text-white btn btn-warning"
              href={productData && productData.gamerpower_url}
            >
              Get it for free now!
            </a>
          </Col>
        </Row>
        <Row>
          <TreandingGames />
        </Row>
      </Container>
    </div>
  );
}

export default SingleProduct;
