import React, { Component } from "react";
import ApplicationService from "../../service/applicationService";
class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      application: [],
      search: '',
    };
    this.addApplication = this.addApplication.bind(this);
    this.deleteApplication = this.deleteApplication.bind(this);
    this.viewApplication = this.viewApplication.bind(this);
    this.updateApplication = this.updateApplication.bind(this);
  }
  getApplicationByApplicantFullName = () => {
    let application = [];
    ApplicationService.getApplicationByApplicantFullName(
      this.state.search
    ).then((res) => {
      application = res.data;
      this.setState({ application });
      console.log(this.state.application);
    });
  };
  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };
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
    ApplicationService.deleteApplication(applicationId).then((res) => {
      this.setState({
        application: this.state.application.filter(
          (applications) => applications.applicationId !== applicationId
        ),
      });
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
    this.props.history.push("/ahome");
  }

  render() {
    return (
      <div>
       
          <h2 className="text-center">Application List</h2>
          <div className="row justify-content-center ">
          <div className="container">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control ml-auto"
              type="search"
              name="name"
              placeholder="Search by name"
              aria-label="Search"
              onChange={this.onChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.getApplicationByApplicantFullName}
            >
              Search
            </button>
          </form>
            <table
              className="table table-sm table-bordered mt-2 "
              style={{ marginLeft: "20px", width: "80%" }}
            >
              <thead className="table-dark">
                <tr>
                  <th>ApplicationId</th>
                  <th>ApplicantName</th>
                  <th>Dateofbirth</th>
                  <th>HighestQualification</th>
                  <th>Percentage</th>
                  <th>Goals</th>
                  <th>EmailId</th>
                  <th>ApplicationStatus</th>
                  <th colSpan="3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.application.map((app) => (
                  <tr key={app.applicationId}>
                    <td>{app.applicationId}</td>
                    <td>{app.applicantFullName}</td>
                    <td>{app.dateOfBirth}</td>
                    <td>{app.highestQualification}</td>
                    <td>{app.finalYearPercentage}</td>
                    <td>{app.goals}</td>
                    <td>{app.emailId}</td>
                    <td>{app.applicationStatus}</td>

                    <td>
                      <button
                        onClick={() => this.viewApplication(app.applicationId)}
                        className="btn btn-info"
                      >
                        <i class="far fa-eye"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          this.updateApplication(app.applicationId)
                        }
                        className="btn btn-warning"
                      >
                        <i class="far fa-edit"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          this.deleteApplication(app.applicationId)
                        }
                        className="btn btn-danger "
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            className="btn btn-info size-lg"
            style={{ marginLeft: "120px" }}
            onClick={this.goback.bind(this)}
          >
            <i className="fa fa-arrow-left "></i>
          </button>
        </div>
      </div>
    );
  }
}
export default Application;
