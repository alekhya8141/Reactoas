import React, { Component } from 'react';
import UniversityService from '../services/UniversityService';

class UpdateUniversity extends Component {

    constructor(props){
        super(props)
        this.state = {
            universityid:this.props.match.params.universityid,
            name :'',
            

        }
        this.changeuniversityidHandler=this.changeuniversityidHandler.bind(this);
        this.changenameHandler=this.changenameHandler.bind(this);
        this.updateUniversity=this.updateUniversity.bind(this);
    }

    componentDidMount(){
        UniversityService.getUniversityById(this.state.universityid).then((res) =>{
            let university=res.data;
            this.setState({universityid:university.universityid,name:university.name});
        });
    }

    updateUniversity = (e) => {
        e.preventDefault();
        let university={universityid:this.state.universityid,name:this.state.name};
        console.log('university => '+ JSON.stringify(university));

        UniversityService.updateUniversity(this.state.universityid,university).then((res) => {
              this.props.history.push(`/university`);
        });

    }
    
    changeuniversityidHandler =(event) =>{
        this.setState({universityid:event.target.value});
    }
    changenameHandler= (event) => {
        this.setState({name:event.target.value});
    }
    cancel(){
        this.props.history.push('/university');
    }



    render() { 
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update University</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.universityid}</h1>
                        
                                    <div className="form-group">
                                      <label>universityid</label>
                                    <input placeholder="universityid" name="universityid" className="form-control" value={this.state.universityid} onChange={this.changeuniversityidHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>name</label>
                                      <input placeholder="Name" name="Name" className="form-control" value={this.state.name} onChange={this.changenameHandler}/>
                                  </div>
                                 
                                 
    
                                    <button className="btn btn-success" onClick={this.updateUniversity.bind(this)}style={{marginLeft:"10px"}}>Save</button>
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
 
export default UpdateUniversity;