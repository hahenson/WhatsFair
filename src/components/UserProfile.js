import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import "./UserProfile.css";
import {
    Button,
    ListGroup,
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const UserProfile = () => {

    const [user, setUser] = useState({
        username: "",
        userEmail: "",
        userCity: "",
        userState: "",
        userReferral: "",
        userImage: "",
        userId: "",
        Fairs: []
    });

    const params = useParams();
    const { getCurrentUser } = useContext(UserContext)

    useEffect(() => {
        async function fetch() {
            await getCurrentUser()
                .then((user) => setUser(user))
                .catch((error) => {
                    console.log(error);
                    window.alert("user not logged in");

                });
        }
        fetch()
    }, [params.userId]);

    console.log(user);

    return (
        <>
            <Container>
                <Row>
                    <Col sm={10} md={4} lg={4}>
                        <Card id="userCard" border="light" key={user.userId}>
                            <Card.Img variant="top" src={user.userImage} />
                            <CardHeader id="userCardHeader" as="h6">Hello, {user.username}!</CardHeader>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{user.userCity}, {user.userState}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={10} md={8} lg={8}>
                        {user.Fairs.map((fair, index) => {
                            return (
                                <Card id="userFairCard" border="warning" key={fair.fairId}>
                                    <Card.Header id="fairCardHeader" as="h5">{fair.fairTitle}</Card.Header>
                                    <Card.Body>
                                        <Container >
                                            <Row>
                                                <Card.Img id="userFairImg" src={fair.fairImage} />
                                                <ListGroup id="fairText" className="list-group-flush">
                                                    <ListGroup.Item as="h6">{fair.fairCity}, {fair.fairState}</ListGroup.Item>
                                                    <Card.Text>{fair.fairStartDate} - {fair.fairEndDate}</Card.Text>
                                                    <Card.Text>{fair.fairDescription}</Card.Text>
                                                </ListGroup>
                                            </Row>
                                        </Container>
                                        <Button id="userFairCardBtn" variant="warning" href={`/fairdetails/${fair.fairId}`}>Details</Button>
                                        <Button id="userFairCardBtn" variant="warning" href={`/updatefair/${fair.fairId}`}>Edit Fair</Button>
                                        <Button id="userFairCardBtn" variant="warning" href={fair.fairWebsite} rel="noreferrer" target="_blank">Event Site</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default UserProfile;