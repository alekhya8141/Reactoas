import React, { Component } from 'react';
import AddressService from '../../services/AddressService';


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
                <h3 className ="text-center"> getAddressId</h3>
                <div className="card bg-info text-dark">
                <div className ="card-body">
                <h1>{this.props.match.params.addressId}</h1>
                    <div className ="row">
                        <label><b>addressId: </b></label>
                        <div>{this.state.address.addressId}</div>
                    </div>
                    <div className ="row">
                        <label><b>city:</b> </label>
                        <div>{this.state.address.city}</div>
                    </div>
                    <div className ="row">
                        <label><b>district: </b></label>
                        <div>{this.state.address.district}</div>
                    </div>
                    <div className ="row">
                        <label><b>state: </b></label>
                        <div>{this.state.address.state}</div>
                    </div>
                    <div className ="row">
                        <label><b>country: </b></label>
                        <div>{this.state.address.country}</div>
                    </div>
                    <div className ="row">
                        <label><b>zipcode: </b></label>
                        <div>{this.state.address.zipcode}</div>
                    </div>
                    <div className ="row">
                        <label><b>landmark: </b></label>
                        <div>{this.state.address.landmark}</div>
                    </div>
                        
                </div>

                </div>
            </div>
         )
    }
}
 
export default getAddressId;