import React, { Component } from 'react';
import ApplicationService from '../../service/applicationService';
import HeaderLogout from "../headerLogout";
import Footer from "../Footer";
import "../homeform.css"

class ApplicationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            applicantFullName: "",
            dateOfBirth: "",
            highestQualification: "",
            finalYearPercentage: "",
            goals: "",
            emailId: "",
            collegeName: "",
            courseName: "",
            branchName: "",
        };



        this.changeapplicantFullNameHandler = this.changeapplicantFullNameHandler.bind(this);
        this.changedateOfBirthHandler = this.changedateOfBirthHandler.bind(this);
        this.changehighestQualificationHandler = this.changehighestQualificationHandler.bind(this);
        this.changefinalYearPercentageHandler = this.changefinalYearPercentageHandler.bind(this);
        this.changegoalsHandler = this.changegoalsHandler.bind(this);
        this.changeemailIdHandler = this.changeemailIdHandler.bind(this);
        this.changecollegeNameHandler = this.changecollegeNameHandler.bind(this);
        this.changecourseNameHandler = this.changecourseNameHandler.bind(this);
        this.changebranchNameHandler = this.changebranchNameHandler.bind(this);
        this.saveApplication = this.saveApplication.bind(this);
        this.changeIdHandler = this.changeIdHandler.bind(this);
    }

    saveApplication = (e) => {
        e.preventDefault();
        let application = { applicationId: this.state.applicationId, applicantFullName: this.state.applicantFullName, dateOfBirth: this.state.dateOfBirth, highestQualification: this.state.highestQualification, finalYearPercentage: this.state.finalYearPercentage, goals: this.state.goals, emailId: this.state.emailId,collegeName: this.state.collegeName,courseName: this.state.courseName,branchName:this.state.branchName };
        console.log('application => ' + JSON.stringify(application));

        ApplicationService.createApplication(application).then(res => {
            this.props.history.push(`addressform`);
        });

    }

    changeIdHandler = (event) => {
        this.setState({ applicationId: event.target.value })
    }

    changeapplicantFullNameHandler = (event) => {
        this.setState({ applicantFullName: event.target.value })
    }

    changedateOfBirthHandler = (event) => {
        this.setState({ dateOfBirth: event.target.value })
    }

    changehighestQualificationHandler = (event) => {
        this.setState({ highestQualification: event.target.value })
    }

    changefinalYearPercentageHandler = (event) => {
        this.setState({ finalYearPercentage: event.target.value })
    }
    changegoalsHandler = (event) => {
        this.setState({ goals: event.target.value })
    }
    changeemailIdHandler = (event) => {
        this.setState({ emailId: event.target.value })
    }
    changecollegeNameHandler = (event) => {
        this.setState({ collegeName: event.target.value })
    }
    changebranchNameHandler = (event) => {
        this.setState({ branchName: event.target.value })
    }
    changecourseNameHandler = (event) => {
        this.setState({ courseName: event.target.value })
    }

    back() {
        this.props.history.push('/');
    }



    render() {
        return (
            <div class="homeform">
                <HeaderLogout/>
                <div className="container" style={{ marginBottom: "50px", marginTop: "50px" }}>
                    <div className="row">
                        <div className="card border-dark bg-light col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Application</h3>
                            <div className="card-body" >
                                <form>

                                    <div className="form-group text-left">
                                        <label>ApplicantFullName:</label>
                                        <input placeholder="applicantFullName" name="applicantFullName" className="form-control" value={this.state.applicantFullName} onChange={this.changeapplicantFullNameHandler} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label>DateOfBirth:</label>
                                        <input type="date" placeholder="dateOfBirth" name="dateOfBirth" className="form-control" value={this.state.dateOfBirth} onChange={this.changedateOfBirthHandler} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label>HighestQualification:</label>
                                        <input placeholder="highestQualification" name="highestQualification" className="form-control" value={this.state.highestQualification} onChange={this.changehighestQualificationHandler} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label>FinalYearPercentage:</label>
                                        <input placeholder="finalYearPercentage" name="finalYearPercentage" className="form-control" value={this.state.finalYearPercentage} onChange={this.changefinalYearPercentageHandler} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Goals:</label>
                                        <input placeholder="goals" name="goals" className="form-control" value={this.state.goals} onChange={this.changegoalsHandler} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label>EmailId:</label>
                                        <input placeholder="emailId" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeemailIdHandler} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label>College Name:</label>
                                        <input placeholder="colllege name" name="name" className="form-control" value={this.state.collegeName} onChange={this.changecollegeNameHandler} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Course Name:</label>
                                        <input placeholder="course name" name="name" className="form-control" value={this.state.courseName} onChange={this.changecourseNameHandler} />
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Branch Name:</label>
                                        <input placeholder="branch name" name="name" className="form-control" value={this.state.branchName} onChange={this.changebranchNameHandler} />
                                    </div>
                                    <button className="btn btn-primary float-left" onClick={this.back.bind(this)} style={{ marginLeft: "10px" }}>Back</button>

                                    <button className="btn btn-success float-right" onClick={this.saveApplication}> Next</button>

                                </form>



                            </div>
                        </div>
                    </div>
                    </div>
<Footer/>
                
            </div>
        )
    }
}

export default ApplicationForm;