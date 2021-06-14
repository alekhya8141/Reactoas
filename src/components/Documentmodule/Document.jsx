import React, {Component} from 'react';
import DocumentService from'../../service/DocumentService';

class Document extends Component
{
     constructor(props)
     {
         super(props)
         this.state={
             document: []
         }
         this.addDocument =this.addDocument.bind(this);
         this.updateDocument=this.updateDocument.bind(this);
         
     }
     componentDidMount(){
        DocumentService.getDocument().then((res)=>{
        this.setState({document: res.data});
        
    });
    }

addDocument(){
  this.props.history.push('/add-document');
}
updateDocument(documentid){
    this.props.history.push(`/update-document/${documentid}`);
  }
deleteDocumentById = (documentid) => {
    console.log("Delete Document with id: " + documentid);
    const document = this.state.document.filter(
      (document) => document.documentid !== documentid
    );
    this.setState({ document });
    DocumentService.deleteDocumentById (documentid);
  };
  getDocumentId(documentid){
    this.props.history.push(`/get-documentid/${documentid}`);
  }
  goback(){
    this.props.history.push('/ahome');
}
    render() {
        return (
          <div>
            <h2 classname="text-center">Document</h2>
            <div className="row">
            <button type="button" class="btn btn-sm btn-info" onClick={this.addDocument}>Add Document</button>
            <table className="table table-mt-6">
              <thead>
                <tr>
                  <th>Documentid</th>
                  <th>DocumentName</th>
                  <th>DocumentUrl</th>
                  <th>Applicantid</th>
                  <th>Emailid</th>
                  <th>DocumentStatus</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                      this.state.document.map(
                          document =>
                          <tr key={document.documentid}>
                              <td>{document.documentid}</td>
                              <td>{document.documentName}</td>
                              <td>{document.documentUrl}</td>
                              <td>{document.applicantid}</td>
                              <td>{document.emailid}</td>
                              <td>{document.documentStatus}</td>
                              <td>
                              <i style={{marginLeft:"10px",color:"blue"}}
                    onClick = { () => this.getDocumentId(document.documentid)} className="fa fa-eye"/>
                    <i style={{marginLeft:"10px",color:"blue"}}
                    onClick = { () => this.deleteDocumentById(document.documentid)} className="fa fa-trash"/>
                    <i style={{marginLeft:"10px",color:"blue"}}
                    onClick = { () => this.updateDocument(document.documentid)} className="fa fa-edit"/>
                              </td>

                              </tr>

                      )
                      }
                  </tbody>
                  </table>
                  <button className="btn btn-info size-lg" onClick={this.goback.bind(this)}><i className="fa fa-arrow-left "></i></button>
                  </div>
                  </div>
                  
        )}}

export default Document;