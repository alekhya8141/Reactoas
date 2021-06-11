import React, { Component } from 'react'
import UniversityService from '../../service/universityService'

class ViewUniversity extends Component{
    constructor(props){
        super(props)

        this.state={
           universityId: this.props.match.params.universityId,
           university:[]
        }
    }

componentDidMount(){
    UniversityService.getUniversityById(this.state.universityId).then( res => {
        this.setState({university: res.data});
    })
}
back(){
    this.props.history.push('/university');
}
   render(){
       return(
           <div>
               <br></br>
               <div className = "card col-md-6 offset-md-3">
                   <h3 className = "text-center"> View University Details</h3>
                   <div className = "card bg-success text-dark"></div>
                   <div className = "card-body">
                       <div className = "row">
                           <label>name:</label>
                           <div>{this.state.university.name}</div>
                       </div>
                       
                   </div>
                   <button className="btn btn-info"  onClick={this.back.bind(this)} style={{margin:"10px 180px"}}>Back</button>
               </div>

           </div>
       )
    }
}

export default ViewUniversity