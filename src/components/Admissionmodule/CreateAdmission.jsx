import React,{ Component } from 'react'
import AdmissionService from '../../services/AdmissionService';
  
class CreateAdmission extends Component{
    constructor(props){
        super(props)

        this.state={
            admissionId:'',
            emailId :'',
            admissionStatus:'',
            year:'',
        }
        this.changeadmissionIdHandler=this.changeadmissionIdHandler.bind(this);
        this.changeemailIdHandler=this.changeemailIdHandler.bind(this);
        this.changeadmissionStatusHandler=this.changeadmissionStatusHandler.bind(this);
        this.changeyearHandler=this.changeyearHandler.bind(this);
        this.saveAdmission=this.saveAdmission.bind(this);
    }
    saveAdmission= (e) =>{
        e.preventDefault();
        let admission ={admissionId:this.state.admissionId,emailId:this.state.emailId,admissionStatus:this.state.admissionStatus, year:this.state. year};
        console.log('admission => '+JSON.stringify(admission));

        AdmissionService.CreateAdmission(admission).then(res => {
           this.props.history.push(`/admission`);
        });
    }
    changeadmissionIdHandler =(event) =>{
        this.setState({admissionId:event.target.value});
    }
    changeemailIdHandler= (event) => {
        this.setState({emailId:event.target.value});
    }
    changeadmissionStatusHandler =(event) => {
        this.setState({admissionStatus:event.target.value});
    }
    changeyearHandler =(event) => {
        this.setState({year:event.target.value});
    }
    cancel(){
        this.props.history.push('/Admission');
    }
render(){
    return(
        <div>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Add Admission</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>admissionId</label>
                                      <input placeholder="admissionId" name="admissionId" className="form-control" value={this.state.admissionId} onChange={this.changeadmissionIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>emailId</label>
                                      <input placeholder="emailId" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeemailIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>admissionStatus</label>
                                      <input placeholder="admissionStatus" name="admissionStatus" className="form-control" value={this.state.admissionStatus} onChange={this.changeadmissionStatusHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label> year</label>
                                      <input placeholder=" year" name=" year" className="form-control" value={this.state. year} onChange={this.changeyearHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.saveAdmission}>Save</button>
                                  <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default CreateAdmission