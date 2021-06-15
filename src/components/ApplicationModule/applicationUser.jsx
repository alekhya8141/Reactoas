import React, { Component } from "react";
import PatientHistoryService from "../../service/AdmissionService";
import _ from "lodash";
import { Link }from "react-router-dom";
import AdmissionService from "../../service/AdmissionService";

class AdmissionSer extends Component {
    state={
        admission:[],
        sortColumn: { path: "title", order: "asc" },
        search: "",
        admissions: {
          admissionId: "",
          emailId: "",
          },
    };

    componentDidMount(){
        AdmissionService.ViewAdmission().then((res) => {
            console.log("data: ", res.data);
            this.setState({ admission: res.data });
          });
          console.log("admission: ", this.state.admission);
    }
      handleSort = (path) => {
        console.log(path);
        this.setState({ sortColumn: { path, order: "asc" } });
      };
    
      onChange = (event) => {
        console.log(event.target.value);
        this.setState({ search: event.target.value });
      };
    
      render() {
        const { search, sortColumn, admission } = this.state;
        var sorted = [];
        if (search) {
          sorted = admission.filter((admissions) => admissions.admissionId == search);
        } 
        else {
          sorted = _.orderBy(
            this.state.admission,
            [sortColumn.path],
            [sortColumn.order]
          );
        }
        console.log(this.state.admission);
        
        console.log("Sorted..", sorted);
        return (
          <div className="w-75 mt-5 mx-auto">
            <div className="d-flex justify-content-between">
            </div>    
            <table className="table mt-3">
              <thead className="table-dark">
                <tr>
                  <th onClick={() => this.handleSort("admissionId")}>AdmissionId</th>
                  <th onClick={() => this.handleSort("emailId")}>emailId</th>
                  <th onClick={() => this.handleSort("desId")}>College Name</th>
                  <th onClick={() => this.handleSort("dietId")}>Course Namw</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((admissions) => (
                 <tr key={admissions.admissionId}>
                 <td>{admissions.emailId}</td>
                 <td>{admissions.college.collegeName}</td>
               </tr>                 
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
    export default AdmissionSer;