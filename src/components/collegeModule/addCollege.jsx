import React,{ Component } from 'react'
import CollegeService from '../../service/collegeService';
  
class AddCollege extends Component{
    constructor(props){
        super(props)

        this.state={
            collegeRegId:'',
            collegeName :'',
            
        }
        this.changecollegeRegIdHandler=this.changecollegeRegIdHandler.bind(this);
        this.changecollegeNameHandler=this.changecollegeNameHandler.bind(this);
         this.saveCollege=this.saveCollege.bind(this);
    }
    saveCollege= (e) =>{
        e.preventDefault();
        let college ={collegeRegId:this.state.collegeRegId,collegeName:this.state.collegeName};
        console.log('college => '+JSON.stringify(college));

        CollegeService.addCollege(college).then(res => {
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
render(){
    return(
        <div>
            <br></br>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Add College</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>collegeRegId</label>
                                      <input placeholder="collegeRegId" name="collegeRegId" className="form-control" value={this.state.collegeRegId} onChange={this.changecollegeRegIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>collegeName</label>
                                      <input placeholder="collegeName"  name="collegeName" className="form-control" value={this.state.collegeName} onChange={this.changecollegeNameHandler}/>
                                  </div>
        
                                  <button className="btn btn-success" onClick={this.saveCollege}>Save</button>
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
export default AddCollege