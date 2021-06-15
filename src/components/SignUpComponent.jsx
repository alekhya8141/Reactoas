import React, { Component } from "react";
import UserService from "../service/UserService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signupLogin.css";
import HeaderComponent from "./Header";
import Footer from "./Footer";
import Joi from "joi-browser";
import {
  Facebook,
  Google,
  Twitter,
  PersonPlusFill,
  PersonCircle,
  EnvelopeFill,
  PhoneFill,
  LockFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

class Register extends Component{
    constructor(props){
        super(props)

        this.state={
            userid:'',
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            mobileNumber:'',
            aadharnumber:'',
            errors:{}
        };
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeMobileNumberHandler=this.changeMobileNumberHandler.bind(this);
        this.changeaadharnumberHandler=this.changeaadharnumberHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }
    schema = {
      userid: Joi.string().min(4).alphanum().required(),
      firstname:Joi.string().min(2).max(20).required(),
      lastname:Joi.string().min(1).max(20).required(),
      email:Joi.string().email().required(),
      password: Joi.string().min(8).max(15).alphanum().required(),
      mobileNumber:Joi.string().min(10).max(10).required(),
      aadharnumber:Joi.string().min(12).max(12).required()
    };
    validate = () => {
      const errors = {};
      const result = Joi.validate(this.state,this.schema, {
        abortEarly: false,allowUnknown:true,
      });
      
      if (result.error !== null) {
       
        for (let err of result.error.details) {
          errors[err.path[0]] = err.message;
        }
      }
    
      return Object.keys(errors).length === 0 ? null : errors;
    };
    saveUser = async (e) => {
      e.preventDefault();
      const errors = this.validate()
     this.setState({ errors: errors || {} });
      if (errors) return;
      
      let user = {
        email: this.state.email,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        login: {
          loggedIn: "false",
          password: this.state.password,
          userid: this.state.userid,
        },
        mobileNumber: this.state.mobileNumber,
        aadharnumber: this.state.aadharnumber,
        password: this.state.password,
        userid: this.state.userid,
      };
    
      console.log("user => " + JSON.stringify(user));
  
      UserService.createUser(user).then((res) => {
        this.props.history.push(`/login`);
      });
    };
    changeUserIdHandler =(event) =>{
        this.setState({userid:event.target.value});
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstname:event.target.value});
    }
    changeLastNameHandler =(event) => {
        this.setState({lastname:event.target.value});
    }
    changeEmailHandler =(event) => {
        this.setState({email:event.target.value});
    }
    changePasswordHandler =(event) =>{
        this.setState({password:event.target.value});
    }
    changeMobileNumberHandler =(event) => {
        this.setState({mobileNumber:event.target.value});
    }
    changeaadharnumberHandler =(event) => {
        this.setState({aadharnumber:event.target.value});
    }
    cancel(){
        this.props.history.push('/');
    }
    
