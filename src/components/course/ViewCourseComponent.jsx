import React, { Component } from 'react'
import CourseService from '../../service/CourseService'

class ViewCourseComponent extends Component{
    constructor(props){
        super(props)

        this.state={
           courseId: this.props.match.params.courseId,
           course:[]
        }
    }

componentDidMount(){
    CourseService.getCourseById(this.state.courseId).then( res => {
        this.setState({course: res.data});
    })
}
back(){
    this.props.history.push('/course');
}
   render(){
       return(
           <div>
               <br></br>
               <div className = "card col-md-6 offset-md-3">
                   <h3 className = "text-center"> View Course Details</h3>
                   <div className = "card bg-success text-dark"></div>
                   <div className = "card-body">
                       <div>
                           <label><b>Course Name:</b></label>
                           <div>{this.state.course.courseName}</div>
                           <br></br>
                           <label><b>Course Description:</b></label>
                           <div>{this.state.course.description}</div>
                           <br></br>
                           <label><b>Course Eligibility:</b></label>
                           <div>{this.state.course.eligibility}</div>
                       </div>
                       <button className="btn btn-info"  onClick={this.back.bind(this)} style={{margin:"10px 180px"}}>Back</button>
                   </div>
               </div>

           </div>
       )
    }
}

export default ViewCourseComponent