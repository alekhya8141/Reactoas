import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setColleges } from "./action/college_action";
import HeaderComponent from "./Header";
import Footer from "./Footer";
const { useEffect } = React;

const axios = require("axios");

function CollegePage() {
  const colleges = useSelector((state) => state.college.colleges);
  const dispatch = useDispatch();

  const getClgList = async () => {
    const { data } = await axios.get("http://localhost:8081/college");
    console.log(data);
    dispatch(setColleges(data));
  };

  useEffect(() => {
    getClgList();
  }, []);
  console.log(colleges);

  return (
    <div>
      <HeaderComponent />
      <section id="specs" class="specs-section-head">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="heading">
                <strong>
                  College List
                </strong>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Container style={{ marginTop: "51px", marginBottom: "51px" }}>
        <Row xs={1} md={3} className="g-4">
          {colleges.length &&
            colleges.map((clg) => (
              <Col key={clg.collegeRegId}>
                <Card>
                  <Card.Body>
                    <Card.Title>{clg.collegeName}</Card.Title>
                    <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        View details
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="http://localhost:3000/coursehome">Courses</a>
                        <a class="dropdown-item" href="#">Branchs</a>
                        <a class="dropdown-item" href="#">Programs</a>
                      </div>&nbsp;
                      <button class="btn btn-danger" type="button">                           
                        Apply
                      </button>                    
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default CollegePage;