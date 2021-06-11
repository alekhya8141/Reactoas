import React, { Component } from 'react';
import AddressService from '../../service/AddressService';

class UpdateAddress extends Component {

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
        this.updateAddress=this.updateAddress.bind(this);
    }

    componentDidMount(){
        AddressService.getAddressId(this.state.addressId).then((res) =>{
            let address=res.data;
            this.setState({addressId:address.addressId,city:address.city,district:address.district,state:address.state,country:address.country,zipcode:address.zipcode,landmark:address.landmark});
        });
    }

    updateAddress = (e) => {
        e.preventDefault();
        let address={addressId:this.state.addressId,city:this.state.city,district:this.state.district,state:this.state.state,country:this.state.country,zipcode:this.state.zipcode,landmark:this.state.landmark};
        console.log('address => '+ JSON.stringify(address));

        AddressService.updateAddress(this.state.addressId,address).then((res) => {
              this.props.history.push(`/address`);
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

    cancel(){
        this.props.history.push('/address');
    }



    render() { 
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Address</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.addressId}</h1>
                        
                                    <div className="form-group">
                                      <label>addressId</label>
                                      <input placeholder="AddressId" name="addressId" className="form-control" value={this.state.addressID} onChange={this.changeaddressIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>city</label>
                                      <input placeholder="city" name="city" className="form-control" value={this.state.city} onChange={this.changecityHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>district</label>
                                      <input placeholder="district" name="district" className="form-control" value={this.state.district} onChange={this.changedistrictHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>state</label>
                                      <input placeholder="state" name="state" className="form-control" value={this.state.state} onChange={this.changestateHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>country</label>
                                      <input placeholder="country" name="country" className="form-control" value={this.state.country} onChange={this.changecountryHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>zipcode</label>
                                      <input placeholder="zipcode" name="zipcode" className="form-control" value={this.state.zipcode} onChange={this.changezipcodeHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>landmark</label>
                                      <input placeholder="landmark" name="landmark" className="form-control" value={this.state.landmark} onChange={this.changelandmarkHandler}/>
                                  </div>
                                    <button className="btn btn-success" onClick={this.updateAddress}style={{marginLeft:"10px"}}>Save</button>
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
 
export default UpdateAddress;