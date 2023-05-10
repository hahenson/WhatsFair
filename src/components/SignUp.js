import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./SignUp.css";


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userState, setUserState] = useState("");
  const [userZip, setUserZip] = useState("");
  const [userReferral, setUserReferral] = useState("");
  const [userImage, setUserImage] = useState("");


  let { createUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    createUser(username, password, userEmail, userCity,
      userState, userZip, userReferral, userImage).then(() => {
        navigate('/signin');
      }).catch(error => {
        console.log(error);
        window.alert('Failed registration: error creating user');
      });
  }

  return (
    <>
      <Container>
        <Row>
          <Col id="signUpCol" md={{ span: 6, offset: 3 }}>
            <Card border="light" id="signUpCard" variant="light" style={{ width: "30rem" }}>
              <Card.Header id="signUpCardHeader" as="h5">Sign Up</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>

                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      id="signUpInput"
                      placeholder="Enter Username"
                      type="text"
                      name="username"
                      value={username}
                      onChange={e => setUsername(e.target.value)} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      id="signUpInput"
                      placeholder="Enter Password"
                      type="text"
                      name="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      id="signUpInput"
                      placeholder="Enter Email Address"
                      type="text"
                      name="userEmail"
                      value={userEmail}
                      onChange={e => setUserEmail(e.target.value)} />
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          id="signUpInput"
                          placeholder="City"
                          type="text"
                          name="userCity"
                          value={userCity}
                          onChange={e => setUserCity(e.target.value)} />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          id="signUpInput"
                          placeholder="State"
                          type="text"
                          name="userState"
                          value={userState}
                          onChange={e => setUserState(e.target.value)} />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group>
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                          id="signUpInput"
                          placeholder="Zip Code"
                          type="text"
                          name="userZip"
                          value={userZip}
                          onChange={e => setUserZip(e.target.value)} />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group>
                    <Form.Label>Add a Profile Picture</Form.Label>
                    <Form.Control
                      id="signUpInput"
                      placeholder="Add an Image URL"
                      type="text"
                      name="userImage"
                      value={userImage}
                      onChange={e => setUserImage(e.target.value)} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>How did you hear about us?</Form.Label>
                    <Form.Control
                      id="signUpInput"
                      placeholder="Enter Referral"
                      type="text"
                      name="userReferral"
                      value={userReferral}
                      onChange={e => setUserReferral(e.target.value)} />

                    <Form.Select>
                      <option>Select one</option>
                      <option value="friend">Friend/Family</option>
                      <option value="web">Web Search</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group id="signInBtn">
                    <Button type="submit">Sign Up</Button>
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

export default SignUp