import React, {Component} from 'react';
import AdmissionService from"../../service/AdmissionService";

class Admission extends Component
{
     constructor(props)
     {
         super(props)
         this.state={
             admission: []
         }
         this.addAdmission =this.addAdmission.bind(this);
         this.updateAdmission=this.updateAdmission.bind(this);
     }

componentDidMount(){
    AdmissionService.ViewAdmission().then((res)=>{
    this.setState({admission: res.data});
    
});
}
addAdmission(){
  this.props.history.push('/add-admission');
}
updateAdmission(admissionId){
    this.props.history.push(`/update-admission/${admissionId}`);
  }
  getAdmissionId(admissionId){
    this.props.history.push(`/get-admissionId/${admissionId}`);
  }
deleteAdmissionById = (admissionId) => {
    console.log("Delete admission with id: " + admissionId);
    const admission = this.state.admission.filter(
      (admission) => admission.admissionId !== admissionId
    );
    this.setState({ admission });
    AdmissionService.deleteAdmissionById (admissionId);
  };
  goback(){
    this.props.history.push('/ahome');
}
render() {
    return (
      <div className="container-md">
        <h2 classname="text-center">Admission</h2>
        <div className="row">
        <button type="button" class="btn btn-sm btn-info" onClick={this.addAdmission}>Add Admission</button></div>
        <div className="row">
        <table className="table table-mt-6">
          <thead className="table-light">
            <tr>
              <th>AdmissionId</th>
              <th>EmailId</th>
              <th>AdmissionStatus</th>
              <th>Year</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
              {
                  this.state.admission.map(
                      admission =>
                      <tr key={admission.admissionId}>
                           <td>{admission.admissionId}</td>
                          <td>{admission.emailId}</td>
                          <td>{admission.admissionStatus}</td>
                          <td>{admission.year}</td>
                          <i style={{marginLeft:"10px",color:"blue"}}
                    onClick = { () => this.getAdmissionId(admission.admissionId)} className="fa fa-eye"/>
                    <i style={{marginLeft:"10px",color:"blue"}}
                    onClick = { () => this.deleteAdmissionById(admission.admissionId)} className="fa fa-trash"/>
                    <i style={{marginLeft:"10px",color:"blue"}}
                    onClick = { () => this.updateAdmission(admission.admissionId)} className="fa fa-edit"/>

                          </tr>

                  )
                  }
              </tbody>
              </table>
              <button className="btn btn-info size-lg" onClick={this.goback.bind(this)}><i className="fa fa-arrow-left "></i></button>
              </div>
              </div>
    )}}


export default Admission;