render(){
    return(
      <div>
        <HeaderComponent/>
      <div id="hellooo">
              <h2 className="text-center"><b>REGISTER</b></h2>
              <div>
              <div className="input-group col-lg-12 mb-1">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user"> 
                      </i> 
                    </span>
                  </div>

                  <input
                    id="userid"
                    type="text"
                    name="userid"
                    placeholder="UserId"
                    className="form-control bg-white border-md border-left-0 pl-3"
                    value={this.state.userid}
                    onChange={this.changeUserIdHandler}
                  />
                  {this.state.errors && (
                      <small id="userid" className="form-text text-dark">
                        {this.state.errors.userid}
                      </small>
                       )}
                </div>
                <div className="input-group col-lg-12 mb-1">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <PersonCircle />
                    </span>
                  </div>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control bg-white border-left-0 border-md"
                    value={this.state.firstname}
                    onChange={this.changeFirstNameHandler}
                  />
                   {this.state.errors && (
                        <small id="firstname" className="form-text text-dark">
                           {this.state.errors.firstname}
                            </small>
                            )}
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0 ml-2">
                        {/* <i className="fa fa-user text-muted"> */}
                        <PersonCircle />
                        {/* </i> */}
                      </span>
                    </div>
                    <input
                      id="lastName"
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.lastname}
                      onChange={this.changeLastNameHandler}
                    />
                    {this.state.errors && (
                        <small id="lastname" className="form-text text-dark">
                           {this.state.errors.lastname}
                            </small>
                            )}
                </div>
                <div className="input-group col-lg-12 mb-1">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0 ">
                      <EnvelopeFill />
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control bg-white border-left-0 border-md"
                    value={this.state.email}
                    onChange={this.changeEmailHandler}
                  />
                  {this.state.errors && (
                        <small id="email" className="form-text text-dark">
                           {this.state.errors.email}
                            </small>
                            )}
                </div>
                <div className="input-group col-lg-12 mb-1">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4  border-md border-right-0">
                        <PhoneFill/>
                    </span>
                  </div>

                  <input
                    id="phoneNumber"
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control bg-white border-md border-left-0 pl-3 "
                    value={this.state.mobileNumber}
                    onChange={this.changeMobileNumberHandler}
                  />
                  {this.state.errors && (
                        <small id="mobileNumber" className="form-text text-dark">
                           {this.state.errors.mobileNumber}
                            </small>
                            )}
                </div>
                <div className="input-group col-lg-12 mb-1">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-id-card"> 
                      </i> 
                    </span>
                  </div>

                  <input
                    id="AadharNumber"
                    type="text"
                    name="phone"
                    placeholder="Aadhar Number"
                    className="form-control bg-white border-md border-left-0 pl-3"
                    value={this.state.aadharnumber}
                    onChange={this.changeaadharnumberHandler}
                  />
                  {this.state.errors && (
                        <small id="aadharnumber" className="form-text text-dark">
                           {this.state.errors.aadharnumber}
                            </small>
                            )}
                </div>
                <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        {/* <i className="fa fa-lock text-muted"> */}
                        <LockFill />
                        {/* </i> */}
                      </span>
                    </div>
                    <input
                      id="Password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                    {this.state.errors && (
                        <small id="password" className="form-text text-dark">
                           {this.state.errors.password}
                            </small>
                            )}
                  </div>
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <button
                    // href="#"
                    className="btn btn-primary btn-block py-2 acc"
                    onClick={this.saveUser}
                  >
                    <i className="fa fa-facebook-f mr-1">
                      <PersonPlusFill />
                    </i>
                    <span className="font-weight-bold">
                      Create your account
                    </span>
                  </button>
                </div>
              
                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-1">
                  <div className="border-bottom w-100 ml-1 or"></div>
                  <span className="px-2 verylarge font-weight-bold ">
                    OR
                  </span>
                  <div className="border-bottom w-100 mr-5 or"></div>
                </div>
                <div className="form-group col-lg-12 mx-auto">
                  <button
                    href="#"
                    className="btn btn-primary btn-block py-2 btn-facebook"
                  >
                    <i className="fa fa-facebook-f mr-2">
                      <Facebook />
                    </i>
                    <span className="font-weight-bold">
                      Continue with FACEBOOK
                    </span>
                  </button>
                  <button
                    href="#"
                    className="btn btn-primary btn-block py-2 btn-twitter"
                  >
                    <i className="fa fa-twitter mr-3">
                      <Twitter />
                    </i>
                    <span className="font-weight-bold">
                      Continue with Twitter
                    </span>
                  </button>
                  <button
                    href="#"
                    className="btn btn-primary btn-block py-2 btn-google"
                  >
                    <i className="fa fa-google-f mr-2">
                      <Google />
                    </i>

                    <span className="font-weight-bold">
                      Continue with Google
                    </span>
                  </button>
                </div>
                <div className="text-center w-100">
                  <p className="bottom">
                    Already Registered?{" "}
                    <Link to="/login" style={{ color: "blue" }}>
                      Login
                    </Link>
                  </p>
                </div>
             </div> 
      </div>
      <Footer/>
      </div>
    )
}
}
export default Register