import React, { Component } from 'react'
import UniversityService from '../../service/universityService'

class University  extends Component{
    constructor(props){
        super(props)

        this.state={
           universityId: this.props.match.params.universityId,
           university:[]
        }
        this.addUniversity=this.addUniversity.bind(this);
        this.updateUniversity=this.updateUniversity.bind(this);
        this.deleteUniversityById=this.deleteUniversityById.bind(this);
    }

    componentDidMount(){
        UniversityService.getAllUniversity().then((res)=>{
            this.setState({university:res.data});
        });
    }
    addUniversity(){
        this.props.history.push('/add-university');
    }
    updateUniversity(universityId){
        this.props.history.push(`/update-university/${universityId}`)
    }
    deleteUniversityById(universityId){
        UniversityService.deleteUniversityById(universityId).then(res => {
            this.setState({university:this.state.university.filter(university => university.universityId !== universityId)});
          });
    }
    view(universityId){
            this.props.history.push(`view-University/${universityId}`)
    }
render(){
    return(
        <div>
            <br></br>
           <h2 className="text-center">University List</h2>
              <div className="row">
              <button type="button" class="btn btn-sm btn-info" class="btn btn-sm btn-info" onClick={this.addUniversity}>Add University</button></div>
              <div className="row">
                 <table className="table mt-2">
                    <thead className="table-light">
                        <tr>
                           <th>University Id</th>
                           <th>name</th>
                           
                           <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.university.map(
                            universities =>
                            <tr key={universities.universityId}>
                                <td>{universities.universityId}</td>
                                <td>{universities.name}</td>
                                
                                <td>
                                <button onClick= {() => this.updateUniversity(universities.universityId)} className="btn btn-info" >Update</button>
                                <button onClick= {() => this.deleteUniversityById(universities.universityId)} className="btn btn-danger ml-2">Delete</button>
                                <button onClick= {() => this.view(universities.universityId)} className="btn btn-info ml-2">View</button>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
}

export default University