import React, { Component } from "react";
import ApplicationService from "../../service/applicationService";

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      application: []
    };
    this.addApplication = this.addApplication.bind(this);
    this.deleteApplication = this.deleteApplication.bind(this);
    this.viewApplication = this.viewApplication.bind(this);
    this.updateApplication = this.updateApplication.bind(this);
  }
  addApplication() {
    this.props.history.push("/add-application");
  }

  viewApplication(applicationId) {
    this.props.history.push(`/view-applications/${applicationId}`);
  }

  updateApplication(applicationId) {
    this.props.history.push(`/update-applications/${applicationId}`);
  }

  deleteApplication(applicationId) {
    ApplicationService.deleteApplication(applicationId).then(res => {
      this.setState({ application: this.state.application.filter(applications => applications.applicationId !== applicationId) });
    });
  }
  componentDidMount() {
    ApplicationService.getAllApplication().then((res) => {
      console.log("data: ", res.data);
      this.setState({ application: res.data });
    });
    console.log("application: ", this.state.application);
  }
  goback() {
    this.props.history.push('/ahome');
  }

  render() {
    return (
      <div>
        <br></br>
        <h2 className="text-center">Application List</h2>
        <div className="row justify-content-center ">
          <table className="table table-sm table-bordered mt-2 " style={{ marginLeft: "20px", width: "80%" }}>
            <thead className="table-dark">
              <tr>
                <th> Name</th>
                <th> Dateofbirth</th>
                <th> Qualification</th>
                <th> Percentage</th>
                <th> Goals</th>
                <th> EmailId</th>
                <th> College Name</th>
                <th> Course Name</th>
                <th> Branch Name</th>
                <th> Status</th>
                <th colSpan="3">Actions</th>
              </tr>
            </thead>
            <tbody>{
              this.state.application.map(
                app =>
                  <tr key={app.applicationId}>
                    <td>{app.applicantFullName}</td>
                    <td>{app.dateOfBirth}</td>
                    <td>{app.highestQualification}</td>
                    <td>{app.finalYearPercentage}</td>
                    <td>{app.goals}</td>
                    <td>{app.emailId}</td>
                    <td>{app.collegeName}</td>
                    <td>{app.courseName}</td>
                    <td>{app.branchName}</td>
                    <td>{app.applicationStatus}</td>
                    <td>
                      <button
                        onClick={() => this.viewApplication(app.applicationId)}
                        className="btn btn-info"><i class="far fa-eye"></i>

                      </button></td>
                    <td>
                      <button
                        onClick={() => this.updateApplication(app.applicationId)}
                        className="btn btn-warning"
                      >
                        <i class="far fa-edit"></i>

                      </button></td>
                    <td>
                      <button
                        onClick={() => this.deleteApplication(app.applicationId)}
                        className="btn btn-danger "
                      >
                        <i class="far fa-trash-alt"></i>
                      </button></td>
                  </tr>
              )
            }
            </tbody>
          </table>
        </div>
        <button className="btn btn-info size-lg" style={{ marginLeft: "120px" }} onClick={this.goback.bind(this)}><i className="fa fa-arrow-left "></i></button>

      </div>
    );
  }
}
export default Application;
