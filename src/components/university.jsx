import React,{Component} from 'react';
import UniversityService from '../service/universityService';
import _ from "lodash";
import {Link} from "react-router-dom";

class University extends Component{
    constructor(props){
        super(props)
        this.state={
        sortColumn:{path:"title",order:"asc"},
        search:"",
    universities : []
        };

}
componentDidMount(){
    UniversityService.getAllUniversities().then((res)=>{
    console.log(res.data)
        this.setState({universities:res.data});
    
    });
    console.log("updateUniversity:"+this.state.universities);
}
    deleteUniversityById=(universityid)=>{
        console.log("Delete university with id: " +universityid);
        const universities=this.state.universities.filter(
            (university)=>university.universityid !== universityid
        );
        this.setState({ universities});
        UniversityService.deleteUniversityById(universityid);
    };
    viewUniversity=()=>{
        let universities=[];
        UniversityService.getUniversityById(this.state.serach).then((res)=>{
          console.log("**data: ", res.data);
          universities=res.data;
        });
        this.setState({ universities });
        console.log("**viewUniversity"+this.state.universities);
      };
        handleSort=(path)=>{
        console.log(path);
        this.setState({ 
        sortColumn: { path, order: "asc"}});
      };
    
      onChange=(event)=>{
        console.log(event.target.value);
        this.setState({ search: event.target.value });
      };
    
    
    

render(){
    const { search, sortColumn, universities}=this.state;
    var sorted=[];
    if(search){
      sorted=universities.filter((university)=>university.universityId==search);
    }else{
      sorted=_.orderBy(
        this.state.universities,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.universities);
    console.log("Sorted..",sorted);
    return(
        <div>
            <h2 className="text-center">University List</h2>
            <div className="W-75 mt-5 mx-auto">
                <div className="d-flex justify-content-between">
                <Link to="/university/add"className="btn.btn-success.btn-large.mb-1">
                Add
                </Link>
                <form class="form-inline my-2 my-lg-0">
             <input
              classNAme="form-control ml-auto"
              type="search"
              placeholder="search by Id"
              aria-label="search"
              onChange={this.onChange}
             />
             <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.viewUniversity} 
             >
               Search
            </button> 
           </form>
         </div>
            </div>
            <div className = "row"> 
            <table className=" table table-mt-7">
               
                <thead>
                    <tr>
                     <th onClick={()=>this.handleSort("universityId")}> universityId</th> 
                   <th onClick={()=>this.handleSort("name")}> name</th>
                   <th colSpan="2">Action</th>
            
                    </tr>
                </thead>
                <tbody>
                    {
                        sorted.map((university) => (
                        <tr key ={university.universityId}>
                            <th>{university.universityId}</th>
                            <td>{university.name}</td>
                            <td>
                            <Link to={'/university/update/${university.universityId}'}>
                      <button className="btn btn-secondary">Update</button>
                    </Link>

                             <button 
                             className="btn btn-danger ml-2"
                             onClick={()=> this.deleteUniversityById(university.universityid)}
                             >
                                 Delete
                                 </button>   
                            </td>
            
                           
                            
                             </tr>
                    ))
}
                </tbody>
            </table>
            </div>
        </div>
    );
}
}
export default University;
