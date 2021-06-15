import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
} from "react-bootstrap-icons";
import "./headerCss.css";
import UserService from "../service/UserService";
class HeaderLogout extends React.Component {
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
    UserService.logout(this.state.userid)
  }
  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-expand-lg navbar-dark ">
            <a class="logo navbar-brand" href="#"><i class="fas fa-graduation-cap fa-lg"></i>AmBus</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active"><a class="nav-link" href="/home"><i class="fas fa-home fa-lg"></i> <span class="sr-only">(current)</span></a> </li>
                <li class="nav-item"><a class="nav-link" href="#">University</a></li>
                <li class="nav-item"><a class="nav-link" href="http://localhost:3000/collegepage">College</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Admissions</a></li>
              </ul>
              <form class="form-inline my-3 my-lg-3">
                <div className="input-group w-100">
                  {" "}
                  <input
                    type="text"
                    className="form-control search-form"
                    style={{ width: "55%;" }}
                    placeholder="Search"
                  />
                  <div className="input-group-append">
                    {" "}
                    <button
                      className="btn btn-dark search-button"
                      type="submit">
                      {" "}
                      <Search />
                    </button>{" "}
                  </div>
                </div>
              </form>
              <a href="http://localhost:3000/">
              <button class="btn btn-lg btn-info" role="button" onClick={this.logout}>LOGOUT &raquo;</button></a>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
export default HeaderLogout