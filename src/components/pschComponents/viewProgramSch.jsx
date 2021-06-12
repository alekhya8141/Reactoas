import React, { Component } from 'react';
import ProgramSchService from "../../services/programSchService";

class ViewProgramSch extends Component {
    constructor(props){
        super(props)
        this.state={
            scheduleId: this.props.match.params.scheduleId,
            programSch:{}
        }
    }
    componentDidMount(){
        ProgramSchService.getProgramByScheduleId(this.state.scheduleId).then( res =>{
            this.setState({programSch: res.data});
        })
    }
    render() { 
        return ( 
            <div className="card bg-light col-md-6 offset-md-3" style={{marginBottom:"100px", marginTop:"50px"}}>
                <h3 className ="text-center">Schedule Details</h3>
                <div className="card-body">
                <h1>{this.props.match.params.scheduleId}</h1>
                    <div className ="row">
                        <label>Start Date: </label>
                        <div>  {this.state.programSch.startDate}</div>
                    </div>
                    <div className ="row">
                        <label>End Date:</label>
                        <div>  {this.state.programSch.endDate}</div>
                    </div>
                    <div className ="row">
                        <label>Schedule: </label>
                        <div>  {this.state.programSch.programSchedule}</div>
                    </div> 
                </div>
                </div>
         )
    }
} 
export default ViewProgramSch;