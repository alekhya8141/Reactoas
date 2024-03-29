import React, { Component } from 'react';
import ApplicationService from '../../service/applicationService';

class UpdateApplication extends Component {

    constructor(props){
        super(props)
        this.state = {
          applicationId: this.props.match.params.applicationId,
          applicantFullName: "",
          dateOfBirth: "",
          highestQualification: "",
          finalYearPercentage: "",
          goals: "",
          emailId: "",
          applicationStatus: "",
         
        };
        this.changeapplicantFullNameHandler=this.changeapplicantFullNameHandler.bind(this);
        this.changedateOfBirthHandler=this.changedateOfBirthHandler.bind(this);
        this.changehighestQualificationHandler=this.changehighestQualificationHandler.bind(this);
        this.changefinalYearPercentageHandler=this.changefinalYearPercentageHandler.bind(this);
        this.changegoalsHandler=this.changegoalsHandler.bind(this);
        this.changeemailIdHandler=this.changeemailIdHandler.bind(this);
        this.changeapplicationStatusHandler=this.changeapplicationStatusHandler.bind(this);
        this.updateApplication=this.updateApplication.bind(this);
        this.changeIdHandler=this.changeIdHandler.bind(this);
    }

    componentDidMount(){
        ApplicationService.getApplicationById(this.state.applicationId).then((res) =>{
            let application=res.data;
            this.setState({applicantFullName:application.applicantFullName,
                dateOfBirth:application.dateOfBirth,
                highestQualification:application.highestQualification,
                finalYearPercentage:application.finalYearPercentage,
                goals:application.goals,
                emailId:application.emailId,
                applicationStatus:application.applicationStatus,
            });
        });
    }

    updateApplication = (e) => {
        e.preventDefault();
        let application={applicationId:this.state.applicationId,applicantFullName: this.state.applicantFullName, dateOfBirth: this.state.dateOfBirth,highestQualification: this.state.highestQualification,finalYearPercentage: this.state.finalYearPercentage,goals: this.state.goals,emailId: this.state.emailId,applicationStatus: this.state.applicationStatus};
        console.log('application => '+ JSON.stringify(application));

        ApplicationService.updateApplication(application,this.state.applicationId).then((res) => {
              this.props.history.push(`/applications`);
        });

    }

    changeIdHandler=(event) =>{
        this.setState({applicationId: event.target.value})
    }

    changeapplicantFullNameHandler=(event) =>{
        this.setState({applicantFullName: event.target.value})
    }

    changedateOfBirthHandler=(event) =>{
        this.setState({dateOfBirth: event.target.value})
    }

    changehighestQualificationHandler=(event) =>{
        this.setState({highestQualification: event.target.value})
    }

    changefinalYearPercentageHandler=(event) =>{
        this.setState({finalYearPercentage: event.target.value})
    }
    changegoalsHandler=(event) =>{
        this.setState({goals: event.target.value})
    }
    changeemailIdHandler=(event) =>{
        this.setState({emailId: event.target.value})
    }
    changeapplicationStatusHandler=(event) =>{
        this.setState({applicationStatus: event.target.value})
    }
 

    cancel(){
        this.props.history.push('/applications');
    }



    render() { 
        return (  
            <div>
                <div className="container" style={{marginBottom:"50px", marginTop:"50px"}}>
                    <div className="row">
                        <div className="card border-dark bg-light col-md-6  offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Application</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group text-left">
                                        <label>ApplicationId:</label>
                                        <input placeholder="Id" name="applicationId" className="form-control" value={this.state.applicationId} onChange={this.changeIdHandler}/>
                                </div>
                                    <div className="form-group text-left">
                                        <label>ApplicantFullName:</label>
                                        <input placeholder="applicantFullName" name="applicantFullName" className="form-control" value={this.state.applicantFullName} onChange={this.changeapplicantFullNameHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>DateOfBirth:</label>
                                        <input placeholder="dateOfBirth" name="dateOfBirth" className="form-control" value={this.state.dateOfBirth} onChange={this.changedateOfBirthHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>HighestQualification:</label>
                                        <input placeholder="highestQualification" name="highestQualification" className="form-control" value={this.state.highestQualification} onChange={this.changehighestQualificationHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>FinalYearPercentage:</label>
                                        <input placeholder="finalYearPercentage" name="finalYearPercentage" className="form-control" value={this.state.finalYearPercentage} onChange={this.changefinalYearPercentageHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Goals:</label>
                                        <input placeholder="goals" name="goals" className="form-control" value={this.state.goals} onChange={this.changegoalsHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>EmailId:</label>
                                        <input placeholder="emailId" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeemailIdHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>ApplicationStatus:</label>
                                        <input placeholder="applicationStatus" name="applicationStatus" className="form-control" value={this.state.applicationStatus} onChange={this.changeapplicationStatusHandler}/>
                                    </div>
                                   
                                   
                                    <button className="btn btn-danger float-right" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    <button className="btn btn-success float-right" onClick={this.updateApplication}> Save</button>

                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
 
export default UpdateApplication;