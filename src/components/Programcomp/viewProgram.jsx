import React, { Component } from 'react';
import ProgramService from "../../service/programService";

class ViewProgram extends Component {
    constructor(props){
        super(props)
        this.state={
            programId: this.props.match.params.programId,
            program:{}
        }
    }
    componentDidMount(){
        ProgramService.getProgramById(this.state.programId).then( res =>{
            this.setState({program: res.data});
        })
    }
    render() { 
        return ( 
            <div className="card bg-light col-md-6 offset-md-3" style={{marginBottom:"50px", marginTop:"50px"}}>
                <h3 className ="text-center">Program Details</h3>
                <h1>{this.props.match.params.programId}</h1>
                <div className="card-body">
                    <div className ="rowd">
                        <label>Program Name: </label>
                        <div>  {this.state.program.programName}</div>
                    </div>
                    <div className ="rowd">
                        <label>Program Duration: </label>
                        <div>  {this.state.program.programDuration}</div>
                    </div>
                    <div className ="rowd">
                        <label>Degree Offered:</label>
                        <div>  {this.state.program.degreeOffered}</div>
                    </div>
                    <div className ="rowd">
                        <label>Program Description:</label>
                        <div>  {this.state.program.programDescription}</div>
                    </div>
                    <div className ="rowd">
                        <label>Program Eligibility:</label>
                        <div>  {this.state.program.programEligibility}</div>
                    </div>
                    <div className ="rowd">
                        <label>Program Status: </label>
                        <div>  {this.state.program.programStatus}</div>
                    </div>    
               </div>
               </div>
      )
    }
}
 
export default ViewProgram;
