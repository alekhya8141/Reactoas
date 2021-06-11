import React, { Component } from 'react';
import CollegeService from '../../service/collegeService';

class UpdateCollegeName extends Component 
{

    constructor(props){
        super(props)
        this.state = {
            collegeRegId:this.props.match.params.collegeRegId,
            collegeName :'',
            

        }
        this.changecollegeRegIdHandler=this.changecollegeRegIdHandler.bind(this);
        this.changecollegeNameHandler=this.changecollegeNameHandler.bind(this);
        this.updateCollegeName=this.updateCollegeName.bind(this);
    }

    componentDidMount(){
        CollegeService.getCollegeByCollegeRegId(this.state.collegeRegId).then((res) =>{
            let college=res.data;
            this.setState({collegeRegId:college.collegeRegId,collegeName:college.CollegeName});
        });
    }

    updateCollegeName = (e) => {
        e.preventDefault();
        let college={collegeRegId:this.state.collegeRegId,collegeName:this.state.collegeName};
        console.log('college => '+ JSON.stringify(college));

        CollegeService.updateCollegeName(this.state.collegeRegId,college).then((res) => {
              this.props.history.push(`/college`);
        });

    }
    
    changecollegeRegIdHandler =(event) =>{
        this.setState({collegeRegId:event.target.value});
    }
    changecollegeNameHandler= (event) => {
        this.setState({collegeName:event.target.value});
    }
    cancel(){
        this.props.history.push('/college');
    }



    render() { 
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update College</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.collegeRegId}</h1>
                        
                                    <div className="form-group">
                                      <label>collegeRegId</label>
                                    <input placeholder="collegeRegId" name="collegeRegId" className="form-control" value={this.state.collegeRegId} onChange={this.changecollegeRegIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>collegeName</label>
                                      <input placeholder="collegeName" name="collegeName" className="form-control" value={this.state.collegeName} onChange={this.changecollegeNameHandler}/>
                                  </div>
                                 
    
                                    <button className="btn btn-success" onClick={this.updateCollegeName.bind(this)}style={{marginLeft:"10px"}}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
 
export default UpdateCollegeName;