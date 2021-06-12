import React, { Component } from 'react'
import BranchService from '../../service/BranchService'

class ListBranchComponent extends Component{
    constructor(props){
        super(props)

        this.state={
           branchId: this.props.match.params.branchId,
           branch:[]
        }
        this.addBranch=this.addBranch.bind(this);
        this.editBranch=this.editBranch.bind(this);
        this.deleteBranch=this.deleteBranch.bind(this);
    }

    componentDidMount(){
        BranchService.getAllBranch().then((res)=>{
            this.setState({branch:res.data});
        });
    }
    addBranch(){
        this.props.history.push('/add-branch');
    }
    editBranch(branchId){
        this.props.history.push(`/update-branch/${branchId}`)
    }
    deleteBranch(branchId){
        BranchService.deleteBranch(branchId).then(res => {
            this.setState({branch:this.state.branch.filter(branch => branch.branchId !== branchId)});
          });
    }
    viewBranch(branchId){
            this.props.history.push(`view-Branch/${branchId}`)
    }
    goback(){
        this.props.history.push('/ahome');
    }
render(){
    return(
        <div className="container">
            <br></br>
           <h2 className="text-center">BRANCHES LIST</h2>
              <i style={{color:"green"}} class="fa fa-plus size-lg" onClick={this.addBranch}>{" "}Add Branch</i>
                 <table className="table mt-2">
                    <thead className="table-light">
                        <tr>
                           <th>Branch Id</th>
                           <th>Branch Name</th>
                           <th>Barnch description</th>
                           <th colSpan="3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.branch.map(
                            branches =>
                            <tr key={branches.branchId}>
                                <td>{branches.branchId}</td>
                                <td>{branches.branchName}</td>
                                <td>{branches.branchDescription}</td>
                                <td>
                                <i style={{color:"green"}}onClick={() => this.editBranch(branches.branchId)} className="fa fa-edit "/>
                                <i style={{color:"red"}}onClick={() => this.deleteBranch(branches.branchId)} className="fa fa-trash ml-2"/>
                                <i style={{color:"orange"}}onClick={() => this.viewBranch(branches.branchId)} className="fa fa-eye ml-2"/>
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

export default ListBranchComponent