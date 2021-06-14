import React, { Component } from 'react';
import AdmissionService from '../../service/AdmissionService';


class getAdmissionId extends Component {
    constructor(props){
        super(props)
        this.state={
            admissionId: this.props.match.params.admissionId,
            admission:{}
        }
    }

    componentDidMount(){
        AdmissionService.getAdmissionId(this.state.admissionId).then( res =>{
            this.setState({admission: res.data});
        })
    }
    render() { 
        return ( 
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center">View Admission</h3>
                <div className ="card-body">
                <h1>{this.props.match.params.admissionId}</h1>
                    <div className ="row">
                        <label><b>AdmissionId: </b></label>
                        <div>{this.state.admission.admissionId}</div>
                    </div>
                    <div className ="row">
                        <label><b>EmailId:</b> </label>
                        <div>{this.state.admission.emailId}</div>
                    </div>
                    <div className ="row">
                        <label><b>AdmissionStatus: </b></label>
                        <div>{this.state.admission.admissionStatus}</div>
                    </div>
                    <div className ="row">
                        <label><b>Year: </b></label>
                        <div>{this.state.admission.year}</div>
                    </div>  
                </div>
                </div>
         )
    }
}
 
export default getAdmissionId;