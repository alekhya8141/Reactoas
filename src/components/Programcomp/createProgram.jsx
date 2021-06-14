import React, { Component } from 'react';
import ProgramService from "../../service/programService";
class CreateProgram extends Component {
    constructor(props){
        super(props)
        this.state = {
            programName:'',
            programDuration:'',
            degreeOffered:'',
            programDescription:'',
            programEligibility:'',
            programStatus:'',
        }
        this.changeProgramNameHandler=this.changeProgramNameHandler.bind(this);
        this.changeProgramDurationHandler=this.changeProgramDurationHandler.bind(this);
        this.changeDegreeOfferedHandler=this.changeDegreeOfferedHandler.bind(this);
        this.changeProgramDescriptionHandler=this.changeProgramDescriptionHandler.bind(this);
        this.changeProgramEligibilityHandler=this.changeProgramEligibilityHandler.bind(this);
        this.changeProgramStatusHandler=this.changeProgramStatusHandler.bind(this);
        this.saveProgram=this.saveProgram.bind(this);
        this.changeProgramIdHandler=this.changeProgramIdHandler.bind(this);
    }

    saveProgram = (e) => {
        e.preventDefault();
        let program={programId:this.state.programId,programName: this.state.programName,programDuration: this.state.programDuration,degreeOffered: this.state.degreeOffered,programDescription: this.state.programDescription,programEligibility: this.state.programEligibility,programStatus: this.state.programStatus};
        console.log('program => '+ JSON.stringify(program));

        ProgramService.createProgram(program).then(res => {
            this.props.history.push(`/programs`);
        });

    }

    changeProgramIdHandler=(event) =>{
        this.setState({programId: event.target.value})
    }

    changeProgramNameHandler=(event) =>{
        this.setState({programName: event.target.value})
    }

    changeProgramDurationHandler=(event) =>{
        this.setState({programDuration: event.target.value})
    }

    changeDegreeOfferedHandler=(event) =>{
        this.setState({degreeOffered: event.target.value})
    }

    changeProgramDescriptionHandler=(event) =>{
        this.setState({programDescription: event.target.value})
    }
    changeProgramEligibilityHandler=(event) =>{
        this.setState({programEligibility: event.target.value})
    }
    changeProgramStatusHandler=(event) =>{
        this.setState({programStatus: event.target.value})
    }
    cancel(){
        this.props.history.push('/programs');
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
                                        <label>Program Id:</label>
                                        <input placeholder="Id" name="ProgramId" className="form-control" value={this.state.programId} onChange={this.changeProgramIdHandler}/>
                                </div>
                                    <div className="form-group text-left">
                                        <label>Program Name:</label>
                                        <input placeholder="Program Name" name="program name" className="form-control" value={this.state.programName} onChange={this.changeProgramNameHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Duration:</label>
                                        <input placeholder="Program Duration" name="Duration" className="form-control" value={this.state.programDuration} onChange={this.changeProgramDurationHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Degree Offered:</label>
                                        <input placeholder="Degree Offered" name="Degree" className="form-control" value={this.state.degreeOffered} onChange={this.changeDegreeOfferedHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Description:</label>
                                        <input placeholder="Description" name="Description" className="form-control" value={this.state.programDescription} onChange={this.changeProgramDescriptionHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Eligibility:</label>
                                        <input placeholder="Eligibillity" name="Eligible" className="form-control" value={this.state.programEligibility} onChange={this.changeProgramEligibilityHandler}/>
                                    </div>
                                    <div className="form-group text-left">
                                        <label>Program Status:</label>
                                        <input placeholder="Status" name="Status" className="form-control" value={this.state.programStatus} onChange={this.changeProgramStatusHandler}/>
                                    </div>
                                    <button className="btn btn-danger float-right" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    <button className="btn btn-primary float-right" onClick={this.saveProgram}> Save</button>
                                    
                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
} 
export default CreateProgram;