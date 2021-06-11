import React, { Component } from 'react';
import CollegeService from '../../service/collegeService';


class getCollegeByCollegeRegId extends Component {
    constructor(props){
        super(props)
        this.state={
            collegeRegId: this.props.match.params.collegeRegId,
            college:{}
        }
    }

    componentDidMount(){
        CollegeService.getCollegeByCollegeRegId(this.state.collegeRegId).then( res =>{
            this.setState({college: res.data});
        })
    }
    render() { 
        return ( 
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center"> getcollegeByCollegeRegId</h3>
                <div className="card bg-info text-dark">
                <div className ="card-body">
                <h1>{this.props.match.params.colleegRegId}</h1>
                    <div className ="row">
                        <label><b>collegeRegId: </b></label>
                        <div>{this.state.college.collegeRegId}</div>
                    </div>
                    <div className ="row">
                        <label><b>collegeName:</b> </label>
                        <div>{this.state.college.collegeName}</div>
                    </div>
                    
                        
                </div>

                </div>
            </div>
         )
    }
}
 
export default getCollegeByCollegeRegId;