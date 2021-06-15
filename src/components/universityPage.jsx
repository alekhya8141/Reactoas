import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUniversities } from "./action/university_action";
import HeaderComponent from "./Header";
import Footer from "./Footer";
import "./homeform.css"
const { useEffect } = React;

const axios = require("axios");

function UniversityPage() {
  const universities = useSelector((state) => state.university.universities);
  const dispatch = useDispatch();

  const getUniversityList = async () => {
    const { data } = await axios.get("http://localhost:8081/university");
    console.log(data);
    dispatch(setUniversities(data));
  };

  useEffect(() => {
    getUniversityList();
  }, []);
  console.log(universities);

  return (
    <div class="homeform">
      <HeaderComponent />
      <section id="specs" class="specs-section-head">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="heading">
                <strong>
                  University
                </strong>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Container style={{ marginTop: "51px", marginBottom: "51px" }}>
        <Row xs={1} md={3} className="g-4">
          {universities.length &&
            universities.map((uni) => (
              <Col key={uni.universityId}>
                <Card style={{ marginBottom: '.5rem' }}>
                  <Card.Body>
                    <Card.Title>{uni.name}</Card.Title>
                    <span><em>{uni.name}</em> is one of the top ranking universities in India, offering a wide range of undergraduate, postgraduate and doctoral programs in Engineering,&nbsp;...</span>
                    <a  href="http://localhost:3000/collegepage"><button className="btn btn-outline-primary">view</button></a>
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
export default UniversityPage;