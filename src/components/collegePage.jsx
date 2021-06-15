import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setColleges } from "./action/college_action";
import HeaderComponent from "./Header";
import Footer from "./Footer";
import "./homeform.css"
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
    <div class="homeform">
      <HeaderComponent />
      <section id="specs" class="specs-section-head">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="heading">
                <strong>
                  College 
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
                <Card style={{ marginBottom: '.5rem' }}>
                  <Card.Body>
                    <Card.Title>{clg.collegeName}</Card.Title>
                    <span><em>{clg.collegeName}</em> is one of the top ranking college, offering undergraduate, postgraduate and doctoral programs in Engineering,&nbsp;...</span>&nbsp;
                    
                    <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        View details
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="http://localhost:3000/coursehome">Course</a>
                        <a class="dropdown-item" href="http://localhost:3000/branchpage">Branch</a>
                        <a class="dropdown-item" href="http://localhost:3000/programpage">Program</a>
                      </div>&nbsp;                   
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