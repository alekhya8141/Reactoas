import React,{ Component } from 'react'
import UniversityService from '../../service/universityService';
  
class AddUniversity extends Component{
    constructor(props){
        super(props)

        this.state={
            universityId:'',
            name :'',
            
        }
        this.changeuniversityIdHandler=this.changeuniversityIdHandler.bind(this);
        this.changenameHandler=this.changenameHandler.bind(this);
         this.saveUniversity=this.saveUniversity.bind(this);
    }
    saveUniversity= (e) =>{
        e.preventDefault();
        let university ={universityId:this.state.universityId,name:this.state.name};
        console.log('university => '+JSON.stringify(university));

        UniversityService.addUniversity(university).then(res => {
           this.props.history.push(`/university`);
        });
    }
    changeuniversityIdHandler =(event) =>{
        this.setState({universityId:event.target.value});
    }
    changenameHandler= (event) => {
        this.setState({name:event.target.value});
    }
   
    cancel(){
        this.props.history.push('/university');
    }
render(){
    return(
        <div>
            <br></br>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Add University</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>universityId</label>
                                      <input placeholder="universityId" name="universityId" className="form-control" value={this.state.universityId} onChange={this.changeuniversityIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>name</label>
                                      <input placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.changenameHandler}/>
                                  </div>
        
                                  <button className="btn btn-success" onClick={this.saveUniversity}>Save</button>
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
export default AddUniversity