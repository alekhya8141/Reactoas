import React, { Component } from 'react';
import UniversityService from '../../service/universityService';

class UpdateUniversity extends Component {

    constructor(props){
        super(props)
        this.state = {
            universityId:this.props.match.params.universityId,
            name :'',
            

        }
        this.changeuniversityIdHandler=this.changeuniversityIdHandler.bind(this);
        this.changenameHandler=this.changenameHandler.bind(this);
        this.updateUniversity=this.updateUniversity.bind(this);
    }

    componentDidMount(){
        UniversityService.getUniversityById(this.state.universityId).then((res) =>{
            let university=res.data;
            this.setState({universityId:university.universityId,name:university.name});
        });
    }

    updateUniversity = (e) => {
        e.preventDefault();
        let university={universityId:this.state.universityId,name:this.state.name};
        console.log('university => '+ JSON.stringify(university));

        UniversityService.updateUniversity(this.state.universityId,university).then((res) => {
              this.props.history.push(`/university`);
        });

    }
    
    changeuniversityIdHandler =(event) =>{
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
                            <h3 className="text-left">Update University</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.universityId}</h1>
                        
                                    <div className="form-group">
                                      <label>universityId</label>
                                    <input placeholder="universityId" name="universityId" className="form-control" value={this.state.universityId} onChange={this.changeuniversityIdHandler}/>
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