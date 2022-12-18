import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { SendGameData } from "../App";
import TreandingGamesCard from "../Components/TreandingGamesCard";
import axios from "axios";
import ReactPaginate from "react-paginate";

function Shop() {
  // get All Data
  const data = useContext(SendGameData);
  const myPlatForms = [
    "Pc",
    "Ps4",
    "Android",
    "Ios",
    "VR",
    "Xbox-360",
    "Xbox-one",
    "Xbox-series-xs",
    "Switch",
    "Steam",
    "Ubisoft",
    "Epic-games-store",
    "Gog",
    "Itchio",
    "Battlenet",
    "Origin",
    "Drm-free",
  ];
  // getting category Name
  const [categoryName, setCategoryName] = useState(null);
  // setting data to display
  const [gameData, setGameData] = useState(data);
  useEffect(() => {
    setGameData(data);
  }, [data]);

  // event on display data that match category name
  const getCategoryName = (e) => {
    setCategoryName(e.target.innerHTML);
  };
  // fitching data for category
  useEffect(() => {
    if (categoryName !== "All") {
      const options = {
        method: "GET",
        url: `https://gamerpower.p.rapidapi.com/api/giveaways?platform=${
          categoryName === null ? null : categoryName.toLowerCase()
        }`,
        headers: {
          "X-RapidAPI-Key":
            "877d367944msh58a352224a3aa72p14b78cjsn0973cb30f0c4",
          "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setGameData(response.data.slice(0, 10));
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [categoryName]);

  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 16;
  const pagesVisited = pageNumber * productPerPage;

  const pageCount = Math.ceil(data && data.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="mt-5 pt-5">
      <Container>
        <Row>
          <Col sm={12} lg={3}>
            <Accordion alwaysOpen className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Select platform</Accordion.Header>
                <Accordion.Body className="bg-dark">
                  <h6
                    onClick={getCategoryName}
                    className="text-white cursor-pointer"
                  >
                    All
                  </h6>
                  {myPlatForms.map((item) => (
                    <h6
                      onClick={getCategoryName}
                      key={item}
                      className="text-white cursor-pointer"
                    >
                      {item}
                    </h6>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={12} lg={9}>
            <Row>
              {categoryName === "All"
                ? data &&
                  data.map((item) => (
                    <Col key={item.id} sm={12} md={6} lg={3} className="h-100">
                      <TreandingGamesCard item={item} />
                    </Col>
                  ))
                : gameData &&
                  gameData
                    .slice(pagesVisited, pagesVisited + productPerPage)
                    .map((item) => (
                      <Col
                        key={item.id}
                        sm={12}
                        md={6}
                        lg={3}
                        className="h-100"
                      >
                        <TreandingGamesCard item={item} />
                      </Col>
                    ))}
            </Row>
            <Row>
              <Col>
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  activeClassName={"paginationActive"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shop;
