import React, { Component } from "react"
import ProgramService from "../../service/programService";

class Program extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programs: [],
        }

        this.addProgram = this.addProgram.bind(this);
        this.deleteProgram = this.deleteProgram.bind(this);
        this.viewProgram = this.viewProgram.bind(this);
        this.updateProgram = this.updateProgram.bind(this);

    }
    addProgram() {
        this.props.history.push('/add-program');
    }


    viewProgram(programId) {
        this.props.history.push(`/view-programs/${programId}`);
    }

    updateProgram(programId) {
        this.props.history.push(`/update-programs/${programId}`);
    }

    deleteProgram(programId) {
        ProgramService.deleteProgram(programId).then(res => {
            this.setState({ programs: this.state.programs.filter(program => program.programId !== programId) });
        });
    }
    componentDidMount() {
        ProgramService.getAllPrograms().then((res) => {
            this.setState({ programs: res.data });
        });
    }
    goback() {
        this.props.history.push('/ahome');
    }

    render() {
        return (
            <div>
                <h3 className="text-center">Program List</h3>
                <div className="row">
                    <button style={{ marginBottom: "10px", marginLeft: "140px", cursor: "pointer" }} className="btn btn-info" onClick={this.addProgram}>Add Program</button>
                </div>
                <div className="row">
                    <table className="table table-sm table-hover table-bordered bg-light" style={{ marginLeft: "140px", width: "80%" }}>
                        <thead className="thead-dark">
                            <tr>
                                <th>Program Id</th>
                                <th>Program Name</th>
                                <th>Duration</th>
                                <th>Degree Offered</th>
                                <th>Program Description</th>
                                <th>Program Eligibility</th>
                                <th>Program Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.programs.map(
                                    program =>
                                        <tr key={program.programId}>
                                            <td> {program.programId}</td>
                                            <td> {program.programName}</td>
                                            <td> {program.programDuration}</td>
                                            <td> {program.degreeOffered}</td>
                                            <td> {program.programDescription}</td>
                                            <td> {program.programEligibility}</td>
                                            <td> {program.programStatus}</td>
                                            <td>
                                                <button style={{ marginLeft: "5px" }} onClick={() => this.viewProgram(program.programId)} className="btn btn-primary"><i class="far fa-eye"></i></button>
                                                <button style={{ marginLeft: "5px" }} onClick={() => this.updateProgram(program.programId)} className="btn btn-secondary"><i class="far fa-edit"></i></button>
                                                <button style={{ marginLeft: "5px" }} onClick={() => this.deleteProgram(program.programId)} className="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-info size-lg" style={{ marginLeft: "125px" }} onClick={this.goback.bind(this)}><i className="fa fa-arrow-left "></i></button>
            </div>
        )
    }
}
export default Program;
