import React, { Component } from 'react';
import HeaderComponent from "./Header";
import Footer from "./Footer";
import "./homecss.css"

class Home extends Component {

  state = {};
  render() {
    return (
      <div>
        <HeaderComponent />
        <div>
          <img id="firstimg" src="Images\College5.jpg" className="img" width="100%" height="500px" alt="college" />
          <div class="centered"> <div class="divmargin">
          <br />
            <h6 id="line">As we practice distancing for the greater good, we also want to stay connected, stay together and be available to our prospective students. We might be a bit far in distance, but we’re still here to connect. </h6>
        <br />
        <h6 id="line">This hub of digital experiences and engagement opportunities allows you to feel as if you were here—sign up for an admissions visit program, explore our videos, share your story with us on social and learn more about our student resources. </h6>
        <br />
          <p class="hero"><strong>Connect with us virtually, from anywhere in the world. ​</strong></p>
          </div>
          </div>
        </div>
        <br />
        <br />
        <div class="container">
          <div>
            <h2>Popular Links </h2>
            <div class="row">
              <div class="col-lg-4">
                <img class="img" src="Images\popularimg1.jpg" alt="" width="330" height="160" />
                <h3 class="largeTitle">Hardvard University</h3>
                <p>Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636 and named for its first benefactor, clergyman John Harvard, Harvard is the oldest institution of higher learning in the United States and among the most prestigious in the world.</p>
                <p><a class="btn btn-dark" href="https://www.harvard.edu/" role="button">View details</a></p>
              </div>
              <div class="col-lg-4">
                <img class="img" src="Images\popularimg2.jpg" alt="" width="330" height="160" />
                <h3 class="largeTitle">The University of Manchester</h3>
                <p>The University of Manchester is a public research university in Manchester, England, formed in 2004 by the merger of the University of Manchester Institute of Science and Technology and the Victoria University of Manchester.</p>
                <p><a class="btn btn-dark" href="https://www.manchester.ac.uk/" role="button">View details</a></p>
              </div>
              <div class="col-lg-4">
                <img class="img" src="Images\popularimg3.jpg" alt="" width="330" height="160" />
                <h3 class="largeTitle">University of Colorado Boulder</h3>
                <p>The University of Colorado Boulder is a public research university in Boulder, Colorado. It is the flagship university of the University of Colorado system, and was founded in 1876, five months before Colorado became a state.</p>
                <p><a class="btn btn-dark" href="https://www.colorado.edu/" role="button">View details</a></p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div>
            <h2>News</h2>
            <div class="row">
              <div class="col-lg-4">
                <img class="img" src="Images\News1.jpg" alt="" width="350" height="160" />
                <p><a class="btn btn-light" href="https://www.manchester.ac.uk/discover/news/university-bags-global-citizenship-award-for-healthcare-initiative/" role="button">University bags global citizenship award for healthcare initiative</a></p>
              </div>
              <div class="col-lg-4">
                <img class="img" src="Images\News2.jpg" alt="" width="350" height="160" />
                <p><a class="btn btn-light" href="https://www.manchester.ac.uk/discover/news/manchester-scientists-accelerate-path-for-covid-19-drug-development/" role="button">scientists accelerate path to drugs for COVID-19</a></p>
              </div>
              <div class="col-lg-4">
                <img class="img" src="Images\News3.jpg" alt="" width="350" height="160" />
                <p><a class="btn btn-light" href="https://www.colorado.edu/2021/06/07/undergraduate-research-opportunities-program-celebrates-student-publications" role="button">Undergraduate Research opportunities Program celebrates student publications.</a></p>
              </div>
            </div>
            <br/>
          <br/>
            <div>
            <h2>Explore</h2>
            <div class="row">
              <div class="col-lg-4">
                <img class="img" src="Images\exp1.jpg" alt="" width="330" height="160" />
                <h5 class="largeTitle">Academic Support</h5>
              </div>
              <div class="col-lg-4">
                <img class="img" src="Images\exp2.jpg" alt="" width="330" height="160" />
                <h5 class="largeTitle">Community and Groups</h5>
              </div>
              <div class="col-lg-4">
                <img class="img" src="Images\exp4.jpg" alt="" width="330" height="160" />
                <h5 class="largeTitle">Technology Services</h5>
              </div>
              <br/>
              <br/>
              <div class="col-lg-4">
                <img class="img" src="Images\exp5.jpg" alt="" width="330" height="160" />
                <h5 class="largeTitle">Life at University</h5>
              </div>
              <div class="col-lg-4">
                <img class="img" src="Images\exp3.jpg" alt="" width="330" height="160" />
                <h5 class="largeTitle">Health and Wellness</h5>
              </div>
              <div class="col-lg-4">
                <img class="img" src="Images\exp6.jpg" alt="" width="330" height="160" />
                <h5 class="largeTitle">Jobs and Internships</h5>
              </div>
            </div>
          </div>
          </div>
        </div>
        <br/>
              <br/>
        <Footer />
      </div>
    );
  }
}
export default Home;