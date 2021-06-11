import React, { Component } from 'react';
import DocumentService from '../../services/DocumentService';


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
                <h3 className ="text-center"> getDocumentId</h3>
                <div className="card bg-info text-dark">
                <div className ="card-body">
                <h1>{this.props.match.params.documentid}</h1>
                    <div className ="row">
                        <label><b>documentid: </b></label>
                        <div>{this.state.document.documentid}</div>
                    </div>
                    <div className ="row">
                        <label><b>documentName:</b> </label>
                        <div>{this.state.document.documentName}</div>
                    </div>
                    <div className ="row">
                        <label><b>documentUrl: </b></label>
                        <div>{this.state.document.documentUrl}</div>
                    </div>
                    <div className ="row">
                        <label><b>applicantid: </b></label>
                        <div>{this.state.document.applicantid}</div>
                    </div>
                    <div className ="row">
                        <label><b>emailid: </b></label>
                        <div>{this.state.document.applicantid}</div>
                    </div>
                    <div className ="row">
                        <label><b>documentStatus: </b></label>
                        <div>{this.state.document.documentStatus}</div>
                    </div>
                        
                </div>

                </div>
            </div>
         )
    }
}
 
export default getDocumentId;