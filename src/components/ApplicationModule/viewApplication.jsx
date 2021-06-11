import React, { Component } from 'react';
import ApplicationService from '../../service/applicationService';


class ViewApplication extends Component {
    constructor(props){
        super(props)
        this.state={
            applicationId: this.props.match.params.applicationId,
            application:{}
        }
    }
    componentDidMount(){
        ApplicationService.getApplicationById(this.state.applicationId).then( res =>{
            this.setState({application: res.data});
        })
    }
    
    render() { 
        return ( 
            <div className="card border-dark col-md-6 offset-md-3 " style={{marginBottom:"70px", marginTop:"70px"}}>
                <h3 className ="text-center"> View ApplicationDetails</h3>
                <div className="card bg-light text-dark">
                <div className ="card-body">
                <h1>{this.props.match.params.applicationId}</h1>
                    <div className ="row">
                        <label><b> applicationId: </b></label>
                        <div>{this.state.application.applicationId}</div>
                    </div>
                    <div className ="row">
                        <label><b> applicantFullName:</b> </label>
                        <div>{this.state.application.applicantFullName}</div>
                    </div>
                    <div className ="row">
                        <label><b> dateOfBirth: </b></label>
                        <div>{this.state.application.dateOfBirth}</div>
                    </div>
                    <div className ="row">
                        <label><b> highestQualification: </b></label>
                        <div>{this.state.application.highestQualification}</div>
                    </div>
                    <div className ="row">
                        <label><b> finalYearPercentage: </b></label>
                        <div>{this.state.application.finalYearPercentage}</div>
                    </div>
                    <div className ="row">
                        <label><b> goals: </b></label>
                        <div>{this.state.application.goals}</div>
                    </div>
                    <div className ="row">
                        <label><b> emailId: </b></label>
                        <div>{this.state.application.emailId}</div>
                    </div>
                    <div className ="row">
                        <label><b> applicationStatus: </b></label>
                        <div>{this.state.application.applicationStatus}</div>
                    </div>
                    <div className ="row">
                        <label><b> dateOfInterview: </b></label>
                        <div>{this.state.application.dateOfInterview}</div>
                    </div>
                    <div className ="row">
                        <label><b> applicantInterviewFeedback: </b></label>
                        <div>{this.state.application.applicantInterviewFeedback}</div>
                    </div>    
                </div>

                </div>
            </div>
         )
    }
}
 
export default ViewApplication;