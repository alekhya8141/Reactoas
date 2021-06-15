import React, { Component } from 'react';
import ApplicationService from '../../service/applicationService';

class ViewApplicationStatus extends Component {

    constructor(props){
        super(props)
        this.state = {
          applicantFullName: this.props.match.params.applicantFullName,
          applicationId: "",
          dateOfBirth:"" ,
          highestQualification: "",
          finalYearPercentage: "",
          goals: "",
          emailId:"",
          applicationStatus: "",
         
        };
    }
        componentDidMount(){
            ApplicationService.getApplicationByApplicantFullName(this.state.applicantFullName).then( res =>{
                this.setState({application: res.data});
            })
        }
        cancel(){
            this.props.history.push('/applications');
        }
    
        
        render() { 
            return ( 
                <div className="card border-dark col-md-6 offset-md-3 " style={{marginBottom:"70px", marginTop:"70px"}}>
                    <h3 className ="text-center"> View ApplicationDetails</h3>
                    <div className="card bg-light text-dark">
                    <div className ="card-body">
                    <h1>{this.props.match.params.applicantFullName}</h1>
                        <div className ="row">
                            <label><b> ApplicationId: </b></label>
                            <div>{this.state.application.applicationId}</div>
                        </div>
                        <div className ="row">
                            <label><b> ApplicantFullName:</b> </label>
                            <div>{this.state.application.applicantFullName}</div>
                        </div>
                        <div className ="row">
                            <label><b> DateOfBirth: </b></label>
                            <div>{this.state.application.dateOfBirth}</div>
                        </div>
                        <div className ="row">
                            <label><b> HighestQualification: </b></label>
                            <div>{this.state.application.highestQualification}</div>
                        </div>
                        <div className ="row">
                            <label><b> FinalYearPercentage: </b></label>
                            <div>{this.state.application.finalYearPercentage}</div>
                        </div>
                        <div className ="row">
                            <label><b> Goals: </b></label>
                            <div>{this.state.application.goals}</div>
                        </div>
                        <div className ="row">
                            <label><b> EmailId: </b></label>
                            <div>{this.state.application.emailId}</div>
                        </div>
                        <div className ="row">
                            <label><b> ApplicationStatus: </b></label>
                            <div>{this.state.application.applicationStatus}</div>
                        </div>
                        <button className="btn btn-danger float-right" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
    
                    </div>
    
    
                    </div>
                </div>
            
             )
        }
    }
     
    export default ViewApplicationStatus;