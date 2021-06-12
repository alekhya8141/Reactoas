import React, { Component } from 'react';
import ProgramSchService from "../../services/programSchService";
class CreateProgramSch extends Component {
    constructor(props){
        super(props)
        this.state = {
            scheduleId:'',
	        startDate:'',
	        endDate:'',
	        programSchedule:'',
        }
        this.changeStartDateHandler=this.changeStartDateHandler.bind(this);
        this.changeEndDateHandler=this.changeEndDateHandler.bind(this);
        this.changeProgramScheduleHandler=this.changeProgramScheduleHandler.bind(this);
        this.saveProgramSchedule=this.saveProgramSchedule.bind(this);
        this.changeScheduleIdHandler=this.changeScheduleIdHandler.bind(this);
    }

    saveProgramSchedule = (e) => {
        e.preventDefault();
        let programSch={
            scheduleId:this.state.scheduleId,
            startDate:this.state.startDate,
            endDate:this.state.endDate,
            programSchedule:this.state.programSchedule};
        console.log('programSch => '+ JSON.stringify(programSch));
        ProgramSchService.createProgramSch(programSch).then(res => {
            this.props.history.push(`/programscheduled`);
        });
    }
    changeScheduleIdHandler=(event) =>{
        this.setState({scheduleId: event.target.value})
    }

    changeStartDateHandler=(event) =>{
        this.setState({startDate: event.target.value})
    }

    changeEndDateHandler=(event) =>{
        this.setState({endDate: event.target.value})
    }

    changeProgramScheduleHandler=(event) =>{
        this.setState({programSchedule: event.target.value})
    }
    cancel(){
        this.props.history.push('/programscheduled');
    }
    render() { 
        return (  
            <div>
                <div className="container" style={{marginBottom:"50px", marginTop:"50px"}}>
                    <div className="row">
                        <div className="card border-dark col-md-6 offset-md-3 offset-md-3 bg-light">
                            <h3 className="text-center">Add Program</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group text-left">
                                        <label>Schedule Id:</label>
                                        <input placeholder="Id" name="ScheduleId" className="form-control" value={this.state.scheduleId} onChange={this.changeScheduleIdHandler}/>
                                </div>
                                    <div className="form-group text-left">
                                        <label>Start Date:(format:YYYY/MM/DD)</label>
                                        <input placeholder="Start Date" name="date" className="form-control" value={this.state.startDate} onChange={this.changeStartDateHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>End Date:(format:YYYY/MM/DD)</label>
                                        <input placeholder="End date" name="date" className="form-control" value={this.state.endDate} onChange={this.changeEndDateHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Schedule:</label>
                                        <input placeholder="schedule" name="schedule" className="form-control" value={this.state.programSchedule} onChange={this.changeProgramScheduleHandler}/>
                                    </div>
                                    <button className="btn btn-danger float-right" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    <button className="btn btn-primary float-right"  onClick={this.saveProgramSchedule}> Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 
export default CreateProgramSch;