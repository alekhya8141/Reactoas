import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setBranches } from "./action/branch_action";
import HeaderComponent from "./Header";
import Footer from "./Footer";
import "./coursepage.css"
const { useEffect } = React;

const axios = require("axios");

function BranchHome() {
  const branches = useSelector((state) => state.branch.branches);
  const dispatch = useDispatch();

  const getBranchList = async () => {
    const { data } = await axios.get("http://localhost:8081/api/branch");
    console.log(data);
    dispatch(setBranches(data));
  };

  useEffect(() => {
    getBranchList();
  }, []);
  console.log(branches);

  return (
    <div>
      <HeaderComponent />
      <section id="specs" class="specs-section-head">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="heading">
                <strong>
                  Branch offered
                </strong>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div> {branches.length &&
        branches.map((br) => (
          <section class="specs-section-content">
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-lg-auto col-6 spec">
                  <div key={br.branchId}>
                    <p>
                      <span>{br.branchName}</span><br />
                      <span>{br.branchDescription}</span><br />
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
export default BranchHome;