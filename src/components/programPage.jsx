import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPrograms } from "./action/program_action";
import HeaderComponent from "./Header";
import Footer from "./Footer";
import "./coursepage.css"
const { useEffect } = React;

const axios = require("axios");

function ProgramHome() {
  const programs = useSelector((state) => state.program.programs);
  const dispatch = useDispatch();

  const getPgmList = async () => {
    const { data } = await axios.get("http://localhost:8081/program");
    console.log(data);
    dispatch(setPrograms(data));
  };

  useEffect(() => {
    getPgmList();
  }, []);
  console.log(programs);

  return (
    <div>
      <HeaderComponent />
      <section id="specs" class="specs-section-head">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="heading">
                <strong>
                  Programs offered
                </strong>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div> {programs.length &&
        programs.map((pgm) => (
          <section class="specs-section-content">
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-lg-auto col-6 spec">
                  <div key={pgm.programId}>
                    <p>
                      <span>{pgm.programName}</span><br />
                      <span>{pgm.programDuration}</span><br />
                      <span>{pgm.degreeOffered}</span><br />
                      <span>{pgm.programDescription}</span><br />
                      <span>Eligibility:{pgm.programEligibility}</span><br />
                      <span>{pgm.programStatus}</span><br />
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
export default ProgramHome;