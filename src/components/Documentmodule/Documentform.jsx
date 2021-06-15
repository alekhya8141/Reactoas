import React,{ Component } from 'react'
import DocumentService from '../../service/DocumentService'
import HeaderLogout from "../headerLogout";
import Footer from "../Footer";
import "../homeform.css"
  
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
        this.saveDocument=this.saveDocument.bind(this);
    }
    saveDocument= (e) =>{
        e.preventDefault();
        let document ={documentid:this.state.documentid,documentName:this.state.documentName,documentUrl:this.state.documentUrl,applicantid:this.state.applicantid,emailid:this.state.emailid};
        console.log('document => '+JSON.stringify(document));

        DocumentService.CreateDocument(document).then(res => {
           this.props.history.push(`/paymentform`);
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
    Back(){
        this.props.history.push('/addressForm');
    }
render(){
    return(
        <div class="homeform">
            <HeaderLogout/>
            <div className = "container-md" style={{ marginBottom: "50px", marginTop: "50px" }}>
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">DocumentForm</h3>
                          <div className = "card-body">
                              <form>
                                  <div className="form-group text-left">
                                      <label>DocumentName:</label>
                                      <input placeholder="DocumentName" name="documentName" className="form-control" value={this.state.documentName} onChange={this.changedocumentNameHandler}/>
                                  </div>
                                  <div className="form-group text-left">
                                      <label>DocumentUrl:</label>
                                      <input placeholder="DocumentUrl" name="documentUrl" className="form-control" value={this.state.documentUrl} onChange={this.changedocumentUrlHandler}/>
                                  </div>
                                  <div className="form-group text-left">
                                      <label>ApplicantId:</label>
                                      <input placeholder="ApplicantId" name="applicantid" className="form-control" value={this.state.applicantid} onChange={this.changeapplicantidHandler}/>
                                  </div>
                                  <div className="form-group text-left">
                                      <label>EmailId:</label>
                                      <input placeholder="EmailId" name="emailid" className="form-control" value={this.state.emailid} onChange={this.changeemailidHandler}/>
                                  </div>
                                  <button className="btn btn-primary float-left"  onClick={this.Back.bind(this)} style={{marginLeft:"10px"}}>Back</button>
                                  <button className="btn btn-success float-right" onClick={this.saveDocument}>Next</button>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
}
export default Documentform