import React, { Component } from "react";
import PaymentService from "../../service/paymentService";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payment: []
    };
    this.addPayment = this.addPayment.bind(this);
    this.deletePayment = this.deletePayment.bind(this);
    this.viewPayment = this.viewPayment.bind(this);
    this.updatePayment = this.updatePayment.bind(this);
  }
  addPayment() {
    this.props.history.push("/add-payment");
  }

  viewPayment(paymentId) {
    this.props.history.push(`/view-payments/${paymentId}`);
  }

  updatePayment(paymentId) {
    this.props.history.push(`/update-payments/${paymentId}`);
  }

deletePayment(paymentId){
  PaymentService.deletePayment(paymentId).then(res=>{
    this.setState({payment: this.state.payment.filter(payments => payments.paymentId !== paymentId)});
  });
}
  componentDidMount() {
    PaymentService.getAllPayment().then((res) => {
      console.log("data: ", res.data);
      this.setState({ payment: res.data });
    });
    console.log("payment: ", this.state.payment);
  }
  goback() {
    this.props.history.push('/ahome');
}
  render() {
    return (
      <div>
        <br></br>
        <h2 className="text-center">Payment List</h2>
        <div className="row">
          <table className= "table table-sm table-bordered mt-2"style={{marginLeft:"100px",width:"80%"}}>
            <thead className="table-dark">
              <tr>
                <th> EmailIdOfStudent</th>
                <th> PaymentAmount</th>
                <th> PaymentDescription</th>
                <th> PaymentDate</th>
                <th> PaymentStatus</th>
                <th colSpan="3">Actions</th>
              </tr>
            </thead>
            <tbody>{
              this.state.payment.map(
                pay =>
                <tr key={pay.paymentId}>
                  <td>{pay.emailIdOfStudent}</td>
                  <td>{pay.paymentAmount}</td>
                  <td>{pay.paymentDescription}</td>
                  <td>{pay.paymentDate}</td>
                  <td>{pay.paymentStatus}</td>
                  <td>
                    <button

                      onClick={() => this.viewPayment(pay.paymentId)}
                      className="btn btn-info"><i class="far fa-eye"></i>
                    </button>
                    
                    <button
                      onClick={() => this.deletePayment(pay.paymentId)}
                      className="btn btn-danger ml-2"
                    >
                                            <i class="far fa-trash-alt"></i>

                    </button>
                    <button
                      onClick={() => this.updatePayment(pay.paymentId)}
                      className="btn btn-warning ml-2"
                    >
                      <i class="far fa-edit"></i>
                    </button>
                  </td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
        <button className="btn btn-info size-lg"style={{marginLeft:"120px"}} onClick={this.goback.bind(this)}><i className="fa fa-arrow-left "></i></button>

      </div>
    );
  }
}
export default Payment;
