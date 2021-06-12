import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCourses } from "./action/course_action";
import HeaderComponent from "./Header";
import Footer from "./Footer";
import "./coursepage.css"
const { useEffect } = React;

const axios = require("axios");

function CourseHome() {
  const courses = useSelector((state) => state.course.courses);
  const dispatch = useDispatch();

  const getCourseList = async () => {
    const { data } = await axios.get("http://localhost:8081/api/course");
    console.log(data);
    dispatch(setCourses(data));
  };

  useEffect(() => {
    getCourseList();
  }, []);
  console.log(courses);

  return (
    <div>
      <HeaderComponent />
      <section id="specs" class="specs-section-head">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="heading">
                <strong>
                  Courses offered
                 </strong>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div> {courses.length &&
                  courses.map((cor) => (
                    <section class="specs-section-content">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-lg-auto col-6 spec">
                    <div key={cor.courseId}>
                      <p>
                        <span>{cor.courseName}</span><br/>
                        <span>{cor.description}</span><br/>
                        <span>Eligibility:{cor.eligibility}</span><br />
                      </p>
                    </div>
                    </div>
            </div>
          </div>
        </section>
       ))}      
      </div>
      <Footer />
    </div>
  );
}
export default CourseHome;