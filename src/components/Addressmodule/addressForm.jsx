import React, { Component } from 'react';
import AddressService from '../../service/AddressService';
import HeaderLogout from "../headerLogout";
import Footer from "../Footer";
import "../homeform.css"

class addressForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            addressId:this.props.match.params.addressId,
            city :'',
            district:'',
            state:'',
            country:'',
            zipcode:'',
            landmark:'',

        }
        this.changeaddressIdHandler=this.changeaddressIdHandler.bind(this);
        this.changecityHandler=this.changecityHandler.bind(this);
        this.changedistrictHandler=this.changedistrictHandler.bind(this);
        this.changestateHandler=this.changestateHandler.bind(this);
        this.changecountryHandler=this.changecountryHandler.bind(this);
        this.changezipcodeHandler=this.changezipcodeHandler.bind(this);
        this.changelandmarkHandler=this.changelandmarkHandler.bind(this);
        this.saveAddress=this.saveAddress.bind(this);
    }

    saveAddress= (e) =>{
        e.preventDefault();
        let address ={addressId:this.state.addressId,city:this.state.city,district:this.state.district,state:this.state.state,country:this.state.country,zipcode:this.state.zipcode,landmark:this.state.landmark};
        console.log('address => '+JSON.stringify(address));

        AddressService.CreateAddress(address).then(res => {
           this.props.history.push('/documentform');
        });

    }
    

    changeaddressIdHandler =(event) =>{
        this.setState({addressId:event.target.value});
    }
    changecityHandler= (event) => {
        this.setState({city:event.target.value});
    }
    changedistrictHandler =(event) => {
        this.setState({district:event.target.value});
    }
    changestateHandler =(event) => {
        this.setState({state:event.target.value});
    }
    changecountryHandler =(event) => {
        this.setState({country:event.target.value});
    }
    changezipcodeHandler =(event) => {
        this.setState({zipcode:event.target.value});
    }
    changelandmarkHandler =(event) => {
        this.setState({landmark:event.target.value});
    }

    Back(){
        this.props.history.push('/applicationform');
    }



    render() { 
        return (  
            <div class="homeform">
                <HeaderLogout/>
                <div className="container" style={{marginBottom:"50px", marginTop:"50px"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Address Form</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.addressId}</h1>
                                  <div className="form-group text-left">
                                      <label>City:</label>
                                      <input placeholder="city" name="city" className="form-control" value={this.state.city} onChange={this.changecityHandler}/>
                                  </div>
                                  <div className="form-group text-left">
                                      <label>District:</label>
                                      <input placeholder="District" name="district" className="form-control" value={this.state.district} onChange={this.changedistrictHandler}/>
                                  </div>
                                  <div className="form-group text-left">
                                      <label>State:</label>
                                      <input placeholder="State" name="state" className="form-control" value={this.state.state} onChange={this.changestateHandler}/>
                                  </div>
                                  <div className="form-group text-left">
                                      <label>Country:</label>
                                      <input placeholder="Country" name="country" className="form-control" value={this.state.country} onChange={this.changecountryHandler}/>
                                  </div>
                                  <div className="form-group text-left">
                                      <label>Zipcode:</label>
                                      <input placeholder="Zipcode" name="zipcode" className="form-control" value={this.state.zipcode} onChange={this.changezipcodeHandler}/>
                                  </div>
                                  <div className="form-group text-left">
                                      <label>Landmark:</label>
                                      <input placeholder="Landmark" name="landmark" className="form-control" value={this.state.landmark} onChange={this.changelandmarkHandler}/>
                                  </div>
                                  <button className="btn btn-primary float-left"  onClick={this.Back.bind(this)} style={{marginLeft:"10px"}}>Back</button>
                                  <button className="btn btn-success float-right" onClick={this.saveAddress}>Next</button>
                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>
<Footer/>
            </div>
        )
    }
}
 
export default addressForm;