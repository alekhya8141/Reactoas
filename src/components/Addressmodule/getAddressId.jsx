import React, { Component } from 'react';
import AddressService from '../../service/AddressService';


class getAddressId extends Component {
    constructor(props){
        super(props)
        this.state={
            addressId: this.props.match.params.addressId,
            address:{}
        }
    }

    componentDidMount(){
        AddressService.getAddressId(this.state.addressId).then( res =>{
            this.setState({address: res.data});
        })
    }
    render() { 
        return ( 
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center">View Address</h3>
                <div className ="card-body">
                <h1>{this.props.match.params.addressId}</h1>
                    <div className ="row">
                        <label><b>AdressId: </b></label>
                        <div>{this.state.address.addressId}</div>
                    </div>
                    <div className ="row">
                        <label><b>City:</b> </label>
                        <div>{this.state.address.city}</div>
                    </div>
                    <div className ="row">
                        <label><b>District: </b></label>
                        <div>{this.state.address.district}</div>
                    </div>
                    <div className ="row">
                        <label><b>State: </b></label>
                        <div>{this.state.address.state}</div>
                    </div>
                    <div className ="row">
                        <label><b>Country: </b></label>
                        <div>{this.state.address.country}</div>
                    </div>
                    <div className ="row">
                        <label><b>Zipcode: </b></label>
                        <div>{this.state.address.zipcode}</div>
                    </div>
                    <div className ="row">
                        <label><b>Landmark: </b></label>
                        <div>{this.state.address.landmark}</div>
                    </div>  
                </div>
                </div>
         )
    }
}
 
export default getAddressId;