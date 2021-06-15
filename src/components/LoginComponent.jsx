import React, { Component } from "react";
import UserService from "../service/UserService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signupLogin.css";
import {LockFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import HeaderComponent from "./Header";
import Footer from "./Footer";

// import {} from

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid:'',
      password: '',
    };
    this.verifyLogin = this.verifyLogin.bind(this);
  }
  changeUserIdHandler = (event) => {
    this.setState({ userid: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  verifyLogin = (e) => {
    e.preventDefault();
        let loginentity ={userid:this.state.userid,password:this.state.password};
        console.log('loginentity => '+JSON.stringify(loginentity)); 
        UserService.login(loginentity).then(res => {
            localStorage.setItem('userid',this.state.userid)
            if(this.state.userid==="Admin"&& this.state.password=="helloadmin"){ 
           this.props.history.push(`/ahome`);
            }
            else {
                this.props.history.push(`/homelogout`);
            }
        });
  };

  render() {
    return (
      <div id="helloo">
      <HeaderComponent/>
      <div >
        <div>
          <div className="row py-5 mt-4 align-items-center">
            <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
              <h2 class="heyy">
                <b>An Investment In Knowledge Always Pays The Best Interest</b>
              </h2>
              <h3 class="hey">
                <b>- We care for your Future</b>
              </h3>
            </div>
            <div className="col-md-7 col-lg-6 ml-auto">
            <h3 className="text-center"><b>LOGIN</b></h3>
              <form action="#">
                <div id="row">
                  <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span id="sp" className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-user"></i> 
                      </span>
                    </div>
                    <input
                      id="userid"
                      type="userid"
                      name="userid"
                      placeholder="UserId"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.userid}
                      onChange={this.changeUserIdHandler}
                      required
                    />
                  </div>

                  <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span id="sp" className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-lock">
                        </i>
                      </span>
                    </div>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                  </div>
                  <div className="form-group col-lg-12 mx-auto mb-0">
                    <button
                      // href="#"
                      className="btn btn-primary btn-block py-2 acc"
                      onClick={this.verifyLogin}
                    >
                      <span className="font-weight-bold">LOGIN</span>
                    </button>
                    <div id="heyyy">
                      <b>Don't have an account?</b>{" "}
                      <Link to="/sign-up/_add" ><b>SignUp</b></Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
    <Footer/>
    </div>
    );
  }
}

export default LoginComponent;
