import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

function NewsLitter() {
  return (
    <div>
      <Container>
        <Row className="py-5 my-5">
          <Col>
            <h2>Lorem Ipsum</h2>
            <p className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Col>
        </Row>

        <Row className="d-flex align-items-center bg-dark rounded-4 p-3 my-5">
          <Col sm={12} lg={6}>
            <h4>Stay in the Game</h4>
            <p>
              Subscribe to receive the latest news and updates about TDA.
              <br />
              We promise not to spam you!
            </p>
          </Col>
          <Col sm={12} lg={6}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button
                variant="warning"
                className="w-100 text-white d-block m-auto rounded-5"
                type="submit"
              >
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsLitter;
