import React, { Component } from 'react';
import UserService from '../../service/UserService';
class ViewUser extends Component {
    constructor(props){
        super(props)

        this.state={
            userid:this.props.match.params.userid,
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            mobileNumber:'',
            aadharnumber:''
        }
    }
       
    componentDidMount(){
        UserService.viewUser(this.state.userid).then((res) =>{
            let user=res.data;
            this.setState({firstname:user.firstname,lastname:user.lastname,email:user.email,password:user.password, mobileNumber:user.mobileNumber,aadharnumber:user.aadharnumber});
        });
    }   
    back(){
        this.props.history.push('/users');
    }  
     
    render() { 
        return (   
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className ="text-center"> View User Details</h3>
                    <div className="card text-dark">
                    <div className ="card-body">
                    <div>
                            <label><b>User UserId: </b></label>
                            <div>{this.state.userid}</div>
                        <br></br>
                            <label><b>User FirstName: </b></label>
                            <div>{this.state.firstname}</div>
                        <br></br>
                            <label><b> User LastName: </b> </label>
                            <div>{this.state.lastname}</div>
                        <br></br>
                            <label><b>User Email: </b></label>
                            <div>{this.state.email}</div>
                        <br></br>
                            <label><b>User MobileNumber: </b></label>
                            <div>{this.state.mobileNumber}</div>
                        <br></br>
                            <label><b>User aadharNumber: </b></label>
                            <div>{this.state.aadharnumber}</div>
                        </div>
                        <br></br>
                        <button className="btn btn-dark"  onClick={this.back.bind(this)} style={{marginLeft:"20px"}}>Back</button>

                    </div>
                    </div>
                    </div>
                </div>
        );
    }
}
 
export default ViewUser;