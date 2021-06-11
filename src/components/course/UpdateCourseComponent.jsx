import React, { Component } from 'react'
import CourseService from '../../service/CourseService';

class UpdateCourseComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            courseId:this.props.match.params.courseId,
            courseName :'',
            description:'',
            eligibility:''
        }
        this.changeCourseNameHandler=this.changeCourseNameHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changeEligibilityHandler=this.changeEligibilityHandler.bind(this);
        this.updateCourse=this.updateCourse.bind(this);
    }
    componentDidMount(){
        CourseService.getCourseById(this.state.courseId).then((res) =>{
            let course = res.data;
            this.setState({courseId:course.courseId,courseName:course.courseName,
                description:course.description,
                eligibility:course.eligibility
            });
        });
    }
    updateCourse= (e) =>{
        e.preventDefault();
        let course ={courseId:this.state.courseId,courseName:this.state.courseName,description:this.state.description,eligibility:this.state.eligibility};
        console.log('course => '+ JSON.stringify(course));
        CourseService.updateCourse(this.state.courseId,course).then(res =>{
            this.props.history.push(`/course`);
        });
    }
    changeCourseIdHandler =(event) =>{
        this.setState({courseId:event.target.value});
    }
    changeCourseNameHandler= (event) => {
        this.setState({courseName:event.target.value});
    }
    changeDescriptionHandler =(event) => {
        this.setState({description:event.target.value});
    }
    changeEligibilityHandler =(event) => {
        this.setState({eligibility:event.target.value});
    }
    cancel(){
        this.props.history.push('/course');
    }
render(){
    return(
        <div>
            <br></br>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Update Course</h3>
                          <div className = "card-body">
                              <form>
                                  <h3>{this.props.match.params.courseId}</h3>
                                  <div className="form-group">
                                      <label>CourseId</label>
                                      <input placeholder="CourseId" name="courseID" className="form-control" value={this.state.courseId} onChange={this.changeCourseIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>CourseName</label>
                                      <input placeholder="CourseName" name="courseName" className="form-control" value={this.state.courseName} onChange={this.changeCourseNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>CourseDescription</label>
                                      <input placeholder="CourseDescription" name="courseDescription" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>CourseEligibility</label>
                                      <input placeholder="CourseEligibility" name="courseEligibility" className="form-control" value={this.state.eligibility} onChange={this.changeEligibilityHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.updateCourse}>Update</button>
                                  <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default UpdateCourseComponent