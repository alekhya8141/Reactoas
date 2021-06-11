import React, { Component } from 'react'
import BranchService from '../../service/BranchService'

class ViewBranchComponent extends Component{
    constructor(props){
        super(props)

        this.state={
           branchId: this.props.match.params.branchId,
           branch:[]
        }
    }

componentDidMount(){
    BranchService.getBranchById(this.state.branchId).then( res => {
        this.setState({branch: res.data});
    })
}
back(){
    this.props.history.push('/branch');
}
   render(){
       return(
           <div>
               <br></br>
               <div className = "card col-md-6 offset-md-3">
                   <h3 className = "text-center"> View Branch Details</h3>
                   <div className = "card bg-success text-dark"></div>
                   <div className = "card-body">
                       <div>
                           <label><b>Branch Name:</b></label>
                           <div>{this.state.branch.branchName}</div>
                           <br></br>
                           <label><b>Branch Description:</b></label>
                           <div>{this.state.branch.branchDescription}</div>
                       </div>
                   </div>
                   <button className="btn btn-info"  onClick={this.back.bind(this)} style={{margin:"10px 180px"}}>Back</button>
               </div>

           </div>
       )
    }
}

export default ViewBranchComponent