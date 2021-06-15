import React, { Component } from "react";
import ApplicationService from "../../service/applicationService";
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
        applicantFullName: this.props.match.params.applicantFullName,
        application: [],
      search: '',
    };
 //   this.updateApplication = this.updateApplication.bind(this);

}
    getApplicationByApplicantFullName = (applicantFullName) => {
        let application = [];

        ApplicationService.getApplicationByApplicantFullName(
          this.state.search
        ).then((res) => {
          application = res.data;
          this.setState({ application });
          console.log(this.state.application);

        });
        this.props.history.push(`/viewapplicationstatus/${applicantFullName}`);

      };
      onChange = (event) => {
        console.log(event.target.value);
        this.setState({ search: event.target.value });
      };
     
      render() {
        return (
          <div>
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
              </div>
              </div>
              )
            }
        }
export default Search;