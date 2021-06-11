import React,{ Component } from 'react'
import BranchService from '../../service/BranchService';
  
class BranchDetails extends Component{
    constructor(props){
        super(props)

        this.state={
            branchId:'',
            branchName :'',
            branchDescription:''
        }
        this.changeBranchIdHandler=this.changeBranchIdHandler.bind(this);
        this.changeBranchNameHandler=this.changeBranchNameHandler.bind(this);
        this.changeBranchDescriptionHandler=this.changeBranchDescriptionHandler.bind(this);
        this.saveBranch=this.saveBranch.bind(this);
    }
    saveBranch= (e) =>{
        e.preventDefault();
        let branch ={branchId:this.state.branchId,branchName:this.state.branchName,branchDescription:this.state.branchDescription};
        console.log('branch => '+JSON.stringify(branch));

        BranchService.createBranch(branch).then(res => {
           this.props.history.push(`/branch`);
        });
    }
    changeBranchIdHandler =(event) =>{
        this.setState({branchId:event.target.value});
    }
    changeBranchNameHandler= (event) => {
        this.setState({branchName:event.target.value});
    }
    changeBranchDescriptionHandler =(event) => {
        this.setState({branchDescription:event.target.value});
    }
    cancel(){
        this.props.history.push('/branch');
    }
render(){
    return(
        <div>
            <br></br>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Add Branch</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>BranchId</label>
                                      <input placeholder="BranchId" name="branchID" className="form-control" value={this.state.branchId} onChange={this.changeBranchIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>BranchName</label>
                                      <input placeholder="BranchName" name="branchName" className="form-control" value={this.state.branchName} onChange={this.changeBranchNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>BranchDescription</label>
                                      <input placeholder="BranchDescription" name="branchDescription" className="form-control" value={this.state.branchDescription} onChange={this.changeBranchDescriptionHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.saveBranch}>Save</button>
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
export default BranchDetails