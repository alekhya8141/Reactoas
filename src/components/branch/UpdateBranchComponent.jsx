import React, { Component } from 'react'
import BranchService from '../../service/BranchService';

class UpdateBranchComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            branchId:this.props.match.params.branchId,
            branchName :'',
            branchDescription:'',
        }
        this.changeBranchNameHandler=this.changeBranchNameHandler.bind(this);
        this.changeBranchDescriptionHandler=this.changeBranchDescriptionHandler.bind(this);
        this.updateBranch=this.updateBranch.bind(this);
    }
    componentDidMount(){
        BranchService.getBranchById(this.state.branchId).then((res) =>{
            let branch = res.data;
            this.setState({branchId:branch.branchId,branchName:branch.branchName,
                branchDescription:branch.branchDescription
            });
        });
    }
    updateBranch= (e) =>{
        e.preventDefault();
        let branch ={branchId:this.state.branchId,branchName:this.state.branchName,branchDescription:this.state.branchDescription};
        console.log('branch => '+ JSON.stringify(branch));
        BranchService.updateBranch(this.state.branchId,branch).then(res =>{
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
                        <h3 className = "text-center">Update Branch</h3>
                          <div className = "card-body">
                              <form>
                                  <h3>{this.props.match.params.branchId}</h3>
                                  <div className="form-group">
                                      <label>BranchId</label>
                                      <input placeholder="BranchId" name="BranchID" className="form-control" value={this.state.branchId} onChange={this.changeBranchIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>BranchName</label>
                                      <input placeholder="BranchName" name="branchName" className="form-control" value={this.state.branchName} onChange={this.changeBranchNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>BranchDescription</label>
                                      <input placeholder="BranchDescription" name="branchDescription" className="form-control" value={this.state.branchDescription} onChange={this.changeBranchDescriptionHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.updateBranch}>Update</button>
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
export default UpdateBranchComponent