import React, { Component } from 'react';
import UniversityService from "../service/universityService";


class AddUniversity extends Component{
    state={
        university:{
            universityId:"",
            name:"",

        },
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Submitted");
        UniversityService.createUniversity(this.state.university).then((res)=>{
            this.props.history.push("");

        });
    };
    handleChange=(event)=>{
        const university={...this.state.university};
        university[event.currentTarget.name]=event.currentTarget.value;
        this.setState({university});
    };
    render(){
        return(
            <div className="w-50 mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="universityId" className="form-label">
                            UniversityId
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="universityId"
                          name="universityId"
                          value={this.state.university.universityId}
                          onChange={this.handleChange}
                          autoFocus
                        />
                       <label htmlFor="name" className="form-label">
                            name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={this.state.university.name}
                          onChange={this.handleChange}
                        />
                    
                    </div>   
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>     
                </form>
            </div>
        );
    }
}

export default AddUniversity;