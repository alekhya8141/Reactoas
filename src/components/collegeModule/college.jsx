import React, { Component } from 'react'
import CollegeService from '../../service/collegeService'

class College  extends Component{
    constructor(props){
        super(props)

        this.state={
           collegeRegId: this.props.match.params.collegeRegId,
           college:[]
        }
        this.addCollege=this.addCollege.bind(this);
        this.updateCollegeName=this.updateCollegeName.bind(this);
        this.deleteCollegeByCollegeRegId=this.deleteCollegeByCollegeRegId.bind(this);
    }

    componentDidMount(){
        CollegeService.getAllCollege().then((res)=>{
            this.setState({college:res.data});
        });
    }
    addCollege(){
        this.props.history.push('/add-college');
    }
    updateCollegeName(collegeRegId){
        this.props.history.push(`/update-college/${collegeRegId}`)
    }
    deleteCollegeByCollegeRegId(collegeRegId){
        CollegeService.deleteCollegeByCollegeRegId(collegeRegId).then(res => {
            this.setState({college:this.state.college.filter(college => college.collegeRegId !== collegeRegId)});
          });
    }
    getCollegeByCollegeRegId(collegeRegId){
        this.props.history.push(`/getCollege-collegeRegId/${collegeRegId}`);
      }
    goback(){
        this.props.history.push('/ahome');
    }
render(){
    return(
        <div>
            <br></br>
           <h2 className="text-center">College List</h2>
              <div className="row">
              <button type="button" class="btn btn-sm btn-info" class="btn btn-sm btn-info" onClick={this.addCollege}>Add College</button></div>
              <div className="row">
                 <table className="table mt-2">
                    <thead className="table-light">
                        <tr>
                           <th>collegeRegId</th>
                           <th>collegeName</th>
                           <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.college.map(
                            colleges =>
                            <tr key={colleges.collegeRegId}>
                                <td>{colleges.collegeRegId}</td>
                                <td>{colleges.collegeName}</td>
                                
                                <td>
                                <button onClick= {() => this.updateCollegeName(colleges.collegeRegId)} className="btn btn-info" >Update</button>
                                <button onClick= {() => this.deleteCollegeByCollegeRegId(colleges.collegeRegId)} className="btn btn-danger ml-2">Delete</button>
                                <button onClick= {() => this.getCollegeByCollegeRegId(colleges.collegeRegId)} className="btn btn-info ml-2">View</button>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
            <button className="btn btn-info size-lg" onClick={this.goback.bind(this)}><i className="fa fa-arrow-left "></i></button>
        </div>
    )
}
}

export default College