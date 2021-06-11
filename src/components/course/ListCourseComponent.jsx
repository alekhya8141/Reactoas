import React,{ Component } from 'react'
import CourseService from '../../service/CourseService'
  
class ListCourseComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            course:[]
        }
        this.addCourse =this.addCourse.bind(this);
        this.editCourse=this.editCourse.bind(this);
        this.deleteCourse=this.deleteCourse.bind(this);
    }
    componentDidMount(){
        CourseService.getAllCourse().then((res)=>{
            this.setState({course:res.data});
        });
    }
    addCourse(){
        this.props.history.push('/add-course');
    }
    editCourse(courseId){
        this.props.history.push(`/update-course/${courseId}`)
    }
    deleteCourse(courseId){
        CourseService.deleteCourse(courseId).then(res => {
            this.setState({course:this.state.course.filter(course => course.courseId !== courseId)});
        });
    }
    viewCourse(courseId){
        this.props.history.push(`view-Course/${courseId}`)
    }
    goback(){
        this.props.history.push('/ahome');
    }
    render(){
        return(
            <div className = "container-md">
              <br></br>
               <h2 className="text-center">COURSES LIST</h2>
               <i style={{color:"green"}} class="fa fa-plus size-lg" onClick={this.addCourse}>{" "}Add Course</i>
                     <table className="table mt-3">
                        <thead className="table-light">
                            <tr>
                               <th>Course Id</th>
                               <th>Course Name</th>
                               <th>Course description</th>
                               <th>Course eligibility</th>
                               <th colSpan="3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.course.map(
                                courses =>
                                <tr key={courses.courseId}>
                                    <td>{courses.courseId}</td>
                                    <td>{courses.courseName}</td>
                                    <td>{courses.description}</td>
                                    <td>{courses.eligibility}</td>
                                    <td>
                                    <i style={{color:"green"}}onClick={() => this.editCourse(courses.courseId)} className="fa fa-edit "/>
                                    <i style={{color:"red"}}onClick={() => this.deleteCourse(courses.courseId)} className="fa fa-trash ml-2"/>
                                    <i style={{color:"orange"}}onClick={() => this.viewCourse(courses.courseId)} className="fa fa-eye ml-2"/>
                                    </td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                <button className="btn btn-info size-lg" onClick={this.goback.bind(this)}><i className="fa fa-arrow-left "></i></button>
            </div>
        )
    }

}
export default ListCourseComponent

