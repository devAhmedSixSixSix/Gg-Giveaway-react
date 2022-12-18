import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OurTeamCard from "./OurTeamCard";
import teamMemberImgone from "../Asesst/Images/teamMember1.png";
import teamMemberImgTwo from "../Asesst/Images/teamMember2.png";
import teamMemberImgThree from "../Asesst/Images/teamMember3.png";
import teamMemberImgFour from "../Asesst/Images/teamMember4.png";
import Container from "react-bootstrap/Container";

function OurTeam() {
  return (
    <div>
      <Container>
        <Row className="p-0">
          <Col sm={12} md={6} lg={3}>
            <OurTeamCard img={teamMemberImgone} />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <OurTeamCard img={teamMemberImgTwo} />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <OurTeamCard img={teamMemberImgThree} />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <OurTeamCard img={teamMemberImgFour} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurTeam;
