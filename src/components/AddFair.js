import React, { useContext, useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import "../components/AddFair.css";
import FairContext from "../contexts/FairContext";

function AddFair() {
  let navigate = useNavigate();
  let params = useParams();
  let { createFair, getFair } = useContext(FairContext);

  let [fair, setFair] = useState({
    id: params.fairId,
    fairTitle: "",
    fairCity: "",
    fairState: "",
    fairZip: "",
    fairStartDate: "",
    fairEndDate: "",
    fairDescription: "",
    fairWebsite: "",
    fairImage: "",
  });

  // useEffect(() => {
  //     if (fairId === undefined) return
  //     async function fetch() {
  //         await getFair(id)
  //         .then((fair) => setFair(fair))
  //     }
  //     fetch()
  // }, [fairId])

  function handleChange(e) {
    setFair((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  }

  function add() {
    if (
      fair.fairTitle !== "" &&
      fair.fairCity !== "" &&
      fair.fairState !== "" &&
      fair.fairZip !== "" &&
      fair.fairStartDate !== "" &&
      fair.fairEndDate !== "" &&
      fair.fairWebsite !== "" &&
      fair.fairImage !== ""
    ) {
      return createFair(fair);
    } else {
      alert("You need to fill all fields except description");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    add(fair)
      .then(() => {
        <alert>Thanks! You have Added this event listing!</alert>
        navigate("/fairlist");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          console.log(error);
          alert('You need to sign in');
          navigate("/signin");
        }  else if (error.response.status === 403) {
          console.log(error);
          alert('You don\'t have rights for this action');
          // navigate("/signin");
        } else {
        console.log(error);
        alert('Error: ' + error)
        }
      });
  }

  return (
    <div className="wrap-container">
      <div className="form-container">
        <h1>Add Event</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Event Name Here"
              type="text"
              value={fair.fairTitle}
              name="fairTitle"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Decription</Form.Label>
            <Form.Control
              placeholder="Enter Description Here"
              type="text"
              value={fair.fairDescription}
              name="fairDescription"
              onChange={handleChange}
            />
          </Form.Group>

          <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder="Enter City Here"
              type="text"
              value={fair.fairCity}
              name="fairCity"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            {/* <Form.Control
              placeholder="Enter State Here"
              type="text"
              value={fair.fairState}
              name="fairState"
              onChange={handleChange}
            /> */}
            <Form.Select  defaultValue="Choose..."
              value={fair.fairState}
              name="fairState"
              onChange={handleChange}>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
          </Form.Select>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              placeholder="Enter Zip Here"
              type="text"
              value={fair.fairZip}
              name="fairZip"
              onChange={handleChange}
            />
          </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              placeholder="Enter Date Here"
              type="text"
              value={fair.fairStartDate}
              name="fairStartDate"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              placeholder="Enter Date Here"
              type="text"
              value={fair.fairEndDate}
              name="fairEndDate"
              onChange={handleChange}
            />
          </Form.Group>

          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Fair Website</Form.Label>
            <Form.Control
              placeholder="Enter Fair URL here"
              type="text"
              value={fair.fairWebsite}
              name="fairWebsite"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              placeholder="Enter Image URL Here"
              type="text"
              value={fair.fairImage}
              name="fairImage"
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            className="btn"
            variant="warning"
            type="button"
            onClick={handleSubmit}
          >
            Add Fair Here
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddFair;
