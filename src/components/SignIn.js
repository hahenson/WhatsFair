import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import "./SignIn.css";


const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let { signInUser } = useContext(UserContext);
  let navigate = useNavigate();
  
  const refresh = () => window.location.reload(true);

  function handleSubmit(event) {
    event.preventDefault();
    signInUser(username, password)
      .then(() => {
        navigate("/profile");
        refresh();
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed login");
      });
  }

  return (
    <>
      <Container>
        <Row>
          <Col id="signInCol" md={{ span: 6, offset: 4 }}>
            <Card border="light" id="signInCard" variant="light" style={{ width: "18rem" }}>
              <Card.Header id="signInCardHeader" as="h5">Welcome Back</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      id="signInInput"
                      placeholder="Enter username"
                      type="username"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      id="signInInput"
                      placeholder="Enter password"
                      type="password"
                      name="text"
                      onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
                  <Form.Group id="signInBtn">
                    <Button type="submit">Login</Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default SignIn;