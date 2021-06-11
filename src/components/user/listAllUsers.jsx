import React, { Component } from 'react';
import UserService from '../../service/UserService';
class ListAllUsers extends Component {
  constructor(props){
    super(props)

    this.state={
        users:[]
    }
  this.deleteUserByUserId=this.deleteUserByUserId.bind(this); 
  this.updateUser=this.updateUser.bind(this);
  this.viewUser=this.viewUser.bind(this);
  }
  addUser=()=>{
    this.props.history.push(`/create-user`);
    
  }
viewUser(userid){
  this.props.history.push(`/view-user/${userid}`);
}
updateUser(userid){
  this.props.history.push(`/update-user/${userid}`);

}
  deleteUserByUserId(userid){
    UserService.deleteUserByUserId(userid).then(res => {
        this.setState({users: this.state.users.filter(user => user.userid !== userid)});
    });
}
  componentDidMount() {
    UserService.getAllUsers().then((res) => {
      console.log("data: ", res.data);
      this.setState({ users: res.data });
    });
   
  }
  goback(){
    this.props.history.push('/ahome');
}
  
    render() { 
        return ( 
          <div className = "container">
            <br></br>
              <h2 className="text-center">USERS LIST</h2>
              <button style={{color:"blue"}} type="button" className="fa fa-plus" onClick={this.addUser}>Add User</button>
                <table className="table mt-3">
                  <thead className="table-light">
                    <tr>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Email</th>
                      <th>MobileNumber</th>
                      <th>AadharNumber</th>
                      <th>Actions</th>
                      </tr>
                  </thead>

            <tbody>
              {
              this.state.users.map (
                user =>
                <tr key={user.userid}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNumber}</td>
                  <td>{user.aadharnumber}</td>
                  <td>
                  <i style={{color:"green"}}
                     onClick={() =>this.updateUser(user.userid)} className="fa fa-edit"/>
                  <i style={{marginLeft:"10px",color:"red"}}
                    onClick = { () => this.deleteUserByUserId(user.userid)} className="fa fa-trash"/>
                  <i style={{marginLeft:"10px",color:"orange"}}
                    onClick = { () => this.viewUser(user.userid)} className="fa fa-eye"/>
                </td>
                  </tr>
                  
              )
                 }
    </tbody>
    </table>
    <button className="btn btn-info size-lg" onClick={this.goback.bind(this)}><i className="fa fa-arrow-left "></i></button>
     </div>
         );
    }     
}
export default  ListAllUsers;