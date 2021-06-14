import React, { Component } from 'react';
import DocumentService from '../../service/DocumentService';


class getDocumentId extends Component {
    constructor(props){
        super(props)
        this.state={
            documentid: this.props.match.params.documentid,
            document:{}
        }
    }

    componentDidMount(){
        DocumentService.getDocumentId(this.state.documentid).then( res =>{
            this.setState({document: res.data});
        })
    }
    render() { 
        return ( 
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center">View Document</h3>
                <div className ="card-body">
                <h1>{this.props.match.params.documentid}</h1>
                    <div className ="row">
                        <label><b>Documentid: </b></label>
                        <div>{this.state.document.documentid}</div>
                    </div>
                    <div className ="row">
                        <label><b>DocumentName:</b> </label>
                        <div>{this.state.document.documentName}</div>
                    </div>
                    <div className ="row">
                        <label><b>DocumentUrl: </b></label>
                        <div>{this.state.document.documentUrl}</div>
                    </div>
                    <div className ="row">
                        <label><b>Applicantid: </b></label>
                        <div>{this.state.document.applicantid}</div>
                    </div>
                    <div className ="row">
                        <label><b>Emailid: </b></label>
                        <div>{this.state.document.applicantid}</div>
                    </div>
                    <div className ="row">
                        <label><b>DocumentStatus: </b></label>
                        <div>{this.state.document.documentStatus}</div>
                    </div>  
                </div>
                </div>
         )
    }
}
 
export default getDocumentId;