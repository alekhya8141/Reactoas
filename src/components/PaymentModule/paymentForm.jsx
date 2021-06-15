import React, { Component } from "react";
import PaymentService from "../../service/paymentService";
import Footer from "../Footer";
import HeaderLogout from "../headerLogout";
import "../homeform.css"
class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailIdOfStudent: "",
      paymentAmount: "",
   
    };
    this.changeemailIdOfStudentHandler =
      this.changeemailIdOfStudentHandler.bind(this);
    this.changepaymentAmountHandler =
      this.changepaymentAmountHandler.bind(this);
    this.savePayment = this.savePayment.bind(this);
    this.changeIdHandler = this.changeIdHandler.bind(this);
  }

  savePayment = (e) => {
    e.preventDefault();
    let payment = {
      paymentId: this.state.paymentId,
      emailIdOfStudent: this.state.emailIdOfStudent,
      paymentAmount: this.state.paymentAmount,
  
    };
    console.log("payment => " + JSON.stringify(payment));

    PaymentService.createPayment(payment).then((res) => {
      this.props.history.push(`/makepayment`);
    });
  };

  changeIdHandler = (event) => {
    this.setState({ paymentId: event.target.value });
  };

  changeemailIdOfStudentHandler = (event) => {
    this.setState({ emailIdOfStudent: event.target.value });
  };

  changepaymentAmountHandler = (event) => {
    this.setState({ paymentAmount: event.target.value });
  };

  back() {
    this.props.history.push("/documentform");
  }

  render() {
    return (
      <div class="homeform">
        <HeaderLogout/>
        <div
          className="container"
          style={{ marginBottom: "50px", marginTop: "50px" }}
        >
          <div className="row">
            <div className="card border-dark bg-light col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Payment</h3>
              <div className="card-body">
                <form>
                  <div className="form-group text-left">
                    <label>EmailIdOfStudent:</label>
                    <input
                      placeholder="emailIdOfStudent"
                      type="email"
                      name="emailIdOfStudent"
                      className="form-control"
                      value={this.state.emailIdOfStudent}
                      onChange={this.changeemailIdOfStudentHandler}
                    />
                  </div>
                  <div className="form-group text-left">
                    <label>PaymentAmount:</label>
                   
                    <input
                    
                      placeholder="Enter PaymentAmount as rupees 2000"
                      name="paymentAmount"
                      className="form-control"
                      value={this.state.paymentAmount}
                      onChange={this.changepaymentAmountHandler}
                    />
                  </div>
                 
                  <button
                    className="btn btn-primary float-left"
                    onClick={this.back.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Back
                  </button>

                  <button
                    className="btn btn-success float-right"
                    onClick={this.savePayment}
                  >
                    {" "}
                    Pay
                  </button>
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

export default PaymentForm;