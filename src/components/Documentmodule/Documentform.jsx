import React,{ Component } from 'react'
import DocumentService from '../../service/DocumentService'
import Joi from "joi-browser";

  
class Documentform extends Component{
    constructor(props){
        super(props)

        this.state={
            documentid:'',
            documentName :'',
            documentUrl:'',
            applicantid:'',
            emailid:'',
            documentStatus:'',
        }
        this.changedocumentidHandler=this.changedocumentidHandler.bind(this);
        this.changedocumentNameHandler=this.changedocumentNameHandler.bind(this);
        this.changedocumentUrlHandler=this.changedocumentUrlHandler.bind(this);
        this.changeapplicantidHandler=this.changeapplicantidHandler.bind(this);
        this.changeemailidHandler=this.changeemailidHandler.bind(this);
    }
    schema = {
        documentName :Joi.string().min(3).max(10).required(),
        documentUrl:Joi.string().min(1).max(10).required(),
        applicantid:Joi.string().email().required(),
        emailid: Joi.string().min(8).max(15).alphanum().required(),
      };
      validate = () => {
        const errors = {};
        const result = Joi.validate(this.state,this.schema, {
          abortEarly: false,allowUnknown:true,
        });
        
        if (result.error !== null) {
         
          for (let err of result.error.details) {
            errors[err.path[0]] = err.message;
          }
        }
      
        return Object.keys(errors).length === 0 ? null : errors;
      };
      handleOnSubmit = async (e) => {
        e.preventDefault();
        const errors = this.validate()
       this.setState({ errors: errors || {} });
        if (errors) return;
        
        let user = {
            documentName: this.state.documentName,
            documentUrl: this.state.documentUrl,
            applicantid: this.state.applicantid,
            emailid: this.state.emailid,
        };
      
        console.log("user => " + JSON.stringify(user));
    
    }
    changedocumentidHandler =(event) =>{
        this.setState({documentid:event.target.value});
    }
    changedocumentNameHandler= (event) => {
        this.setState({documentName:event.target.value});
    }
    changedocumentUrlHandler =(event) => {
        this.setState({documentUrl:event.target.value});
    }
    changeapplicantidHandler =(event) => {
        this.setState({applicantid:event.target.value});
    }
    changeemailidHandler =(event) => {
        this.setState({emailid:event.target.value});

};
    Back(){
        this.props.history.push('/addressForm');
    }
render(){
    return(
        <div>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">DocumentForm</h3>
                          <div className = "card-body">
                              <form>
                                  <div className="form-group">
                                      <label>DocumentName</label>
                                      <input placeholder="DocumentName" name="documentName" required ="documentName" className="form-control" value={this.state.documentName} onChange={this.changedocumentNameHandler}/>
                                      {this.state.errors && (
                        <small id="documentName" className="form-text text-danger">
                           {this.state.errors.documentName}
                            </small>
                            )}
                                  </div>
                                  <div className="form-group">
                                      <label>DocumentUrl</label>
                                      <input placeholder="DocumentUrl" name="documentUrl" className="form-control" value={this.state.documentUrl} onChange={this.changedocumentUrlHandler}/>
                                      {this.state.errors && (
                        <small id="documentUrl" className="form-text text-danger">
                           {this.state.errors.documentUrl}
                            </small>
                                      )}
                                  </div>
                                  <div className="form-group">
                                      <label>ApplicantId</label>
                                      <input placeholder="ApplicantId" name="applicantid" className="form-control" value={this.state.applicantid} onChange={this.changeapplicantidHandler}/>
                                      {this.state.errors && (
                        <small id="applicantid" className="form-text text-danger">
                           {this.state.errors.applicantid}
                            </small>
                                      )}
                                  </div>
                                  <div className="form-group">
                                      <label>EmailId</label>
                                      <input placeholder="EmailId" name="emailid" className="form-control" value={this.state.emailid} onChange={this.changeemailidHandler}/>
                                      {this.state.errors && (
                        <small id="emailid" className="form-text text-danger">
                           {this.state.errors.emailid}
                            </small>
                                      )}
                                  </div>
                                  <button className="btn btn-primary float-left"  onClick={this.Back.bind(this)} style={{marginLeft:"10px"}}>Back</button>
                                  <button className="btn btn-success float-right" onClick={this.saveDocument}>Next</button>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default Documentform