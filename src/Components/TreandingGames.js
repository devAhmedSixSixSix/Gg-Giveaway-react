import React, { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import TreandingGamesCard from "./TreandingGamesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Container from "react-bootstrap/esm/Container";
import { SendGameData } from "../App";
import { Link } from "react-router-dom";

function TreandingGames() {
  const data = useContext(SendGameData);
  return (
    <div className="my-5">
      <Container>
        <Row>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
              <Col>
                <h3>Currently Trending Games</h3>
              </Col>
            </div>
            <div>
              <Col>
                <Button
                  as={Link}
                  to="/shop"
                  variant="warning"
                  className="rounded-5 text-white px-4"
                >
                  SEE ALL
                </Button>
              </Col>
            </div>
          </div>
        </Row>

        <Row>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              220: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is <= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              // when window width is <= 640px
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {data &&
              data.slice(0, 10).map((item) => (
                <SwiperSlide key={item.id}>
                  <Col>
                    <TreandingGamesCard item={item} />
                  </Col>
                </SwiperSlide>
              ))}
          </Swiper>
        </Row>
      </Container>
    </div>
  );
}

export default TreandingGames;
