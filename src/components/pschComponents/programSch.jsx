import React, { Component } from "react"
import ProgramSchService from "../../services/programSchService";

class ProgramSch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            programSch: [],
        }
        this.addProgramSchedule = this.addProgramSchedule.bind(this);
        this.deleteProgramSchedule = this.deleteProgramSchedule.bind(this);
        this.viewProgramSchedule = this.viewProgramSchedule.bind(this);
        this.updateProgramSchedule = this.updateProgramSchedule.bind(this);
    }
    addProgramSchedule() {
        this.props.history.push('/add-programsch');
    }
    viewProgramSchedule(scheduleId) {
        this.props.history.push(`/view-programsch/${scheduleId}`);
    }

    updateProgramSchedule(scheduleId) {
        this.props.history.push(`/update-programsch/${scheduleId}`);
    }

    deleteProgramSchedule(scheduleId) {
        ProgramSchService.deleteProgramSchedule(scheduleId).then(res => {
            this.setState({ programSch: this.state.programSch.filter(pgmsch => pgmsch.scheduleId !== scheduleId) });
        });
    }
    componentDidMount() {
        ProgramSchService.getAllProgramSchedule().then((res) => {
            this.setState({ programSch: res.data });
        });
    }
    goback() {
        this.props.history.push('/ahome');
    }
    render() {
        return (
            <div>
                <h3 className="text-center">Program Schedule List</h3>
                <div className="row">
                    <button style={{ marginBottom: "10px", marginLeft: "140px", cursor: "pointer" }} className="btn btn-info" onClick={this.addProgramSchedule}>Add Schedule</button>
                </div>

                <div className="row">
                    <table className="table table-sm table-hover table-bordered" style={{ marginLeft: "140px", width: "80%" }}>
                        <thead className="thead-dark">
                            <tr>
                                <th>Schedule Id</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Program Schedule</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.programSch.map(
                                    programSchs =>
                                        <tr key={programSchs.scheduleId}>
                                            <td> {programSchs.scheduleId}</td>
                                            <td> {programSchs.startDate}</td>
                                            <td> {programSchs.startDate}</td>
                                            <td> {programSchs.programSchedule}</td>
                                            <td>
                                                <button style={{ marginLeft: "5px" }} onClick={() => this.viewProgramSchedule(programSchs.scheduleId)} className="btn btn-primary"><i class="far fa-eye"></i></button>
                                                <button style={{ marginLeft: "5px" }} onClick={() => this.updateProgramSchedule(programSchs.scheduleId)} className="btn btn-secondary"><i class="far fa-edit"></i></button>
                                                <button style={{ marginLeft: "5px" }} onClick={() => this.deleteProgramSchedule(programSchs.scheduleId)} className="btn btn-danger"><i class="far fa-trash-alt"></i></button>
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
export default ProgramSch;
