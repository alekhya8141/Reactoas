import { Link} from "react-router-dom";
import React from "react";
import "./Adminhome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../service/UserService";

class AdminHome extends React.Component {
  constructor(props){
    super(props)

    this.state={
        users:[],
        userid:localStorage.getItem('userid')
    }
    this.logout=this.logout.bind(this);
  }
  logout(){
    console.log('logout=>'+this.state.userid)
    UserService.logout(this.state.userid).then(res=>{this.props.history.push(`/`)})
  }
  render() {
    return (
      <div>
        <div class="sidebar-container sid">
            <h4 className="text-center">OnlineAdmissionSystem</h4><br></br>
            <h5 className="text-center"><b>MODULES</b></h5>
          <ul class="sidebar-navigation">
            <li>
              <Link to="/users">
                   User
              </Link>
            </li>
            <li>
              <Link to="/applications">
                   Application
              </Link>
            </li>
            <li>
              <Link to="/payments">
                   Payment
              </Link>
            </li>
            <li>
              <Link to="/university">
                   University
              </Link>
            </li>
            <li>
              <Link to="/college">
                   College
              </Link>
            </li>
            <li>
              <Link to="/course">
                   Course
              </Link>
            </li>
            <li>
              <Link to="/branch">
                   Branch
              </Link>
            </li>
            <li>
              <Link to="/programs">
                   Program
              </Link>
            </li>
            <li>
              </Link>
            </li>
            <li>
              <Link to="/admission">
                   Admission
              </Link>
            </li>
            <li>
              <Link to="/document">
                   Document
              </Link>
            </li>
            <li>
              <Link to="/address">
                   Address
              </Link>
            </li>
          </ul>
        </div>

        <div class="content-container">
          <div class="container-fluid">
            <div class="jumbotron jj">
              <h1>ADMIN PANNEL</h1>
              <p>
              Administrator can add/ modify and approve / reject the students’ applications, view applications, view course, view the details of courses taken by students and search by course
              </p>
              <p>
              Admin can see all the detail in brief.Admin can search application on the basis of user name, email id, and contact number
              </p>
              <p>
                <Link class="btn btn-lg btn-info" role="button" onClick={this.logout}>LOGOUT &raquo;</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHome;
