import React, { useState, useContext } from "react";
import FairContext from "../contexts/FairContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Fairlist.css";
import FairlistRefresh from "./FairlistRefresh";

const Fairlist = () => {
  let navigate = useNavigate();

  let { searchFairs } = useContext(FairContext);

  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value.toLowerCase();
    setWordEntered(searchWord);
  };

  const submitSearch = (event) => {
    searchFairs(wordEntered);
  };

  return (
    <FairContext.Consumer>
      {({ fair }) => {
        return (
          <div>
            <h1 className="fairlist">List of Fairs</h1>
            <div className="col-12" id="addFairButton">
              <button className="btn btn-primary" onClick={() => {
                navigate(`/addfair`);
              }}>
                Add a Fair
              </button>
            </div>
            <div className="container" id="divSearch">
              <div className="searchInputs">
                <input
                  className="search"
                  placeholder="Enter a Fair..."
                  onChange={handleFilter}
                />
                <button
                  onClick={submitSearch}
                  className="btn btn-md btn-primary"
                  id="magnify"
                >
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </div>

            {/* <SearchBar placeholder="Enter a Book Name..." data={fair} /> */}
            {console.log(fair)}
            <div>
              <Container fluid className="FairlistMargin">
                <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
                  {fair.map((f, index) => {
                    return (
                      <Col fluid id="listCol">
                        <Card
                          key={f.fairId}
                          id="fairlistCard"
                          style={{ width: "18rem" }}
                          onClick={() => {
                            navigate(`/fairdetails/${f.fairId}`);
                          }}
                        >
                          <Card.Body
                            embed-responsive
                            className="embed-responsive-4by3"
                          >
                            <div className="divFairImg">
                              <Card.Img src={f.fairImage} className="img-top" />
                            </div>
                            <Card.Title
                              onClick={() => {
                                navigate(`/fairdetails/${f.fairId}`);
                              }}
                            >
                              <h4 id="fairCardTitle">{f.fairTitle}</h4>
                            </Card.Title>
                            <Card.Text>
                              <div>
                                <h5 id="fairCardLocation">
                                  {f.fairCity},{f.fairState}
                                </h5>
                                <p id="fairCardDates">
                                  {f.fairStartDate}-{f.fairEndDate}
                                </p>
                              </div>
                            </Card.Text>
                            <div className="viewButton">
                              <Link
                                to={`/fairdetails/${f.fairId}`}
                                className="btn btn-md btn-outline-secondary mx-1"
                                id="detailsButton"
                              >
                                Details
                              </Link>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
              <div>
                <FairlistRefresh />
              </div>
            </div>
          </div>

        );
      }}
    </FairContext.Consumer>


  );
};

export default Fairlist;
