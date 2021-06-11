import React, { Component } from 'react';
import PaymentService from '../../service/paymentService';


class ViewPayment extends Component {
    constructor(props){
        super(props)
        this.state={
            paymentId: this.props.match.params.paymentId,
            payment:{}
        }
    }
    componentDidMount(){
        PaymentService.getPaymentById(this.state.paymentId).then( res =>{
            this.setState({payment: res.data});
        })
    }
    render() { 
        return ( 
            <div className="card border-dark col-md-6 offset-md-3" style={{marginBottom:"100px", marginTop:"100px"}}>
                <h3 className ="text-center"> View Payment Details</h3>
                <div className="card bg-light text-dark">
                <div className ="card-body">
                <h1>{this.props.match.params.paymentId}</h1>
                    <div className ="row">
                        <label><b> PaymentId: </b></label>
                        <div>{this.state.payment.paymentId}</div>
                    </div>
                    <div className ="row">
                        <label><b> EmailIdOfStudent:</b> </label>
                        <div>{this.state.payment.emailIdOfStudent}</div>
                    </div>
                    <div className ="row">
                        <label><b> PaymentAmount: </b></label>
                        <div>{this.state.payment.paymentAmount}</div>
                    </div>
                    <div className ="row">
                        <label><b> PaymentDescription: </b></label>
                        <div>{this.state.payment.paymentDescription}</div>
                    </div>
                    <div className ="row">
                        <label><b> PaymentDate: </b></label>
                        <div>{this.state.payment.paymentDate}</div>
                    </div>
                    <div className ="row">
                        <label><b> PaymentStatus: </b></label>
                        <div>{this.state.payment.paymentStatus}</div>
                    </div>
                    
                </div>

                </div>
            </div>
         )
    }
}
 
export default ViewPayment;