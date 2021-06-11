import React, { Component } from "react";
import ApplicationService from '../../service/applicationService';
import _ from "lodash";
import { Link }from "react-router-dom";

class ApplicationDetails extends Component {
    state={
        application:[],
        sortColumn: { path: "title", order: "asc" },
        search: "",
        app:{
            applicationId:"",
            applicantFullName:"",
            
          },
    };

    componentDidMount(){
        ApplicationService.getAllApplication().then((res) => {
            console.log("data: ", res.data);
            this.setState({ application: res.data });
          });
          console.log("application: ", this.state.application);
        

    }
/** 
    deletePatientHistory = (id) => {
        console.log("Delete history with id: " + id);
        const patient_history = this.state.patient_history.filter(
          (history) => history.patientHistoryId !== id
        );
        this.setState({ patient_history });
        PatientHistoryService.deletePatientHistory(id);
      };
    
      viewPatientHistory = () => {
        let patient_history = [];
        PatientHistoryService.findByPatientHistoryId(this.state.search).then((res) => {
          console.log("**data: ", res.data);
          //this.setState({ student: res.data });
          patient_history = res.data;
        });
        this.setState({ patient_history });
        console.log("** viewPatientHistory" + this.state.history);
      };
   */ 
      handleSort = (path) => {
        console.log(path);
        this.setState({ sortColumn: { path, order: "asc" } });
      };
    
      onChange = (event) => {
        console.log(event.target.value);
        this.setState({ search: event.target.value });
      };
    
      render() {
        // console.log(this.state.patient_history[0]);
        // console.log(this.state.patient_history[0].diet.dietType);
        // console.log(this.state.patient_history[0].patient.patientName);
        // console.log(this.state.patient_history[0].disease.diseaseName);
        const { search, sortColumn, application } = this.state;
        var sorted = [];
        if (search) {
          sorted = application.filter((app) => app.applicationId == search);
        } 
        else {
          sorted = _.orderBy(
            this.state.application,
            [sortColumn.path],
            [sortColumn.order]
          );
        }
        console.log(this.state.application);
        
        console.log("Sorted..", sorted);
        return (
          <div className="w-75 mt-5 mx-auto">
            <div className="d-flex justify-content-between">
              <Link to="/history/add" className="btn btn-secondary btn-large mb-1">
                Add
              </Link>
              <form class="form-inline my-2 my-lg-0">
                <input
                  className="form-control ml-auto"
                  type="search"
                  placeholder="Search by Id"
                  aria-label="Search"
                  onChange={this.onChange}
                />
                
              </form>
            </div>
    
            <table className="table mt-3">
              <thead className="table-dark">
                <tr>
                  <th onClick={() => this.handleSort("applicationId")}>applicationId</th>
                  <th onClick={() => this.handleSort("paymentId")}>paymentAmount</th>
                  <th onClick={() => this.handleSort("courseId")}>courseName</th>
                  <th onClick={() => this.handleSort("branchId")}>branchName</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                { sorted.map((app) => (
                 <tr key={app.applicationId}>
                 <td>{app.applicationId}</td>
                 <td>{app.payment.paymentAmount}</td>
                 <td>{app.course.courseName}</td>
                 <td>{app.branch.branchName}</td>
                 
                
               </tr>            
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
    export default ApplicationDetails;