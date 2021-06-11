import React,{ Component } from 'react'
import DocumentService from '../../services/DocumentService';
  
class CreateDocument extends Component{
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
        this.changedocumentStatusHandler=this.changedocumentStatusHandler.bind(this);
        this.saveDocument=this.saveDocument.bind(this);
    }
    saveDocument= (e) =>{
        e.preventDefault();
        let document ={documentid:this.state.documentid,documentName:this.state.documentName,documentUrl:this.state.documentUrl,applicantid:this.state.applicantid,emailid:this.state.emailid,documentStatus:this.state.documentStatus};
        console.log('document => '+JSON.stringify(document));

        DocumentService.CreateDocument(document).then(res => {
           this.props.history.push(`/document`);
        });
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
    }
    changedocumentStatusHandler =(event) => {
        this.setState({documentStatus:event.target.value});
    }
    cancel(){
        this.props.history.push('/document');
    }
render(){
    return(
        <div>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Add Document</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>documentid</label>
                                      <input placeholder="documentid" name="documentid" className="form-control" value={this.state.documentid} onChange={this.changedocumentidHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>documentName</label>
                                      <input placeholder="documentName" name="documentName" className="form-control" value={this.state.documentName} onChange={this.changedocumentNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>documentUrl</label>
                                      <input placeholder="documentUrl" name="documentUrl" className="form-control" value={this.state.documentUrl} onChange={this.changedocumentUrlHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>applicantid</label>
                                      <input placeholder="applicantid" name="applicantid" className="form-control" value={this.state.applicantid} onChange={this.changeapplicantidHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>emailid</label>
                                      <input placeholder="emailid" name="emailid" className="form-control" value={this.state.emailid} onChange={this.changeemailidHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>documentStatus</label>
                                      <input placeholder="documentStatus" name="documentStatus" className="form-control" value={this.state.documentStatus} onChange={this.changedocumentStatusHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.saveDocument}>Save</button>
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
export default CreateDocument