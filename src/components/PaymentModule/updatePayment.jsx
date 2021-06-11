import React, { Component } from 'react';
import PaymentService from '../../service/paymentService';

class UpdatePayment extends Component {

    constructor(props){
        super(props)
        this.state = {
            paymentId: "",
            emailIdOfStudent: "",
            paymentAmount: "",
            paymentDescription: "",
            paymentDate: "",
            paymentStatus: "",
        };
        this.changeemailIdOfStudentHandler=this.changeemailIdOfStudentHandler.bind(this);
        this.changepaymentAmountHandler=this.changepaymentAmountHandler.bind(this);
        this.changepaymentDescriptionHandler=this.changepaymentDescriptionHandler.bind(this);
        this.changepaymentDateHandler=this.changepaymentDateHandler.bind(this);
        this.changepaymentStatusHandler=this.changepaymentStatusHandler.bind(this);
        this.updatePayment=this.updatePayment.bind(this);
        this.changeIdHandler=this.changeIdHandler.bind(this);
    }

    componentDidMount(){
        PaymentService.getPaymentById(this.state.paymentId).then((res) =>{
            let payment=res.data;
            this.setState({emailIdOfStudent:payment.emailIdOfStudent,
                paymentAmount:payment.paymentAmount,
                paymentDescription:payment.paymentDescription,
                paymentDate:payment.paymentDate,
                paymentStatus:payment.paymentStatus,
            });
        });
    }

    updatePayment = (e) => {
        e.preventDefault();
        let payment={paymentId:this.state.paymentId,emailIdOfStudent: this.state.emailIdOfStudent, paymentAmount: this.state.paymentAmount,paymentDescription: this.state.paymentDescription,paymentDate: this.state.paymentDate,paymentStatus: this.state.paymentStatus};
        console.log('payment => '+ JSON.stringify(payment));

        PaymentService.updatePayment(payment,this.state.paymentId).then((res) => {
              this.props.history.push(`/payments`);
        });

    }

    changeIdHandler=(event) =>{
        this.setState({paymentId: event.target.value})
    }

    changeemailIdOfStudentHandler=(event) =>{
        this.setState({emailIdOfStudent: event.target.value})
    }

    changepaymentAmountHandler=(event) =>{
        this.setState({paymentAmount: event.target.value})
    }

    changepaymentDescriptionHandler=(event) =>{
        this.setState({paymentDescription: event.target.value})
    }

    changepaymentDateHandler=(event) =>{
        this.setState({paymentDate: event.target.value})
    }
    changepaymentStatusHandler=(event) =>{
        this.setState({paymentStatus: event.target.value})
    }
    
    cancel(){
        this.props.history.push('/payments');
    }



    render() { 
        return (  
            <div>
                <div className="container" style={{marginBottom:"50px", marginTop:"50px"}}>
                    <div className="row">
                        <div className="card border-dark bg-light col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Payment</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group text-left">
                                        <label>PaymentId:</label>
                                        <input placeholder="Id" name="paymentId" className="form-control" value={this.state.paymentId} onChange={this.changeIdHandler}/>
                                </div>
                                    <div className="form-group text-left">
                                        <label>EmailIdOfStudent:</label>
                                        <input placeholder="emailIdOfStudent" name="emailIdOfStudent" className="form-control" value={this.state.emailIdOfStudent} onChange={this.changeemailIdOfStudentHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>PaymentAmount:</label>
                                        <input placeholder="paymentAmount" name="paymentAmount" className="form-control" value={this.state.paymentAmount} onChange={this.changepaymentAmountHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>PaymentDescription:</label>
                                        <input placeholder="paymentDescription" name="paymentDescription" className="form-control" value={this.state.paymentDescription} onChange={this.changepaymentDescriptionHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>PaymentDate:</label>
                                        <input placeholder="paymentDate" name="paymentDate" className="form-control" value={this.state.paymentDate} onChange={this.changepaymentDateHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>PaymentStatus:</label>
                                        <input placeholder="paymentStatus" name="paymentStatus" className="form-control" value={this.state.paymentStatus} onChange={this.changepaymentStatusHandler}/>
                                    </div>
                                   
                                    <button className="btn btn-danger float-right" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    <button className="btn btn-success float-right" onClick={this.updatePayment}> Save</button>

                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
 
export default UpdatePayment;